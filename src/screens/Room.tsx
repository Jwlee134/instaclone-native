import { gql } from "@apollo/client";
import React, { useLayoutEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeRoomQuery, useSendMessageMutation } from "../graphql/generated";
import useMe from "../hooks/useMe";
import { RoomScreenProps } from "../types/navigators";

const MessageContainer = styled.View<{ isMine: boolean }>`
  padding: 0 10px;
  flex-direction: ${({ isMine }) => (isMine ? "row-reverse" : "row")};
  align-items: flex-end;
`;

const Avatar = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
`;

const Message = styled.Text`
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px 10px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
  margin: 0 10px;
  max-width: 60%;
`;

const Input = styled.TextInput`
  height: 40px;
  padding: 0 20px;
  border-radius: 1000px;
  width: 95%;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
`;

interface Form {
  message: string;
}

const Room = ({
  navigation,
  route: {
    params: { roomId, title, userId },
  },
}: RoomScreenProps) => {
  const me = useMe();
  const bottom = useSafeAreaInsets().bottom;
  const { control, handleSubmit, setValue, getValues } = useForm<Form>();

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  const { data: { seeRoom } = {}, loading } = useSeeRoomQuery({
    variables: { seeRoomId: roomId },
  });
  const [send, { loading: sendingMessage }] = useSendMessageMutation({
    update: (cache, { data }) => {
      if (!data?.sendMessage.isSuccess) return;
      const newMessage = {
        __typename: "Message",
        id: data.sendMessage.id,
        text: getValues("message"),
        user: {
          id: me?.id,
          username: me?.username,
          avatar: me?.avatar,
          createAt: Date.now(),
        },
        read: false,
      };
      const ref = cache.writeFragment({
        fragment: gql`
          fragment NewMessage on Message {
            id
            text
            user {
              id
              username
              avatar
              createdAt
            }
            read
          }
        `,
        data: newMessage,
      });
      cache.modify({
        id: `Room:${roomId}`,
        fields: {
          messages(prev) {
            return [...prev, ref];
          },
        },
      });
      setValue("message", "");
    },
  });

  const onValid = ({ message }: Form) => {
    if (sendingMessage) return;
    send({ variables: { text: message, roomId, userId } });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? undefined : "padding"}
      keyboardVerticalOffset={
        Platform.OS === "android" ? undefined : 55 + bottom
      }>
      <ScreenLayout loading={loading}>
        <FlatList
          style={{ paddingBottom: bottom }}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
          data={seeRoom?.messages || []}
          renderItem={({ item }) => (
            <MessageContainer isMine={item?.user.username !== title}>
              <Avatar source={{ uri: item?.user.avatar || DEFAULT_AVATAR }} />
              <Message>{item?.text}</Message>
            </MessageContainer>
          )}
          keyExtractor={item => item?.id + ""}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="message"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              style={{ marginBottom: bottom }}
              placeholder="Write a message..."
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              returnKeyType="send"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              onSubmitEditing={handleSubmit(onValid)}
            />
          )}
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
};

export default Room;

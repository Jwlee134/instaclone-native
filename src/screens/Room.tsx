/* eslint-disable no-extra-boolean-cast */
import { Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeRoomQuery, useSendMessageMutation } from "../graphql/generated";
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

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

const Input = styled.TextInput`
  height: 40px;
  padding: 0 20px;
  border-radius: 1000px;
  width: 90%;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: white;
`;

const SendButton = styled.TouchableOpacity``;

interface Form {
  message: string;
}

const Room = ({
  navigation,
  route: {
    params: { roomId, title, userId },
  },
}: RoomScreenProps) => {
  const bottom = useSafeAreaInsets().bottom;
  const { control, handleSubmit, setValue, watch } = useForm<Form>();

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  const {
    data: { seeRoom } = {},
    loading,
    refetch,
  } = useSeeRoomQuery({
    variables: { seeRoomId: roomId },
  });
  const [send, { loading: sendingMessage }] = useSendMessageMutation({
    update: (cache, { data }) => {
      if (!data?.sendMessage.isSuccess) return;
      refetch();
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
          inverted
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "flex-end",
            paddingVertical: bottom,
          }}
          data={[...(seeRoom?.messages || [])].reverse() || []}
          renderItem={({ item }) => (
            <MessageContainer isMine={item?.user.username !== title}>
              <Avatar source={{ uri: item?.user.avatar || DEFAULT_AVATAR }} />
              <Message>{item?.text}</Message>
            </MessageContainer>
          )}
          keyExtractor={item => item?.id + ""}
        />
        <InputContainer>
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
          <SendButton
            onPress={handleSubmit(onValid)}
            disabled={!Boolean(watch("message"))}
            style={{ marginBottom: bottom }}>
            <Ionicons
              name="send"
              color={
                !Boolean(watch("message"))
                  ? "rgba(255, 255, 255, 0.5)"
                  : "white"
              }
              size={20}
            />
          </SendButton>
        </InputContainer>
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
};

export default Room;

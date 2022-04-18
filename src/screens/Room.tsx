import React, { useLayoutEffect } from "react";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeRoomQuery } from "../graphql/generated";
import { RoomScreenProps } from "../types/navigators";

const MessageContainer = styled.View``;

const Author = styled.View``;

const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const Username = styled.Text`
  color: white;
`;

const Message = styled.Text`
  color: white;
`;

const Input = styled.TextInput`
  background-color: white;
  height: 40px;
  padding: 0 20px;
  border-radius: 1000px;
  width: 95%;
  margin: 0 auto;
`;

const Room = ({
  navigation,
  route: {
    params: { id, title },
  },
}: RoomScreenProps) => {
  const bottom = useSafeAreaInsets().bottom;

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  const { data: { seeRoom } = {}, loading } = useSeeRoomQuery({
    variables: { seeRoomId: id },
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "android" ? undefined : "height"}
      keyboardVerticalOffset={
        Platform.OS === "android" ? undefined : 40 + bottom
      }>
      <ScreenLayout loading={loading}>
        <FlatList
          style={{ paddingBottom: bottom }}
          data={seeRoom?.messages || []}
          renderItem={({ item }) => (
            <MessageContainer>
              <Author>
                <Avatar source={{ uri: item?.user.avatar || DEFAULT_AVATAR }} />
                <Username>{item?.user.username}</Username>
              </Author>
              <Message>{item?.text}</Message>
            </MessageContainer>
          )}
          keyExtractor={item => item?.id + ""}
        />
        <Input
          style={{ marginBottom: bottom }}
          placeholder="Write a message..."
          placeholderTextColor="gray"
          returnKeyType="send"
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
};

export default Room;

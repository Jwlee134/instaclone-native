import React, { useLayoutEffect } from "react";
import { FlatList, KeyboardAvoidingView, Platform, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeRoomQuery } from "../graphql/generated";
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
        <Input
          style={{ marginBottom: bottom }}
          placeholder="Write a message..."
          placeholderTextColor="rgba(255, 255, 255, 0.5)"
          returnKeyType="send"
        />
      </ScreenLayout>
    </KeyboardAvoidingView>
  );
};

export default Room;

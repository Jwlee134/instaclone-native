import React from "react";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import { UserFragmentFragment } from "../graphql/generated";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

const Username = styled.Text`
  color: white;
  font-weight: 600;
`;

const Column = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Button = styled.TouchableOpacity``;

const ButtonText = styled.Text`
  color: white;
`;

interface Props {
  user: UserFragmentFragment | null;
}

const UserRow = ({ user }: Props) => {
  const onPress = () => {};

  return (
    <Container>
      <Column>
        <Avatar source={{ uri: user?.avatar || DEFAULT_AVATAR }} />
        <Username>{user?.username}</Username>
      </Column>
      {!user?.isMe && (
        <Button onPress={onPress}>
          <ButtonText>{user?.isFollowing ? "Unfollow" : "Follow"}</ButtonText>
        </Button>
      )}
    </Container>
  );
};

export default UserRow;

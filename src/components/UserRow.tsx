import { useNavigation } from "@react-navigation/native";
import React from "react";
import styled from "styled-components/native";
import { DEFAULT_AVATAR } from "../apollo";
import {
  useFollowUserMutation,
  UserFragmentFragment,
  useUnfollowUserMutation,
} from "../graphql/generated";
import { LikesScreenProps } from "../types/navigators";

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

const Column = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.blue};
  padding: 5px 10px;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
`;

interface Props {
  user: UserFragmentFragment | null;
}

const UserRow = ({ user }: Props) => {
  const navigation = useNavigation<LikesScreenProps["navigation"]>();
  const [follow] = useFollowUserMutation({
    variables: { username: user?.username! },
    update: (cache, { data }) => {
      if (!data?.followUser.isSuccess) return;
      cache.modify({
        id: `User:${user?.id!}`,
        fields: { totalFollowing: prev => prev + 1 },
      });
      cache.modify({
        id: `User:${user?.id!}`,
        fields: {
          isFollowing: prev => !prev,
          totalFollowers: prev => prev + 1,
        },
      });
    },
  });
  const [unfollow] = useUnfollowUserMutation({
    variables: { username: user?.username! },
    update: (cache, { data }) => {
      if (!data?.unfollowUser.isSuccess) return;
      cache.modify({
        id: `User:${user?.id!}`,
        fields: { totalFollowing: prev => prev - 1 },
      });
      cache.modify({
        id: `User:${user?.id!}`,
        fields: {
          isFollowing: prev => !prev,
          totalFollowers: prev => prev - 1,
        },
      });
    },
  });

  const onPress = () => (user?.isFollowing ? unfollow() : follow());

  return (
    <Container>
      <Column
        onPress={() =>
          navigation.navigate("Profile", { username: user?.username! })
        }>
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

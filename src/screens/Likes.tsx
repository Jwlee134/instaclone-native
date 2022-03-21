import React from "react";
import { FlatList, Text, View } from "react-native";
import RefreshControl from "../components/RefreshControl";
import ScreenLayout from "../components/ScreenLayout";
import UserRow from "../components/UserRow";
import { useSeeLikesQuery } from "../graphql/generated";
import { LikesScreenProps } from "../types/navigators";

const Likes = ({
  route: {
    params: { id },
  },
}: LikesScreenProps) => {
  const {
    data: { seePhotoLikes } = {},
    loading,
    refetch,
  } = useSeeLikesQuery({
    variables: { seePhotoLikesId: id },
  });

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={seePhotoLikes || []}
        renderItem={({ item }) => <UserRow user={item} />}
        keyExtractor={item => `${item?.id}`}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
      />
    </ScreenLayout>
  );
};

export default Likes;

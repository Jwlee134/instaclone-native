import React from "react";
import { FlatList } from "react-native";
import Photo from "../components/Photo";
import RefreshControl from "../components/RefreshControl";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeFeedQuery } from "../graphql/generated";

const Feed = () => {
  const {
    data: { seeFeed } = {},
    loading,
    refetch,
    fetchMore,
  } = useSeeFeedQuery();

  const onEndReached = () =>
    fetchMore({ variables: { lastId: seeFeed?.[seeFeed.length - 1]?.id } });

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={seeFeed || []}
        renderItem={({ item }) => <Photo item={item} />}
        keyExtractor={item => item?.id + ""}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={loading} />
        }
        onEndReached={onEndReached}
      />
    </ScreenLayout>
  );
};

export default Feed;

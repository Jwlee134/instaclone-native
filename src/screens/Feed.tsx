import React from "react";
import { FlatList, RefreshControl } from "react-native";
import Photo from "../components/Photo";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeFeedQuery } from "../graphql/generated";

const Feed = () => {
  const { data: { seeFeed } = {}, loading, refetch } = useSeeFeedQuery({});

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={seeFeed || []}
        renderItem={({ item }) => <Photo item={item} />}
        keyExtractor={item => item?.id + ""}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={loading}
            tintColor="white"
            colors={["white"]}
            progressBackgroundColor="black"
          />
        }
      />
    </ScreenLayout>
  );
};

export default Feed;

import React from "react";
import { FlatList } from "react-native";
import Photo from "../components/Photo";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeFeedQuery } from "../graphql/generated";

const Feed = () => {
  const { data: { seeFeed } = {}, loading } = useSeeFeedQuery({});

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={seeFeed || []}
        renderItem={({ item }) => <Photo item={item} />}
        keyExtractor={item => item?.id + ""}
        showsVerticalScrollIndicator={false}
      />
    </ScreenLayout>
  );
};

export default Feed;

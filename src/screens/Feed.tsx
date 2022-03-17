import React from "react";
import { Text, View } from "react-native";
import { useSeeFeedQuery } from "../graphql/generated";

const Feed = () => {
  const { data: { seeFeed } = {} } = useSeeFeedQuery();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Feed</Text>
    </View>
  );
};

export default Feed;

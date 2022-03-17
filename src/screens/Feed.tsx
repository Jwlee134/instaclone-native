import React from "react";
import { FlatList, Image, Text, useWindowDimensions, View } from "react-native";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeFeedQuery } from "../graphql/generated";

const Feed = () => {
  const { data: { seeFeed } = {}, loading } = useSeeFeedQuery({});
  const width = useWindowDimensions().width;

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        data={seeFeed || []}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width, height: width }}
              source={{ uri: item?.file }}
            />
            <Text style={{ color: "white" }}>
              {item?.caption || "gagagagasdfhjewhfnudsn"}
            </Text>
          </View>
        )}
        keyExtractor={item => item?.id + ""}
      />
    </ScreenLayout>
  );
};

export default Feed;

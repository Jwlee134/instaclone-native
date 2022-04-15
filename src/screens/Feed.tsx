import React, { useEffect } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Photo from "../components/Photo";
import RefreshControl from "../components/RefreshControl";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeFeedQuery } from "../graphql/generated";
import { Ionicons } from "@expo/vector-icons";
import { FeedScreenProps } from "../types/navigators";

const Feed = ({ navigation }: FeedScreenProps) => {
  const {
    data: { seeFeed } = {},
    loading,
    refetch,
    fetchMore,
  } = useSeeFeedQuery();

  const onEndReached = () =>
    fetchMore({ variables: { lastId: seeFeed?.[seeFeed.length - 1]?.id } });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("MessageNav")}>
          <Ionicons name="paper-plane" color="white" size={20} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

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

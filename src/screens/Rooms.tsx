import { Ionicons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import RefreshControl from "../components/RefreshControl";
import RoomItem from "../components/rooms/RoomItem";
import ScreenLayout from "../components/ScreenLayout";
import { useSeeRoomsQuery } from "../graphql/generated";
import { RoomsScreenProps } from "../types/navigators";

const Rooms = ({ navigation }: RoomsScreenProps) => {
  const { data: { seeRooms } = {}, loading, refetch } = useSeeRoomsQuery();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ tintColor }) => (
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="chevron-down" size={28} color={tintColor} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScreenLayout loading={loading}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refetch} />
        }
        ItemSeparatorComponent={() => (
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />
        )}
        data={seeRooms || []}
        renderItem={({ item }) => <RoomItem item={item} />}
        keyExtractor={item => `${item?.id}`}
      />
    </ScreenLayout>
  );
};

export default Rooms;

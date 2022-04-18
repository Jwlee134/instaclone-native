import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { useSeeRoomQuery } from "../graphql/generated";
import { RoomScreenProps } from "../types/navigators";

const Room = ({
  navigation,
  route: {
    params: { id, title },
  },
}: RoomScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, [navigation, title]);

  const { data: { seeRoom } = {} } = useSeeRoomQuery({
    variables: { seeRoomId: id },
  });
  console.log(seeRoom);
  return (
    <View>
      <Text>Room</Text>
    </View>
  );
};

export default Room;

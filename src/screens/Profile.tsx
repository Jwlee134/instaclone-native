import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { ProfileScreenProps } from "../types/navigators";

const Profile = ({
  navigation,
  route: {
    params: { username },
  },
}: ProfileScreenProps) => {
  useLayoutEffect(() => {
    navigation.setOptions({ title: username });
  }, [navigation, username]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>{username}</Text>
    </View>
  );
};

export default Profile;

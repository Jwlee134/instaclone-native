import React from "react";
import { Text, View } from "react-native";
import { ProfileScreenProps } from "../types/navigators";

const Profile = ({ route }: ProfileScreenProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>{route.params.username}</Text>
    </View>
  );
};

export default Profile;

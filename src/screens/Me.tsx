import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import useMe from "../hooks/useMe";
import { MeScreenProps } from "../types/navigators";

const Me = ({ navigation }: MeScreenProps) => {
  const me = useMe();

  useLayoutEffect(() => {
    navigation.setOptions({ title: me?.username });
  }, [navigation, me?.username]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "white" }}>Me</Text>
    </View>
  );
};

export default Me;

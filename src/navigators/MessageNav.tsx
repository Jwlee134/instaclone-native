import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Room from "../screens/Room";
import Rooms from "../screens/Rooms";
import { MessageStackNavParamList } from "../types/navigators";

const Stack = createNativeStackNavigator<MessageStackNavParamList>();

const MessageNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: "Messages",
        headerStyle: { backgroundColor: "black" },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Rooms" component={Rooms} />
      <Stack.Screen name="Room" component={Room} />
    </Stack.Navigator>
  );
};

export default MessageNav;

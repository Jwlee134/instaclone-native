import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoggedInStackNavParamList } from "../types/navigators";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

const Stack = createNativeStackNavigator<LoggedInStackNavParamList>();

const LoggedInNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="TabsNav" component={TabsNav} />
      <Stack.Screen name="UploadNav" component={UploadNav} />
    </Stack.Navigator>
  );
};

export default LoggedInNav;

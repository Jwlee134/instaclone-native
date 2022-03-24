import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Upload from "../screens/Upload";
import { LoggedInStackNavParamList } from "../types/navigators";
import TabsNav from "./TabsNav";

const Stack = createNativeStackNavigator<LoggedInStackNavParamList>();

const LoggedInNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}>
      <Stack.Screen name="TabsNav" component={TabsNav} />
      <Stack.Screen name="Upload" component={Upload} />
    </Stack.Navigator>
  );
};

export default LoggedInNav;

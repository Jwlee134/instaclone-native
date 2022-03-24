import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import TakePhoto from "../screens/TakePhoto";
import { UploadNavParamList } from "../types/navigators";
import SelectPhotoNav from "./SelectPhotoNav";

const Tab = createMaterialTopTabNavigator<UploadNavParamList>();

const UploadNav = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      style={{ marginBottom: bottom }}
      screenOptions={{
        tabBarStyle: { backgroundColor: "black" },
        tabBarActiveTintColor: "white",
        tabBarIndicatorStyle: { backgroundColor: "white" },
      }}>
      <Tab.Screen
        name="SelectPhotoNav"
        component={SelectPhotoNav}
        options={{ title: "Select Photo" }}
      />
      <Tab.Screen
        name="TakePhoto"
        component={TakePhoto}
        options={{ title: "Take Photo" }}
      />
    </Tab.Navigator>
  );
};

export default UploadNav;

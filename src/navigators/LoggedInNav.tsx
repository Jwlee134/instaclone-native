import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Feed from "../screens/Feed";

const Tab = createBottomTabNavigator();

const LoggedInNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};

export default LoggedInNav;

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from "react-native";
import { LoggedInBottomTabNavParamList } from "../types/navigators";
import SharedNav from "./SharedNav";

const Tab = createBottomTabNavigator<LoggedInBottomTabNavParamList>();

const LoggedInNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "black",
          borderTopColor: "rgba(255, 255, 255, 0.3)",
        },
        tabBarActiveTintColor: "white",
      }}>
      <Tab.Screen
        name="FeedTab"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={22}
            />
          ),
        }}>
        {() => <SharedNav name="Feed" />}
      </Tab.Screen>
      <Tab.Screen
        name="SearchTab"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={22}
            />
          ),
        }}>
        {() => <SharedNav name="Search" />}
      </Tab.Screen>
      <Tab.Screen
        name="CameraTab"
        component={View}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationTab"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              color={color}
              size={22}
            />
          ),
        }}>
        {() => <SharedNav name="Notification" />}
      </Tab.Screen>
      <Tab.Screen
        name="MeTab"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={22}
            />
          ),
        }}>
        {() => <SharedNav name="Me" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default LoggedInNav;

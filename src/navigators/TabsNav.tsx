import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, View } from "react-native";
import { DEFAULT_AVATAR } from "../apollo";
import useMe from "../hooks/useMe";
import { TabsNavParamList, TabsNavScreenProps } from "../types/navigators";
import SharedNav from "./SharedNav";

const Tab = createBottomTabNavigator<TabsNavParamList>();

const TabsNav = ({ navigation }: TabsNavScreenProps) => {
  const me = useMe();

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
        listeners={{
          tabPress: e => {
            e.preventDefault();
            navigation.navigate("UploadNav");
          },
        }}
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
          tabBarIcon: ({ focused }) => (
            <Image
              style={{
                width: focused ? 22 : 20,
                height: focused ? 22 : 20,
                borderRadius: focused ? 11 : 10,
                ...(focused && { borderWidth: 2, borderColor: "white" }),
              }}
              source={{ uri: me?.avatar || DEFAULT_AVATAR }}
            />
          ),
        }}>
        {() => <SharedNav name="Me" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabsNav;

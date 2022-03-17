import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image } from "react-native";
import Comments from "../screens/Comments";
import Feed from "../screens/Feed";
import Likes from "../screens/Likes";
import Me from "../screens/Me";
import Notification from "../screens/Notification";
import Photo from "../screens/Photo";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { SharedStackNavParamList } from "../types/navigators";

interface Props {
  name: "Feed" | "Search" | "Notification" | "Me";
}

const Stack = createNativeStackNavigator<SharedStackNavParamList>();

const SharedNav = ({ name }: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
      }}>
      {name === "Feed" && (
        <Stack.Screen
          options={{
            headerTitle: () => (
              <Image
                style={{ width: 100, height: 40 }}
                resizeMode="contain"
                source={require("../assets/logo.png")}
              />
            ),
          }}
          name="Feed"
          component={Feed}
        />
      )}
      {name === "Search" && <Stack.Screen name="Search" component={Search} />}
      {name === "Notification" && (
        <Stack.Screen name="Notification" component={Notification} />
      )}
      {name === "Me" && <Stack.Screen name="Me" component={Me} />}
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Likes" component={Likes} />
      <Stack.Screen name="Comments" component={Comments} />
    </Stack.Navigator>
  );
};

export default SharedNav;

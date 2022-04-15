import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import UploadForm from "../screens/UploadForm";
import { LoggedInStackNavParamList } from "../types/navigators";
import MessageNav from "./MessageNav";
import TabsNav from "./TabsNav";
import UploadNav from "./UploadNav";

const Stack = createNativeStackNavigator<LoggedInStackNavParamList>();

const LoggedInNav = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TabsNav"
        component={TabsNav}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="UploadNav"
        component={UploadNav}
      />
      <Stack.Screen
        options={{
          title: "Messages",
          headerStyle: { backgroundColor: "black" },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="close" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
        name="MessageNav"
        component={MessageNav}
      />
      <Stack.Screen
        options={{
          title: "Upload",
          headerStyle: { backgroundColor: "black" },
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons name="close" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
        }}
        name="UploadForm"
        component={UploadForm}
      />
    </Stack.Navigator>
  );
};

export default LoggedInNav;

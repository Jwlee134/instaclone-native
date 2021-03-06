import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateAccount from "../screens/CreateAccount";
import Login from "../screens/Login";
import Welcome from "../screens/Welcome";
import { LoggedOutStackNavParamList } from "../types/navigators";

const Stack = createNativeStackNavigator<LoggedOutStackNavParamList>();

const LoggedOutNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "",
        headerBackTitle: "",
        headerTransparent: true,
        headerTintColor: "white",
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
    </Stack.Navigator>
  );
};

export default LoggedOutNav;

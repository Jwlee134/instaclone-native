import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import SelectPhoto from "../screens/SelectPhoto";
import {
  SelectPhotoNavParamList,
  SelectPhotoNavScreenProps,
} from "../types/navigators";

const Stack = createNativeStackNavigator<SelectPhotoNavParamList>();

const SelectPhotoNav = ({ navigation }: SelectPhotoNavScreenProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerLeft: ({ tintColor }) => (
          <TouchableOpacity onPress={navigation.goBack}>
            <Ionicons name="close" size={24} color={tintColor} />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="SelectPhoto"
        component={SelectPhoto}
        options={{ title: "Choose a photo" }}
      />
    </Stack.Navigator>
  );
};

export default SelectPhotoNav;

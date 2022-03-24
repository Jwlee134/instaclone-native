import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SelectPhoto from "../screens/SelectPhoto";
import { SelectPhotoNavParamList } from "../types/navigators";

const Stack = createNativeStackNavigator<SelectPhotoNavParamList>();

const SelectPhotoNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SelectPhoto" component={SelectPhoto} />
    </Stack.Navigator>
  );
};

export default SelectPhotoNav;

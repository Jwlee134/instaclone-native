import React, { ReactNode } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";

const DismissKeyboard = ({ children }: { children: ReactNode }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;

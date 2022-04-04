import React from "react";
import { View } from "react-native";
import { UploadFormScreenProps } from "../types/navigators";

const UploadForm = ({
  route: {
    params: { file },
  },
}: UploadFormScreenProps) => {
  console.log(file);
  return <View></View>;
};

export default UploadForm;

import React from "react";
import { RefreshControl as Indicator, RefreshControlProps } from "react-native";

interface Props extends RefreshControlProps {}

const RefreshControl = ({ ...props }: Props) => {
  return (
    <Indicator
      tintColor="white"
      colors={["white"]}
      progressBackgroundColor="black"
      {...props}
    />
  );
};

export default RefreshControl;

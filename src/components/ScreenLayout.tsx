import React, { ReactNode } from "react";
import { ActivityIndicator, View } from "react-native";

interface Props {
  loading: boolean;
  children: ReactNode;
}

const ScreenLayout = ({ loading, children }: Props) => {
  return loading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="white" />
    </View>
  ) : (
    <>{children}</>
  );
};

export default ScreenLayout;

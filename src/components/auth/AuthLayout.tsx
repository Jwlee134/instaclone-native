import React, { ReactNode } from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import DismissKeyboard from "../DismissKeyboard";

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  margin-bottom: 20px;
  height: 100px;
`;

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DismissKeyboard>
      <Container behavior={Platform.OS === "android" ? undefined : "padding"}>
        <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
        {children}
      </Container>
    </DismissKeyboard>
  );
};

export default AuthLayout;

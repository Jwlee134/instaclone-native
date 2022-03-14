import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import AuthLayout from "../components/auth/AuthLayout";
import AuthButton from "../components/auth/AuthButton";
import { WelcomeScreenProps } from "../types/navigators";

const LoginLink = styled.Text`
  color: ${({ theme }) => theme.blue};
  font-weight: 600;
  margin-top: 20px;
`;

const Welcome = ({ navigation: { navigate } }: WelcomeScreenProps) => {
  const moveToCreateAccount = () => navigate("CreateAccount");
  const moveToLogin = () => navigate("Login");

  return (
    <AuthLayout>
      <AuthButton onPress={moveToCreateAccount} text="Create Account" />
      <TouchableOpacity onPress={moveToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
};

export default Welcome;

import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { WelcomeScreenProps } from "../types/navigators";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: ${({ theme }) => theme.blue};
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  margin-top: 20px;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

const LoginLink = styled.Text`
  color: ${({ theme }) => theme.blue};
  font-weight: 600;
  margin-top: 20px;
`;

const Welcome = ({ navigation: { navigate } }: WelcomeScreenProps) => {
  const moveToCreateAccount = () => navigate("CreateAccount");
  const moveToLogin = () => navigate("Login");

  return (
    <Container>
      <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
      <CreateAccount disabled={false} onPress={moveToCreateAccount}>
        <CreateAccountText>Create Account</CreateAccountText>
      </CreateAccount>
      <TouchableOpacity onPress={moveToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};

export default Welcome;

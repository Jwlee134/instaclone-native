import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { WelcomeScreenProps } from "../types/navigators";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  max-width: 50%;
  height: 100px;
`;

const CreateAccount = styled.View`
  background-color: ${({ theme }) => theme.blue};
  padding: 7px 10px;
  border-radius: 5px;
`;

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
`;

const LoginLink = styled.Text`
  color: ${({ theme }) => theme.blue};
  font-weight: 600;
  margin-top: 10px;
`;

const Welcome = ({ navigation: { navigate } }: WelcomeScreenProps) => {
  const moveToCreateAccount = () => navigate("CreateAccount");
  const moveToLogin = () => navigate("Login");

  return (
    <Container>
      <Logo resizeMode="contain" source={require("../../assets/logo.png")} />
      <TouchableOpacity onPress={moveToCreateAccount}>
        <CreateAccount>
          <CreateAccountText>Create Account</CreateAccountText>
        </CreateAccount>
      </TouchableOpacity>
      <TouchableOpacity onPress={moveToLogin}>
        <LoginLink>Log in</LoginLink>
      </TouchableOpacity>
    </Container>
  );
};

export default Welcome;

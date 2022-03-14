import React, { ReactNode } from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  margin-bottom: 20px;
  height: 100px;
`;

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Logo resizeMode="contain" source={require("../../../assets/logo.png")} />
      {children}
    </Container>
  );
};

export default AuthLayout;

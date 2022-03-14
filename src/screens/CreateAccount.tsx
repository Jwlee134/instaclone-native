import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
`;

const CreateAccount = () => {
  return (
    <Container>
      <Text>CreateAccount</Text>
    </Container>
  );
};

export default CreateAccount;

import React from "react";
import { TextInputProps } from "react-native";
import styled from "styled-components/native";

const Input = styled.TextInput`
  width: 100%;
  background-color: white;
  padding: 0;
  margin: 0;
`;

interface Props extends TextInputProps {}

const AuthInput = ({ ...props }: Props) => {
  return <Input placeholderTextColor="gray" {...props} />;
};

export default AuthInput;

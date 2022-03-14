import React, { ForwardedRef, forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";

const Input = styled.TextInput`
  width: 100%;
  background-color: white;
  padding: 0;
  margin: 0;
`;

interface Props extends TextInputProps {}

const AuthInput = forwardRef(
  ({ ...props }: Props, ref: ForwardedRef<TextInput>) => {
    return <Input ref={ref} placeholderTextColor="gray" {...props} />;
  },
);

export default AuthInput;

import React, { forwardRef } from "react";
import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";

const Input = styled.TextInput<{ last: boolean }>`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.15);
  margin: 0;
  padding: 0 7px;
  margin-bottom: ${({ last }) => (last ? 15 : 8)}px;
  border-radius: 4px;
  color: white;
  height: 46px;
`;

interface Props extends TextInputProps {
  last?: boolean;
}

const AuthInput = forwardRef<TextInput, Props>(
  ({ last = false, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        last={last}
        placeholderTextColor="rgba(255, 255, 255, 0.8)"
        {...props}
      />
    );
  },
);

export default AuthInput;

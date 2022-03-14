import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: ${({ theme }) => theme.blue};
  padding: 15px 10px;
  border-radius: 5px;
  width: 100%;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;

interface Props extends TouchableOpacityProps {
  text: string;
}

const AuthButton = ({ text, ...props }: Props) => {
  return (
    <Button {...props}>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
};

export default AuthButton;

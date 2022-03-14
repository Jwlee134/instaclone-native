import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const SButton = styled.TouchableOpacity``;

const ButtonText = styled.Text``;

interface Props extends TouchableOpacityProps {
  text: string;
}

const Button = ({ text, ...props }: Props) => {
  return (
    <SButton {...props}>
      <ButtonText>{text}</ButtonText>
    </SButton>
  );
};

export default Button;

import React, { useRef } from "react";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";

const Login = () => {
  const passwordRef = useRef<TextInput>(null);

  const onNext = () => passwordRef.current?.focus();

  return (
    <AuthLayout>
      <AuthInput
        autoFocus
        onSubmitEditing={onNext}
        placeholder="Username"
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <AuthInput
        ref={passwordRef}
        secureTextEntry
        placeholder="Password"
        returnKeyType="done"
      />
      <AuthButton text="Log in" />
    </AuthLayout>
  );
};

export default Login;

import React, { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";

interface Form {
  username: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit } = useForm<Form>();
  const passwordRef = useRef<TextInput>(null);

  const onNext = () => passwordRef.current?.focus();

  const onValid: SubmitHandler<Form> = data => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <Controller
        control={control}
        rules={{ required: true }}
        name="username"
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            autoFocus
            onSubmitEditing={onNext}
            placeholder="Username"
            returnKeyType="next"
            blurOnSubmit={false}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            autoCapitalize="none"
          />
        )}
      />
      <Controller
        control={control}
        rules={{ required: true }}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            ref={passwordRef}
            secureTextEntry
            placeholder="Password"
            returnKeyType="done"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            onSubmitEditing={handleSubmit(onValid)}
          />
        )}
      />
      <AuthButton text="Log in" onPress={handleSubmit(onValid)} />
    </AuthLayout>
  );
};

export default Login;

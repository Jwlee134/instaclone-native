import React, { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { logUserIn } from "../apollo";
import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";
import { useLoginMutation } from "../graphql/generated";

interface Form {
  username: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit, watch } = useForm<Form>();
  const passwordRef = useRef<TextInput>(null);
  const [loginMutation, { loading }] = useLoginMutation();

  const onNext = () => passwordRef.current?.focus();

  const onValid: SubmitHandler<Form> = data => {
    if (loading) return;
    loginMutation({
      variables: data,
      onCompleted: ({ login }) => {
        if (!login?.isSuccess || !login.token) return;
        logUserIn(login.token);
      },
    });
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
      <AuthButton
        text="Log in"
        isLoading={loading}
        onPress={handleSubmit(onValid)}
        disabled={!watch("username") || !watch("password")}
      />
    </AuthLayout>
  );
};

export default Login;

import React, { useRef } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";
import { useCreateAccountMutation } from "../graphql/generated";
import { CreateAccountScreenProps } from "../types/navigators";

interface Form {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
}

const CreateAccount = ({
  navigation: { navigate },
}: CreateAccountScreenProps) => {
  const { control, handleSubmit, getValues } = useForm<Form>();
  const [createAccountMutation, { loading }] = useCreateAccountMutation();

  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (ref: React.RefObject<TextInput>) => ref.current?.focus();

  const onValid: SubmitHandler<Form> = data => {
    if (loading) return;
    createAccountMutation({
      variables: data,
      onCompleted: ({ createAccount }) => {
        if (!createAccount?.isSuccess) return;
        const { username, password } = getValues();
        navigate("Login", { username, password });
      },
    });
  };

  return (
    <AuthLayout>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            onSubmitEditing={() => onNext(lastNameRef)}
            blurOnSubmit={false}
            autoFocus
            returnKeyType="next"
            placeholder="First Name"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="lastName"
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            ref={lastNameRef}
            blurOnSubmit={false}
            onSubmitEditing={() => onNext(usernameRef)}
            returnKeyType="next"
            placeholder="Last Name"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="username"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            ref={usernameRef}
            autoCapitalize="none"
            blurOnSubmit={false}
            onSubmitEditing={() => onNext(emailRef)}
            returnKeyType="next"
            placeholder="Username"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            ref={emailRef}
            blurOnSubmit={false}
            onSubmitEditing={() => onNext(passwordRef)}
            returnKeyType="next"
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <AuthInput
            ref={passwordRef}
            onSubmitEditing={handleSubmit(onValid)}
            returnKeyType="done"
            placeholder="Password"
            secureTextEntry
            last
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <AuthButton
        text="Create Account"
        isLoading={loading}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
};

export default CreateAccount;

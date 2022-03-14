import React, { useRef } from "react";
import { TextInput } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";

const CreateAccount = () => {
  const lastNameRef = useRef<TextInput>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const onNext = (ref: React.RefObject<TextInput>) => ref.current?.focus();
  const onDone = () => {};

  return (
    <AuthLayout>
      <AuthInput
        onSubmitEditing={() => onNext(lastNameRef)}
        blurOnSubmit={false}
        autoFocus
        returnKeyType="next"
        placeholder="First Name"
      />
      <AuthInput
        ref={lastNameRef}
        blurOnSubmit={false}
        onSubmitEditing={() => onNext(usernameRef)}
        returnKeyType="next"
        placeholder="Last Name"
      />
      <AuthInput
        ref={usernameRef}
        blurOnSubmit={false}
        onSubmitEditing={() => onNext(emailRef)}
        returnKeyType="next"
        placeholder="Username"
      />
      <AuthInput
        ref={emailRef}
        blurOnSubmit={false}
        onSubmitEditing={() => onNext(passwordRef)}
        returnKeyType="next"
        placeholder="Email"
        keyboardType="email-address"
      />
      <AuthInput
        ref={passwordRef}
        onSubmitEditing={onDone}
        returnKeyType="done"
        placeholder="Password"
        secureTextEntry
      />
      <AuthButton text="Create Account" disabled />
    </AuthLayout>
  );
};

export default CreateAccount;

import React from "react";
import AuthButton from "../components/auth/AuthButton";
import AuthInput from "../components/auth/AuthInput";
import AuthLayout from "../components/auth/AuthLayout";

const CreateAccount = () => {
  return (
    <AuthLayout>
      <AuthInput returnKeyType="next" placeholder="First Name" />
      <AuthInput returnKeyType="next" placeholder="Last Name" />
      <AuthInput returnKeyType="next" placeholder="Username" />
      <AuthInput
        returnKeyType="next"
        placeholder="Email"
        keyboardType="email-address"
      />
      <AuthInput returnKeyType="done" placeholder="Password" secureTextEntry />
      <AuthButton text="Create Account" disabled />
    </AuthLayout>
  );
};

export default CreateAccount;

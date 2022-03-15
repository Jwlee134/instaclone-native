import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoggedOutStackNavParamList = {
  Welcome: undefined;
  Login: { username?: string; password?: string };
  CreateAccount: undefined;
};

export type WelcomeScreenProps = NativeStackScreenProps<
  LoggedOutStackNavParamList,
  "Welcome"
>;
export type LoginScreenProps = NativeStackScreenProps<
  LoggedOutStackNavParamList,
  "Login"
>;
export type CreateAccountScreenProps = NativeStackScreenProps<
  LoggedOutStackNavParamList,
  "CreateAccount"
>;

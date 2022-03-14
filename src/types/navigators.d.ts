import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type LoggedOutStackNavParamList = {
  Welcome: undefined;
  Login: undefined;
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

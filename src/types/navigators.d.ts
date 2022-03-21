import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
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

export type LoggedInBottomTabNavParamList = {
  FeedTab: undefined;
  SearchTab: undefined;
  CameraTab: undefined;
  NotificationTab: undefined;
  MeTab: undefined;
};

export type SharedStackNavParamList = {
  Feed: undefined;
  Search: undefined;
  Notification: undefined;
  Me: undefined;
  Profile: { username: string };
  Photo: undefined;
  Likes: { id: number };
  Comments: { id: number };
};

export type FeedScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Feed">,
  BottomTabScreenProps<LoggedInBottomTabNavParamList>
>;
export type ProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Profile">,
  BottomTabScreenProps<LoggedInBottomTabNavParamList>
>;
export type LikesScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Likes">,
  BottomTabScreenProps<LoggedInBottomTabNavParamList>
>;
export type CommentsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Comments">,
  BottomTabScreenProps<LoggedInBottomTabNavParamList>
>;
export type MeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Me">,
  BottomTabScreenProps<LoggedInBottomTabNavParamList>
>;

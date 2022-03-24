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

export type LoggedInStackNavParamList = {
  TabsNav: undefined;
  UploadNav: undefined;
};

export type TabsNavScreenProps = NativeStackScreenProps<
  LoggedInStackNavParamList,
  "TabsNav"
>;

export type TabsNavParamList = {
  FeedTab: undefined;
  SearchTab: undefined;
  CameraTab: undefined;
  NotificationTab: undefined;
  MeTab: undefined;
};

export type UploadNavParamList = {
  SelectPhotoNav: undefined;
  TakePhoto: undefined;
};

type SelectPhotoNavScreenProps = CompositeScreenProps<
  NativeStackScreenProps<UploadNavParamList, "SelectPhotoNav">,
  NativeStackScreenProps<LoggedInStackNavParamList>
>;

export type SelectPhotoNavParamList = {
  SelectPhoto: undefined;
};

export type SelectPhotoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SelectPhotoNavParamList, "SelectPhoto">,
  CompositeScreenProps<
    NativeStackScreenProps<UploadNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;

export type SharedStackNavParamList = {
  Feed: undefined;
  Search: undefined;
  Notification: undefined;
  Me: undefined;
  Profile: { username: string };
  Photo: { id: number };
  Likes: { id: number };
  Comments: { id: number };
};

export type FeedScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Feed">,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;
export type PhotoScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Photo">,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;
export type SearchScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Search">,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;
export type ProfileScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Profile">,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;
export type LikesScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Likes">,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;
export type CommentsScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Comments">,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;
export type MeScreenProps = CompositeScreenProps<
  NativeStackScreenProps<SharedStackNavParamList, "Me">,
  CompositeScreenProps<
    BottomTabScreenProps<TabsNavParamList>,
    NativeStackScreenProps<LoggedInStackNavParamList>
  >
>;

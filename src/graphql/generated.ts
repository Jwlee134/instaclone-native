import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Comment = {
  __typename?: 'Comment';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  isMine: Scalars['Boolean'];
  photo: Photo;
  text: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
};

export type Hashtag = {
  __typename?: 'Hashtag';
  createdAt: Scalars['String'];
  hashtag: Scalars['String'];
  id: Scalars['Int'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalPhotos: Scalars['Int'];
  updatedAt: Scalars['String'];
};


export type HashtagPhotosArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
};

export type Like = {
  __typename?: 'Like';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  photo: Photo;
  updatedAt: Scalars['String'];
};

export type LoginResult = {
  __typename?: 'LoginResult';
  error?: Maybe<Scalars['String']>;
  isSuccess: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  read: Scalars['Boolean'];
  room: Room;
  text: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount?: Maybe<MutationResponse>;
  createComment: MutationResponse;
  deleteComment: MutationResponse;
  deletePhoto: MutationResponse;
  editComment: MutationResponse;
  editPhoto: MutationResponse;
  editProfile?: Maybe<MutationResponse>;
  followUser: MutationResponse;
  login?: Maybe<LoginResult>;
  readMessage?: Maybe<MutationResponse>;
  sendMessage: MutationResponse;
  toggleLike: MutationResponse;
  unfollowUser: MutationResponse;
  uploadPhoto?: Maybe<Photo>;
};


export type MutationCreateAccountArgs = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  id: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['Int'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['Int'];
};


export type MutationEditCommentArgs = {
  id: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationEditPhotoArgs = {
  caption: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationEditProfileArgs = {
  avatar?: InputMaybe<Scalars['Upload']>;
  bio?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationFollowUserArgs = {
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationReadMessageArgs = {
  id: Scalars['Int'];
};


export type MutationSendMessageArgs = {
  roomId?: InputMaybe<Scalars['Int']>;
  text: Scalars['String'];
  userId: Scalars['Int'];
};


export type MutationToggleLikeArgs = {
  id: Scalars['Int'];
};


export type MutationUnfollowUserArgs = {
  username: Scalars['String'];
};


export type MutationUploadPhotoArgs = {
  caption?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isSuccess: Scalars['Boolean'];
};

export type Photo = {
  __typename?: 'Photo';
  caption?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  createdAt: Scalars['String'];
  file: Scalars['String'];
  hashtags?: Maybe<Array<Maybe<Hashtag>>>;
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  isMine: Scalars['Boolean'];
  likes: Scalars['Int'];
  numOfComments: Scalars['Int'];
  owner?: Maybe<User>;
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  searchPhotos?: Maybe<Array<Maybe<Photo>>>;
  searchUsers?: Maybe<Array<Maybe<User>>>;
  seeFeed?: Maybe<Array<Maybe<Photo>>>;
  seeFollowers?: Maybe<SeeFollowersResult>;
  seeFollowing?: Maybe<SeeFollowingResult>;
  seeHashtag?: Maybe<Hashtag>;
  seePhoto?: Maybe<Photo>;
  seePhotoComments?: Maybe<Array<Maybe<Comment>>>;
  seePhotoLikes?: Maybe<Array<Maybe<User>>>;
  seeProfile?: Maybe<User>;
  seeRoom?: Maybe<Room>;
  seeRooms?: Maybe<Array<Maybe<Room>>>;
};


export type QuerySearchPhotosArgs = {
  keyword: Scalars['String'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchUsersArgs = {
  keyword: Scalars['String'];
  lastKeyword?: InputMaybe<Scalars['String']>;
};


export type QuerySeeFeedArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeFollowersArgs = {
  page: Scalars['Int'];
  username: Scalars['String'];
};


export type QuerySeeFollowingArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
  username: Scalars['String'];
};


export type QuerySeeHashtagArgs = {
  hashtag: Scalars['String'];
};


export type QuerySeePhotoArgs = {
  id: Scalars['Int'];
};


export type QuerySeePhotoCommentsArgs = {
  id: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeePhotoLikesArgs = {
  id: Scalars['Int'];
  lastId?: InputMaybe<Scalars['Int']>;
};


export type QuerySeeProfileArgs = {
  username: Scalars['String'];
};


export type QuerySeeRoomArgs = {
  id: Scalars['Int'];
};


export type QuerySeeRoomsArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
};

export type Room = {
  __typename?: 'Room';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  messages?: Maybe<Array<Maybe<Message>>>;
  totalUnread: Scalars['Int'];
  updatedAt: Scalars['String'];
  users?: Maybe<Array<Maybe<User>>>;
};


export type RoomMessagesArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
};

export type SeeFollowersResult = {
  __typename?: 'SeeFollowersResult';
  error?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<User>>>;
  isSuccess: Scalars['Boolean'];
  totalPages?: Maybe<Scalars['Int']>;
};

export type SeeFollowingResult = {
  __typename?: 'SeeFollowingResult';
  error?: Maybe<Scalars['String']>;
  following?: Maybe<Array<Maybe<User>>>;
  isSuccess: Scalars['Boolean'];
};

export type Subscription = {
  __typename?: 'Subscription';
  roomUpdates?: Maybe<Message>;
};


export type SubscriptionRoomUpdatesArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  followers?: Maybe<Array<Maybe<User>>>;
  following?: Maybe<Array<Maybe<User>>>;
  id: Scalars['Int'];
  isFollowing: Scalars['Boolean'];
  isMe: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  totalFollowers: Scalars['Int'];
  totalFollowing: Scalars['Int'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};


export type UserPhotosArgs = {
  lastId?: InputMaybe<Scalars['Int']>;
};

export type PhotoFragmentFragment = { __typename?: 'Photo', id: number, file: string, likes: number, numOfComments: number };

export type CommentFragmentFragment = { __typename?: 'Comment', id: number, text: string, isMine: boolean, createdAt: string, user: { __typename?: 'User', username: string, avatar?: string | null } };

export type UserFragmentFragment = { __typename?: 'User', id: number, username: string, avatar?: string | null, isFollowing: boolean, isMe: boolean };

export type FeedFragmentFragment = { __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, numOfComments: number, owner?: { __typename?: 'User', id: number, username: string, avatar?: string | null } | null };

export type RoomFragmentFragment = { __typename?: 'Room', id: number, totalUnread: number, users?: Array<{ __typename?: 'User', id: number, avatar?: string | null, username: string } | null> | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'LoginResult', isSuccess: boolean, token?: string | null, error?: string | null } | null };

export type CreateAccountMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateAccountMutation = { __typename?: 'Mutation', createAccount?: { __typename?: 'MutationResponse', isSuccess: boolean, error?: string | null } | null };

export type ToggleLikeMutationVariables = Exact<{
  toggleLikeId: Scalars['Int'];
}>;


export type ToggleLikeMutation = { __typename?: 'Mutation', toggleLike: { __typename?: 'MutationResponse', isSuccess: boolean, error?: string | null } };

export type FollowUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type FollowUserMutation = { __typename?: 'Mutation', followUser: { __typename?: 'MutationResponse', isSuccess: boolean, error?: string | null } };

export type UnfollowUserMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type UnfollowUserMutation = { __typename?: 'Mutation', unfollowUser: { __typename?: 'MutationResponse', isSuccess: boolean, error?: string | null } };

export type UploadPhotoMutationVariables = Exact<{
  file: Scalars['Upload'];
  caption?: InputMaybe<Scalars['String']>;
}>;


export type UploadPhotoMutation = { __typename?: 'Mutation', uploadPhoto?: { __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, numOfComments: number, owner?: { __typename?: 'User', id: number, username: string, avatar?: string | null } | null } | null };

export type SendMessageMutationVariables = Exact<{
  text: Scalars['String'];
  userId: Scalars['Int'];
  roomId?: InputMaybe<Scalars['Int']>;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'MutationResponse', isSuccess: boolean, id?: number | null, error?: string | null } };

export type SeeFeedQueryVariables = Exact<{
  lastId?: InputMaybe<Scalars['Int']>;
}>;


export type SeeFeedQuery = { __typename?: 'Query', seeFeed?: Array<{ __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, numOfComments: number, owner?: { __typename?: 'User', id: number, username: string, avatar?: string | null } | null } | null> | null };

export type SeePhotoQueryVariables = Exact<{
  seePhotoId: Scalars['Int'];
}>;


export type SeePhotoQuery = { __typename?: 'Query', seePhoto?: { __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, numOfComments: number, owner?: { __typename?: 'User', id: number, username: string, avatar?: string | null } | null } | null };

export type SeeLikesQueryVariables = Exact<{
  seePhotoLikesId: Scalars['Int'];
}>;


export type SeeLikesQuery = { __typename?: 'Query', seePhotoLikes?: Array<{ __typename?: 'User', id: number, username: string, avatar?: string | null, isFollowing: boolean, isMe: boolean } | null> | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, avatar?: string | null, username: string, totalFollowers: number, totalFollowing: number } | null };

export type SearchPhotosQueryVariables = Exact<{
  keyword: Scalars['String'];
  lastId?: InputMaybe<Scalars['Int']>;
}>;


export type SearchPhotosQuery = { __typename?: 'Query', searchPhotos?: Array<{ __typename?: 'Photo', id: number, file: string, createdAt: string } | null> | null };

export type SeeRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeRoomsQuery = { __typename?: 'Query', seeRooms?: Array<{ __typename?: 'Room', id: number, totalUnread: number, users?: Array<{ __typename?: 'User', id: number, avatar?: string | null, username: string } | null> | null } | null> | null };

export type SeeRoomQueryVariables = Exact<{
  seeRoomId: Scalars['Int'];
}>;


export type SeeRoomQuery = { __typename?: 'Query', seeRoom?: { __typename?: 'Room', id: number, messages?: Array<{ __typename?: 'Message', id: number, text: string, read: boolean, user: { __typename?: 'User', id: number, username: string, avatar?: string | null, createdAt: string } } | null> | null } | null };

export const CommentFragmentFragmentDoc = gql`
    fragment CommentFragment on Comment {
  id
  text
  isMine
  createdAt
  user {
    username
    avatar
  }
}
    `;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  id
  username
  avatar
  isFollowing
  isMe
}
    `;
export const PhotoFragmentFragmentDoc = gql`
    fragment PhotoFragment on Photo {
  id
  file
  likes
  numOfComments
}
    `;
export const FeedFragmentFragmentDoc = gql`
    fragment FeedFragment on Photo {
  ...PhotoFragment
  owner {
    id
    username
    avatar
  }
  caption
  createdAt
  isMine
  isLiked
}
    ${PhotoFragmentFragmentDoc}`;
export const RoomFragmentFragmentDoc = gql`
    fragment RoomFragment on Room {
  id
  users {
    id
    avatar
    username
  }
  totalUnread
}
    `;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    isSuccess
    token
    error
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateAccountDocument = gql`
    mutation createAccount($firstName: String!, $lastName: String, $username: String!, $email: String!, $password: String!) {
  createAccount(
    firstName: $firstName
    lastName: $lastName
    username: $username
    email: $email
    password: $password
  ) {
    isSuccess
    error
  }
}
    `;
export type CreateAccountMutationFn = Apollo.MutationFunction<CreateAccountMutation, CreateAccountMutationVariables>;

/**
 * __useCreateAccountMutation__
 *
 * To run a mutation, you first call `useCreateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAccountMutation, { data, loading, error }] = useCreateAccountMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateAccountMutation(baseOptions?: Apollo.MutationHookOptions<CreateAccountMutation, CreateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAccountMutation, CreateAccountMutationVariables>(CreateAccountDocument, options);
      }
export type CreateAccountMutationHookResult = ReturnType<typeof useCreateAccountMutation>;
export type CreateAccountMutationResult = Apollo.MutationResult<CreateAccountMutation>;
export type CreateAccountMutationOptions = Apollo.BaseMutationOptions<CreateAccountMutation, CreateAccountMutationVariables>;
export const ToggleLikeDocument = gql`
    mutation toggleLike($toggleLikeId: Int!) {
  toggleLike(id: $toggleLikeId) {
    isSuccess
    error
  }
}
    `;
export type ToggleLikeMutationFn = Apollo.MutationFunction<ToggleLikeMutation, ToggleLikeMutationVariables>;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      toggleLikeId: // value for 'toggleLikeId'
 *   },
 * });
 */
export function useToggleLikeMutation(baseOptions?: Apollo.MutationHookOptions<ToggleLikeMutation, ToggleLikeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleLikeMutation, ToggleLikeMutationVariables>(ToggleLikeDocument, options);
      }
export type ToggleLikeMutationHookResult = ReturnType<typeof useToggleLikeMutation>;
export type ToggleLikeMutationResult = Apollo.MutationResult<ToggleLikeMutation>;
export type ToggleLikeMutationOptions = Apollo.BaseMutationOptions<ToggleLikeMutation, ToggleLikeMutationVariables>;
export const FollowUserDocument = gql`
    mutation followUser($username: String!) {
  followUser(username: $username) {
    isSuccess
    error
  }
}
    `;
export type FollowUserMutationFn = Apollo.MutationFunction<FollowUserMutation, FollowUserMutationVariables>;

/**
 * __useFollowUserMutation__
 *
 * To run a mutation, you first call `useFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [followUserMutation, { data, loading, error }] = useFollowUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useFollowUserMutation(baseOptions?: Apollo.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, options);
      }
export type FollowUserMutationHookResult = ReturnType<typeof useFollowUserMutation>;
export type FollowUserMutationResult = Apollo.MutationResult<FollowUserMutation>;
export type FollowUserMutationOptions = Apollo.BaseMutationOptions<FollowUserMutation, FollowUserMutationVariables>;
export const UnfollowUserDocument = gql`
    mutation unfollowUser($username: String!) {
  unfollowUser(username: $username) {
    isSuccess
    error
  }
}
    `;
export type UnfollowUserMutationFn = Apollo.MutationFunction<UnfollowUserMutation, UnfollowUserMutationVariables>;

/**
 * __useUnfollowUserMutation__
 *
 * To run a mutation, you first call `useUnfollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnfollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unfollowUserMutation, { data, loading, error }] = useUnfollowUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUnfollowUserMutation(baseOptions?: Apollo.MutationHookOptions<UnfollowUserMutation, UnfollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnfollowUserMutation, UnfollowUserMutationVariables>(UnfollowUserDocument, options);
      }
export type UnfollowUserMutationHookResult = ReturnType<typeof useUnfollowUserMutation>;
export type UnfollowUserMutationResult = Apollo.MutationResult<UnfollowUserMutation>;
export type UnfollowUserMutationOptions = Apollo.BaseMutationOptions<UnfollowUserMutation, UnfollowUserMutationVariables>;
export const UploadPhotoDocument = gql`
    mutation uploadPhoto($file: Upload!, $caption: String) {
  uploadPhoto(file: $file, caption: $caption) {
    ...FeedFragment
  }
}
    ${FeedFragmentFragmentDoc}`;
export type UploadPhotoMutationFn = Apollo.MutationFunction<UploadPhotoMutation, UploadPhotoMutationVariables>;

/**
 * __useUploadPhotoMutation__
 *
 * To run a mutation, you first call `useUploadPhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPhotoMutation, { data, loading, error }] = useUploadPhotoMutation({
 *   variables: {
 *      file: // value for 'file'
 *      caption: // value for 'caption'
 *   },
 * });
 */
export function useUploadPhotoMutation(baseOptions?: Apollo.MutationHookOptions<UploadPhotoMutation, UploadPhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadPhotoMutation, UploadPhotoMutationVariables>(UploadPhotoDocument, options);
      }
export type UploadPhotoMutationHookResult = ReturnType<typeof useUploadPhotoMutation>;
export type UploadPhotoMutationResult = Apollo.MutationResult<UploadPhotoMutation>;
export type UploadPhotoMutationOptions = Apollo.BaseMutationOptions<UploadPhotoMutation, UploadPhotoMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($text: String!, $userId: Int!, $roomId: Int) {
  sendMessage(text: $text, userId: $userId, roomId: $roomId) {
    isSuccess
    id
    error
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      text: // value for 'text'
 *      userId: // value for 'userId'
 *      roomId: // value for 'roomId'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const SeeFeedDocument = gql`
    query seeFeed($lastId: Int) {
  seeFeed(lastId: $lastId) {
    ...FeedFragment
  }
}
    ${FeedFragmentFragmentDoc}`;

/**
 * __useSeeFeedQuery__
 *
 * To run a query within a React component, call `useSeeFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeFeedQuery({
 *   variables: {
 *      lastId: // value for 'lastId'
 *   },
 * });
 */
export function useSeeFeedQuery(baseOptions?: Apollo.QueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeFeedQuery, SeeFeedQueryVariables>(SeeFeedDocument, options);
      }
export function useSeeFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeFeedQuery, SeeFeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeFeedQuery, SeeFeedQueryVariables>(SeeFeedDocument, options);
        }
export type SeeFeedQueryHookResult = ReturnType<typeof useSeeFeedQuery>;
export type SeeFeedLazyQueryHookResult = ReturnType<typeof useSeeFeedLazyQuery>;
export type SeeFeedQueryResult = Apollo.QueryResult<SeeFeedQuery, SeeFeedQueryVariables>;
export const SeePhotoDocument = gql`
    query seePhoto($seePhotoId: Int!) {
  seePhoto(id: $seePhotoId) {
    ...PhotoFragment
    owner {
      id
      username
      avatar
    }
    caption
    createdAt
    isMine
    isLiked
  }
}
    ${PhotoFragmentFragmentDoc}`;

/**
 * __useSeePhotoQuery__
 *
 * To run a query within a React component, call `useSeePhotoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeePhotoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeePhotoQuery({
 *   variables: {
 *      seePhotoId: // value for 'seePhotoId'
 *   },
 * });
 */
export function useSeePhotoQuery(baseOptions: Apollo.QueryHookOptions<SeePhotoQuery, SeePhotoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeePhotoQuery, SeePhotoQueryVariables>(SeePhotoDocument, options);
      }
export function useSeePhotoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeePhotoQuery, SeePhotoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeePhotoQuery, SeePhotoQueryVariables>(SeePhotoDocument, options);
        }
export type SeePhotoQueryHookResult = ReturnType<typeof useSeePhotoQuery>;
export type SeePhotoLazyQueryHookResult = ReturnType<typeof useSeePhotoLazyQuery>;
export type SeePhotoQueryResult = Apollo.QueryResult<SeePhotoQuery, SeePhotoQueryVariables>;
export const SeeLikesDocument = gql`
    query seeLikes($seePhotoLikesId: Int!) {
  seePhotoLikes(id: $seePhotoLikesId) {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useSeeLikesQuery__
 *
 * To run a query within a React component, call `useSeeLikesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeLikesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeLikesQuery({
 *   variables: {
 *      seePhotoLikesId: // value for 'seePhotoLikesId'
 *   },
 * });
 */
export function useSeeLikesQuery(baseOptions: Apollo.QueryHookOptions<SeeLikesQuery, SeeLikesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeLikesQuery, SeeLikesQueryVariables>(SeeLikesDocument, options);
      }
export function useSeeLikesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeLikesQuery, SeeLikesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeLikesQuery, SeeLikesQueryVariables>(SeeLikesDocument, options);
        }
export type SeeLikesQueryHookResult = ReturnType<typeof useSeeLikesQuery>;
export type SeeLikesLazyQueryHookResult = ReturnType<typeof useSeeLikesLazyQuery>;
export type SeeLikesQueryResult = Apollo.QueryResult<SeeLikesQuery, SeeLikesQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    avatar
    username
    totalFollowers
    totalFollowing
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const SearchPhotosDocument = gql`
    query searchPhotos($keyword: String!, $lastId: Int) {
  searchPhotos(keyword: $keyword, lastId: $lastId) {
    id
    file
    createdAt
  }
}
    `;

/**
 * __useSearchPhotosQuery__
 *
 * To run a query within a React component, call `useSearchPhotosQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPhotosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPhotosQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *      lastId: // value for 'lastId'
 *   },
 * });
 */
export function useSearchPhotosQuery(baseOptions: Apollo.QueryHookOptions<SearchPhotosQuery, SearchPhotosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPhotosQuery, SearchPhotosQueryVariables>(SearchPhotosDocument, options);
      }
export function useSearchPhotosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPhotosQuery, SearchPhotosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPhotosQuery, SearchPhotosQueryVariables>(SearchPhotosDocument, options);
        }
export type SearchPhotosQueryHookResult = ReturnType<typeof useSearchPhotosQuery>;
export type SearchPhotosLazyQueryHookResult = ReturnType<typeof useSearchPhotosLazyQuery>;
export type SearchPhotosQueryResult = Apollo.QueryResult<SearchPhotosQuery, SearchPhotosQueryVariables>;
export const SeeRoomsDocument = gql`
    query seeRooms {
  seeRooms {
    ...RoomFragment
  }
}
    ${RoomFragmentFragmentDoc}`;

/**
 * __useSeeRoomsQuery__
 *
 * To run a query within a React component, call `useSeeRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeeRoomsQuery(baseOptions?: Apollo.QueryHookOptions<SeeRoomsQuery, SeeRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeRoomsQuery, SeeRoomsQueryVariables>(SeeRoomsDocument, options);
      }
export function useSeeRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeRoomsQuery, SeeRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeRoomsQuery, SeeRoomsQueryVariables>(SeeRoomsDocument, options);
        }
export type SeeRoomsQueryHookResult = ReturnType<typeof useSeeRoomsQuery>;
export type SeeRoomsLazyQueryHookResult = ReturnType<typeof useSeeRoomsLazyQuery>;
export type SeeRoomsQueryResult = Apollo.QueryResult<SeeRoomsQuery, SeeRoomsQueryVariables>;
export const SeeRoomDocument = gql`
    query seeRoom($seeRoomId: Int!) {
  seeRoom(id: $seeRoomId) {
    id
    messages {
      id
      text
      user {
        id
        username
        avatar
        createdAt
      }
      read
    }
  }
}
    `;

/**
 * __useSeeRoomQuery__
 *
 * To run a query within a React component, call `useSeeRoomQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeeRoomQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeeRoomQuery({
 *   variables: {
 *      seeRoomId: // value for 'seeRoomId'
 *   },
 * });
 */
export function useSeeRoomQuery(baseOptions: Apollo.QueryHookOptions<SeeRoomQuery, SeeRoomQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeeRoomQuery, SeeRoomQueryVariables>(SeeRoomDocument, options);
      }
export function useSeeRoomLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeeRoomQuery, SeeRoomQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeeRoomQuery, SeeRoomQueryVariables>(SeeRoomDocument, options);
        }
export type SeeRoomQueryHookResult = ReturnType<typeof useSeeRoomQuery>;
export type SeeRoomLazyQueryHookResult = ReturnType<typeof useSeeRoomLazyQuery>;
export type SeeRoomQueryResult = Apollo.QueryResult<SeeRoomQuery, SeeRoomQueryVariables>;
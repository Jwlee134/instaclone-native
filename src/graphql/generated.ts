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

export type SeeFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type SeeFeedQuery = { __typename?: 'Query', seeFeed?: Array<{ __typename?: 'Photo', caption?: string | null, createdAt: string, isMine: boolean, isLiked: boolean, id: number, file: string, likes: number, numOfComments: number, owner?: { __typename?: 'User', username: string, avatar?: string | null } | null, comments?: Array<{ __typename?: 'Comment', id: number, text: string, isMine: boolean, createdAt: string, user: { __typename?: 'User', username: string, avatar?: string | null } } | null> | null } | null> | null };

export const PhotoFragmentFragmentDoc = gql`
    fragment PhotoFragment on Photo {
  id
  file
  likes
  numOfComments
}
    `;
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
export const SeeFeedDocument = gql`
    query seeFeed {
  seeFeed {
    ...PhotoFragment
    owner {
      username
      avatar
    }
    caption
    comments {
      ...CommentFragment
    }
    createdAt
    isMine
    isLiked
  }
}
    ${PhotoFragmentFragmentDoc}
${CommentFragmentFragmentDoc}`;

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
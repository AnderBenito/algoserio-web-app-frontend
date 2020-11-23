import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  getAllPoints: Array<Points>;
  getPaginatedPoints: Array<Points>;
  getPointsById: Array<Points>;
  getPointsByUsername: Array<Points>;
  hello: Scalars['String'];
  getCurrentUser: User;
  getAllUsers: Array<User>;
  getPaginatedUsers: Array<User>;
  getTotalPointsPerUSer: Array<TotalPointsPerUserResponse>;
};


export type QueryGetPaginatedPointsArgs = {
  order?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QueryGetPointsByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetPointsByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryGetPaginatedUsersArgs = {
  order?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};

export type Points = {
  __typename?: 'Points';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  amount: Scalars['Float'];
  reason: Scalars['String'];
  user?: Maybe<User>;
};


export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  isAdmin: Scalars['Boolean'];
  points?: Maybe<Array<Points>>;
  tokenVersion: Scalars['Float'];
};

export type TotalPointsPerUserResponse = {
  __typename?: 'TotalPointsPerUserResponse';
  user: User;
  totalPoints: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addPoints: Scalars['Boolean'];
  loginUser: LoginResponse;
  logOutUser: Scalars['Boolean'];
  registerUser: Scalars['Boolean'];
  changeUserPassword: Scalars['Boolean'];
};


export type MutationAddPointsArgs = {
  reason: Scalars['String'];
  amount: Scalars['Float'];
  username: Scalars['String'];
};


export type MutationLoginUserArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRegisterUserArgs = {
  isAdmin?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
};


export type MutationChangeUserPasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type ChangeUserPasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeUserPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changeUserPassword'>
);

export type UserLoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = (
  { __typename?: 'Mutation' }
  & { loginUser: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
  ) }
);

export type UserLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type UserLogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logOutUser'>
);

export type RegisterUserMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterUserMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'registerUser'>
);

export type GetAllPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPointsQuery = (
  { __typename?: 'Query' }
  & { getAllPoints: Array<(
    { __typename?: 'Points' }
    & Pick<Points, 'createdAt' | 'amount' | 'reason'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name'>
    )> }
  )> }
);

export type GetAllUserInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserInfoQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
    & { points?: Maybe<Array<(
      { __typename?: 'Points' }
      & Pick<Points, 'reason' | 'amount'>
    )>> }
  )> }
);

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
    & { points?: Maybe<Array<(
      { __typename?: 'Points' }
      & Pick<Points, 'amount'>
    )>> }
  )> }
);

export type GetPaginatedPointsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Float']>;
  take?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['String']>;
}>;


export type GetPaginatedPointsQuery = (
  { __typename?: 'Query' }
  & { getPaginatedPoints: Array<(
    { __typename?: 'Points' }
    & Pick<Points, 'createdAt' | 'amount' | 'reason'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name'>
    )> }
  )> }
);

export type GetTotalPointsPerUSerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTotalPointsPerUSerQuery = (
  { __typename?: 'Query' }
  & { getTotalPointsPerUSer: Array<(
    { __typename?: 'TotalPointsPerUserResponse' }
    & Pick<TotalPointsPerUserResponse, 'totalPoints'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ) }
  )> }
);


export const ChangeUserPasswordDocument = gql`
    mutation ChangeUserPassword($oldPassword: String!, $newPassword: String!) {
  changeUserPassword(oldPassword: $oldPassword, newPassword: $newPassword)
}
    `;
export type ChangeUserPasswordMutationFn = Apollo.MutationFunction<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;

/**
 * __useChangeUserPasswordMutation__
 *
 * To run a mutation, you first call `useChangeUserPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeUserPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeUserPasswordMutation, { data, loading, error }] = useChangeUserPasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangeUserPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>) {
        return Apollo.useMutation<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>(ChangeUserPasswordDocument, baseOptions);
      }
export type ChangeUserPasswordMutationHookResult = ReturnType<typeof useChangeUserPasswordMutation>;
export type ChangeUserPasswordMutationResult = Apollo.MutationResult<ChangeUserPasswordMutation>;
export type ChangeUserPasswordMutationOptions = Apollo.BaseMutationOptions<ChangeUserPasswordMutation, ChangeUserPasswordMutationVariables>;
export const UserLoginDocument = gql`
    mutation UserLogin($username: String!, $password: String!) {
  loginUser(username: $username, password: $password) {
    accessToken
  }
}
    `;
export type UserLoginMutationFn = Apollo.MutationFunction<UserLoginMutation, UserLoginMutationVariables>;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: Apollo.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        return Apollo.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, baseOptions);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export type UserLoginMutationResult = Apollo.MutationResult<UserLoginMutation>;
export type UserLoginMutationOptions = Apollo.BaseMutationOptions<UserLoginMutation, UserLoginMutationVariables>;
export const UserLogoutDocument = gql`
    mutation UserLogout {
  logOutUser
}
    `;
export type UserLogoutMutationFn = Apollo.MutationFunction<UserLogoutMutation, UserLogoutMutationVariables>;

/**
 * __useUserLogoutMutation__
 *
 * To run a mutation, you first call `useUserLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLogoutMutation, { data, loading, error }] = useUserLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useUserLogoutMutation(baseOptions?: Apollo.MutationHookOptions<UserLogoutMutation, UserLogoutMutationVariables>) {
        return Apollo.useMutation<UserLogoutMutation, UserLogoutMutationVariables>(UserLogoutDocument, baseOptions);
      }
export type UserLogoutMutationHookResult = ReturnType<typeof useUserLogoutMutation>;
export type UserLogoutMutationResult = Apollo.MutationResult<UserLogoutMutation>;
export type UserLogoutMutationOptions = Apollo.BaseMutationOptions<UserLogoutMutation, UserLogoutMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($name: String!, $email: String!, $username: String!, $password: String!) {
  registerUser(
    name: $name
    email: $email
    username: $username
    password: $password
  )
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, baseOptions);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const GetAllPointsDocument = gql`
    query GetAllPoints {
  getAllPoints {
    createdAt
    amount
    reason
    user {
      name
    }
  }
}
    `;

/**
 * __useGetAllPointsQuery__
 *
 * To run a query within a React component, call `useGetAllPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPointsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPointsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPointsQuery, GetAllPointsQueryVariables>) {
        return Apollo.useQuery<GetAllPointsQuery, GetAllPointsQueryVariables>(GetAllPointsDocument, baseOptions);
      }
export function useGetAllPointsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPointsQuery, GetAllPointsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllPointsQuery, GetAllPointsQueryVariables>(GetAllPointsDocument, baseOptions);
        }
export type GetAllPointsQueryHookResult = ReturnType<typeof useGetAllPointsQuery>;
export type GetAllPointsLazyQueryHookResult = ReturnType<typeof useGetAllPointsLazyQuery>;
export type GetAllPointsQueryResult = Apollo.QueryResult<GetAllPointsQuery, GetAllPointsQueryVariables>;
export const GetAllUserInfoDocument = gql`
    query GetAllUserInfo {
  getAllUsers {
    id
    name
    username
    points {
      reason
      amount
    }
  }
}
    `;

/**
 * __useGetAllUserInfoQuery__
 *
 * To run a query within a React component, call `useGetAllUserInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserInfoQuery, GetAllUserInfoQueryVariables>) {
        return Apollo.useQuery<GetAllUserInfoQuery, GetAllUserInfoQueryVariables>(GetAllUserInfoDocument, baseOptions);
      }
export function useGetAllUserInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserInfoQuery, GetAllUserInfoQueryVariables>) {
          return Apollo.useLazyQuery<GetAllUserInfoQuery, GetAllUserInfoQueryVariables>(GetAllUserInfoDocument, baseOptions);
        }
export type GetAllUserInfoQueryHookResult = ReturnType<typeof useGetAllUserInfoQuery>;
export type GetAllUserInfoLazyQueryHookResult = ReturnType<typeof useGetAllUserInfoLazyQuery>;
export type GetAllUserInfoQueryResult = Apollo.QueryResult<GetAllUserInfoQuery, GetAllUserInfoQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUsers {
    id
    name
    username
    points {
      amount
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, baseOptions);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetPaginatedPointsDocument = gql`
    query getPaginatedPoints($skip: Float, $take: Float, $order: String = "DESC") {
  getPaginatedPoints(skip: $skip, take: $take, order: $order) {
    createdAt
    amount
    reason
    user {
      name
    }
  }
}
    `;

/**
 * __useGetPaginatedPointsQuery__
 *
 * To run a query within a React component, call `useGetPaginatedPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPaginatedPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPaginatedPointsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useGetPaginatedPointsQuery(baseOptions?: Apollo.QueryHookOptions<GetPaginatedPointsQuery, GetPaginatedPointsQueryVariables>) {
        return Apollo.useQuery<GetPaginatedPointsQuery, GetPaginatedPointsQueryVariables>(GetPaginatedPointsDocument, baseOptions);
      }
export function useGetPaginatedPointsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPaginatedPointsQuery, GetPaginatedPointsQueryVariables>) {
          return Apollo.useLazyQuery<GetPaginatedPointsQuery, GetPaginatedPointsQueryVariables>(GetPaginatedPointsDocument, baseOptions);
        }
export type GetPaginatedPointsQueryHookResult = ReturnType<typeof useGetPaginatedPointsQuery>;
export type GetPaginatedPointsLazyQueryHookResult = ReturnType<typeof useGetPaginatedPointsLazyQuery>;
export type GetPaginatedPointsQueryResult = Apollo.QueryResult<GetPaginatedPointsQuery, GetPaginatedPointsQueryVariables>;
export const GetTotalPointsPerUSerDocument = gql`
    query GetTotalPointsPerUSer {
  getTotalPointsPerUSer {
    user {
      name
    }
    totalPoints
  }
}
    `;

/**
 * __useGetTotalPointsPerUSerQuery__
 *
 * To run a query within a React component, call `useGetTotalPointsPerUSerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTotalPointsPerUSerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTotalPointsPerUSerQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTotalPointsPerUSerQuery(baseOptions?: Apollo.QueryHookOptions<GetTotalPointsPerUSerQuery, GetTotalPointsPerUSerQueryVariables>) {
        return Apollo.useQuery<GetTotalPointsPerUSerQuery, GetTotalPointsPerUSerQueryVariables>(GetTotalPointsPerUSerDocument, baseOptions);
      }
export function useGetTotalPointsPerUSerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTotalPointsPerUSerQuery, GetTotalPointsPerUSerQueryVariables>) {
          return Apollo.useLazyQuery<GetTotalPointsPerUSerQuery, GetTotalPointsPerUSerQueryVariables>(GetTotalPointsPerUSerDocument, baseOptions);
        }
export type GetTotalPointsPerUSerQueryHookResult = ReturnType<typeof useGetTotalPointsPerUSerQuery>;
export type GetTotalPointsPerUSerLazyQueryHookResult = ReturnType<typeof useGetTotalPointsPerUSerLazyQuery>;
export type GetTotalPointsPerUSerQueryResult = Apollo.QueryResult<GetTotalPointsPerUSerQuery, GetTotalPointsPerUSerQueryVariables>;
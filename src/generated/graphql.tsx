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
  getAllGalas: Array<Gala>;
  getAllGalaPoints: Gala;
  getGalaTotalPoints: Array<TotalPointsPerUserResponse>;
  getAllPoints: Array<Points>;
  getPaginatedPoints: Array<Points>;
  getPointsById: Points;
  getPointsByUserId: Array<Points>;
  getPointsByUsername: Array<Points>;
  hello: Scalars['String'];
  getCurrentUser: User;
  getAllUsers: Array<User>;
  getAllUsersByGala: Array<User>;
  getPaginatedUsers: Array<User>;
  getTotalPointsPerUSer: Array<TotalPointsPerUserResponse>;
};


export type QueryGetAllGalaPointsArgs = {
  id: Scalars['String'];
};


export type QueryGetGalaTotalPointsArgs = {
  id: Scalars['String'];
};


export type QueryGetPaginatedPointsArgs = {
  order?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};


export type QueryGetPointsByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetPointsByUserIdArgs = {
  userId: Scalars['String'];
};


export type QueryGetPointsByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryGetAllUsersByGalaArgs = {
  galaId: Scalars['String'];
};


export type QueryGetPaginatedUsersArgs = {
  order?: Maybe<Scalars['String']>;
  take?: Maybe<Scalars['Float']>;
  skip?: Maybe<Scalars['Float']>;
};

export type Gala = {
  __typename?: 'Gala';
  id: Scalars['String'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  initDate: Scalars['DateTime'];
  finishDate: Scalars['DateTime'];
  points?: Maybe<Array<Points>>;
};


export type Points = {
  __typename?: 'Points';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  amount: Scalars['Float'];
  reason: Scalars['String'];
  user?: Maybe<User>;
  gala?: Maybe<Gala>;
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
  addGala: Scalars['Boolean'];
  deleteGala: Scalars['Boolean'];
  addPoints: Scalars['Boolean'];
  deletePoints: Scalars['Boolean'];
  updatePoints: Points;
  loginUser: LoginResponse;
  logOutUser: Scalars['Boolean'];
  registerUser: Scalars['Boolean'];
  changeUserPassword: Scalars['Boolean'];
};


export type MutationAddGalaArgs = {
  finishDate: Scalars['String'];
  initDate: Scalars['String'];
  name: Scalars['String'];
};


export type MutationDeleteGalaArgs = {
  id: Scalars['String'];
};


export type MutationAddPointsArgs = {
  reason: Scalars['String'];
  amount: Scalars['Float'];
  galaId: Scalars['String'];
  username: Scalars['String'];
};


export type MutationDeletePointsArgs = {
  id: Scalars['String'];
};


export type MutationUpdatePointsArgs = {
  reason?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
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

export type AddGalaMutationVariables = Exact<{
  name: Scalars['String'];
  initDate: Scalars['String'];
  finishDate: Scalars['String'];
}>;


export type AddGalaMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addGala'>
);

export type AddPointsMutationVariables = Exact<{
  username: Scalars['String'];
  reason: Scalars['String'];
  amount: Scalars['Float'];
  galaId: Scalars['String'];
}>;


export type AddPointsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addPoints'>
);

export type ChangeUserPasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangeUserPasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changeUserPassword'>
);

export type DeletePointsMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePointsMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deletePoints'>
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

export type UpdatePointsMutationVariables = Exact<{
  id: Scalars['String'];
  reason?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
}>;


export type UpdatePointsMutation = (
  { __typename?: 'Mutation' }
  & { updatePoints: (
    { __typename?: 'Points' }
    & Pick<Points, 'createdAt' | 'amount' | 'reason'>
  ) }
);

export type GetAllGalaPointsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAllGalaPointsQuery = (
  { __typename?: 'Query' }
  & { getAllGalaPoints: (
    { __typename?: 'Gala' }
    & Pick<Gala, 'id' | 'name' | 'createdAt' | 'initDate' | 'finishDate'>
    & { points?: Maybe<Array<(
      { __typename?: 'Points' }
      & Pick<Points, 'id' | 'createdAt' | 'amount' | 'reason'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'name' | 'username'>
      )> }
    )>> }
  ) }
);

export type GetAllGalasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllGalasQuery = (
  { __typename?: 'Query' }
  & { getAllGalas: Array<(
    { __typename?: 'Gala' }
    & Pick<Gala, 'id' | 'createdAt' | 'name' | 'initDate' | 'finishDate'>
  )> }
);

export type GetAllPointsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPointsQuery = (
  { __typename?: 'Query' }
  & { getAllPoints: Array<(
    { __typename?: 'Points' }
    & Pick<Points, 'id' | 'createdAt' | 'amount' | 'reason'>
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
      & Pick<Points, 'createdAt' | 'reason' | 'amount'>
    )>> }
  )> }
);

export type GetAllUsersByGalaQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetAllUsersByGalaQuery = (
  { __typename?: 'Query' }
  & { getAllUsersByGala: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username'>
    & { points?: Maybe<Array<(
      { __typename?: 'Points' }
      & Pick<Points, 'createdAt' | 'reason' | 'amount'>
    )>> }
  )> }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'username' | 'email'>
  ) }
);

export type GetGalaTotalPointsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetGalaTotalPointsQuery = (
  { __typename?: 'Query' }
  & { getGalaTotalPoints: Array<(
    { __typename?: 'TotalPointsPerUserResponse' }
    & Pick<TotalPointsPerUserResponse, 'totalPoints'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'name' | 'username'>
    ) }
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
    & Pick<Points, 'createdAt' | 'id' | 'amount' | 'reason'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name'>
    )> }
  )> }
);

export type GetPointsByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPointsByIdQuery = (
  { __typename?: 'Query' }
  & { getPointsById: (
    { __typename?: 'Points' }
    & Pick<Points, 'createdAt' | 'amount' | 'reason'>
  ) }
);

export type GetPointsByUsernameQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type GetPointsByUsernameQuery = (
  { __typename?: 'Query' }
  & { getPointsByUsername: Array<(
    { __typename?: 'Points' }
    & Pick<Points, 'createdAt' | 'amount'>
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


export const AddGalaDocument = gql`
    mutation AddGala($name: String!, $initDate: String!, $finishDate: String!) {
  addGala(name: $name, initDate: $initDate, finishDate: $finishDate)
}
    `;
export type AddGalaMutationFn = Apollo.MutationFunction<AddGalaMutation, AddGalaMutationVariables>;

/**
 * __useAddGalaMutation__
 *
 * To run a mutation, you first call `useAddGalaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGalaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGalaMutation, { data, loading, error }] = useAddGalaMutation({
 *   variables: {
 *      name: // value for 'name'
 *      initDate: // value for 'initDate'
 *      finishDate: // value for 'finishDate'
 *   },
 * });
 */
export function useAddGalaMutation(baseOptions?: Apollo.MutationHookOptions<AddGalaMutation, AddGalaMutationVariables>) {
        return Apollo.useMutation<AddGalaMutation, AddGalaMutationVariables>(AddGalaDocument, baseOptions);
      }
export type AddGalaMutationHookResult = ReturnType<typeof useAddGalaMutation>;
export type AddGalaMutationResult = Apollo.MutationResult<AddGalaMutation>;
export type AddGalaMutationOptions = Apollo.BaseMutationOptions<AddGalaMutation, AddGalaMutationVariables>;
export const AddPointsDocument = gql`
    mutation AddPoints($username: String!, $reason: String!, $amount: Float!, $galaId: String!) {
  addPoints(
    username: $username
    reason: $reason
    amount: $amount
    galaId: $galaId
  )
}
    `;
export type AddPointsMutationFn = Apollo.MutationFunction<AddPointsMutation, AddPointsMutationVariables>;

/**
 * __useAddPointsMutation__
 *
 * To run a mutation, you first call `useAddPointsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPointsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPointsMutation, { data, loading, error }] = useAddPointsMutation({
 *   variables: {
 *      username: // value for 'username'
 *      reason: // value for 'reason'
 *      amount: // value for 'amount'
 *      galaId: // value for 'galaId'
 *   },
 * });
 */
export function useAddPointsMutation(baseOptions?: Apollo.MutationHookOptions<AddPointsMutation, AddPointsMutationVariables>) {
        return Apollo.useMutation<AddPointsMutation, AddPointsMutationVariables>(AddPointsDocument, baseOptions);
      }
export type AddPointsMutationHookResult = ReturnType<typeof useAddPointsMutation>;
export type AddPointsMutationResult = Apollo.MutationResult<AddPointsMutation>;
export type AddPointsMutationOptions = Apollo.BaseMutationOptions<AddPointsMutation, AddPointsMutationVariables>;
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
export const DeletePointsDocument = gql`
    mutation DeletePoints($id: String!) {
  deletePoints(id: $id)
}
    `;
export type DeletePointsMutationFn = Apollo.MutationFunction<DeletePointsMutation, DeletePointsMutationVariables>;

/**
 * __useDeletePointsMutation__
 *
 * To run a mutation, you first call `useDeletePointsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePointsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePointsMutation, { data, loading, error }] = useDeletePointsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePointsMutation(baseOptions?: Apollo.MutationHookOptions<DeletePointsMutation, DeletePointsMutationVariables>) {
        return Apollo.useMutation<DeletePointsMutation, DeletePointsMutationVariables>(DeletePointsDocument, baseOptions);
      }
export type DeletePointsMutationHookResult = ReturnType<typeof useDeletePointsMutation>;
export type DeletePointsMutationResult = Apollo.MutationResult<DeletePointsMutation>;
export type DeletePointsMutationOptions = Apollo.BaseMutationOptions<DeletePointsMutation, DeletePointsMutationVariables>;
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
export const UpdatePointsDocument = gql`
    mutation UpdatePoints($id: String!, $reason: String, $amount: Float) {
  updatePoints(id: $id, reason: $reason, amount: $amount) {
    createdAt
    amount
    reason
  }
}
    `;
export type UpdatePointsMutationFn = Apollo.MutationFunction<UpdatePointsMutation, UpdatePointsMutationVariables>;

/**
 * __useUpdatePointsMutation__
 *
 * To run a mutation, you first call `useUpdatePointsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePointsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePointsMutation, { data, loading, error }] = useUpdatePointsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      reason: // value for 'reason'
 *      amount: // value for 'amount'
 *   },
 * });
 */
export function useUpdatePointsMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePointsMutation, UpdatePointsMutationVariables>) {
        return Apollo.useMutation<UpdatePointsMutation, UpdatePointsMutationVariables>(UpdatePointsDocument, baseOptions);
      }
export type UpdatePointsMutationHookResult = ReturnType<typeof useUpdatePointsMutation>;
export type UpdatePointsMutationResult = Apollo.MutationResult<UpdatePointsMutation>;
export type UpdatePointsMutationOptions = Apollo.BaseMutationOptions<UpdatePointsMutation, UpdatePointsMutationVariables>;
export const GetAllGalaPointsDocument = gql`
    query GetAllGalaPoints($id: String!) {
  getAllGalaPoints(id: $id) {
    id
    name
    createdAt
    initDate
    finishDate
    points {
      id
      createdAt
      amount
      reason
      user {
        name
        username
      }
    }
  }
}
    `;

/**
 * __useGetAllGalaPointsQuery__
 *
 * To run a query within a React component, call `useGetAllGalaPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGalaPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGalaPointsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllGalaPointsQuery(baseOptions: Apollo.QueryHookOptions<GetAllGalaPointsQuery, GetAllGalaPointsQueryVariables>) {
        return Apollo.useQuery<GetAllGalaPointsQuery, GetAllGalaPointsQueryVariables>(GetAllGalaPointsDocument, baseOptions);
      }
export function useGetAllGalaPointsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGalaPointsQuery, GetAllGalaPointsQueryVariables>) {
          return Apollo.useLazyQuery<GetAllGalaPointsQuery, GetAllGalaPointsQueryVariables>(GetAllGalaPointsDocument, baseOptions);
        }
export type GetAllGalaPointsQueryHookResult = ReturnType<typeof useGetAllGalaPointsQuery>;
export type GetAllGalaPointsLazyQueryHookResult = ReturnType<typeof useGetAllGalaPointsLazyQuery>;
export type GetAllGalaPointsQueryResult = Apollo.QueryResult<GetAllGalaPointsQuery, GetAllGalaPointsQueryVariables>;
export const GetAllGalasDocument = gql`
    query GetAllGalas {
  getAllGalas {
    id
    createdAt
    name
    initDate
    finishDate
  }
}
    `;

/**
 * __useGetAllGalasQuery__
 *
 * To run a query within a React component, call `useGetAllGalasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGalasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGalasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGalasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllGalasQuery, GetAllGalasQueryVariables>) {
        return Apollo.useQuery<GetAllGalasQuery, GetAllGalasQueryVariables>(GetAllGalasDocument, baseOptions);
      }
export function useGetAllGalasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGalasQuery, GetAllGalasQueryVariables>) {
          return Apollo.useLazyQuery<GetAllGalasQuery, GetAllGalasQueryVariables>(GetAllGalasDocument, baseOptions);
        }
export type GetAllGalasQueryHookResult = ReturnType<typeof useGetAllGalasQuery>;
export type GetAllGalasLazyQueryHookResult = ReturnType<typeof useGetAllGalasLazyQuery>;
export type GetAllGalasQueryResult = Apollo.QueryResult<GetAllGalasQuery, GetAllGalasQueryVariables>;
export const GetAllPointsDocument = gql`
    query GetAllPoints {
  getAllPoints {
    id
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
      createdAt
      reason
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
export const GetAllUsersByGalaDocument = gql`
    query GetAllUsersByGala($id: String!) {
  getAllUsersByGala(galaId: $id) {
    id
    name
    username
    points {
      createdAt
      reason
      amount
    }
  }
}
    `;

/**
 * __useGetAllUsersByGalaQuery__
 *
 * To run a query within a React component, call `useGetAllUsersByGalaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersByGalaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersByGalaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAllUsersByGalaQuery(baseOptions: Apollo.QueryHookOptions<GetAllUsersByGalaQuery, GetAllUsersByGalaQueryVariables>) {
        return Apollo.useQuery<GetAllUsersByGalaQuery, GetAllUsersByGalaQueryVariables>(GetAllUsersByGalaDocument, baseOptions);
      }
export function useGetAllUsersByGalaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersByGalaQuery, GetAllUsersByGalaQueryVariables>) {
          return Apollo.useLazyQuery<GetAllUsersByGalaQuery, GetAllUsersByGalaQueryVariables>(GetAllUsersByGalaDocument, baseOptions);
        }
export type GetAllUsersByGalaQueryHookResult = ReturnType<typeof useGetAllUsersByGalaQuery>;
export type GetAllUsersByGalaLazyQueryHookResult = ReturnType<typeof useGetAllUsersByGalaLazyQuery>;
export type GetAllUsersByGalaQueryResult = Apollo.QueryResult<GetAllUsersByGalaQuery, GetAllUsersByGalaQueryVariables>;
export const GetCurrentUserDocument = gql`
    query GetCurrentUser {
  getCurrentUser {
    id
    name
    username
    email
  }
}
    `;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetGalaTotalPointsDocument = gql`
    query GetGalaTotalPoints($id: String!) {
  getGalaTotalPoints(id: $id) {
    user {
      name
      username
    }
    totalPoints
  }
}
    `;

/**
 * __useGetGalaTotalPointsQuery__
 *
 * To run a query within a React component, call `useGetGalaTotalPointsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGalaTotalPointsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGalaTotalPointsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetGalaTotalPointsQuery(baseOptions: Apollo.QueryHookOptions<GetGalaTotalPointsQuery, GetGalaTotalPointsQueryVariables>) {
        return Apollo.useQuery<GetGalaTotalPointsQuery, GetGalaTotalPointsQueryVariables>(GetGalaTotalPointsDocument, baseOptions);
      }
export function useGetGalaTotalPointsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGalaTotalPointsQuery, GetGalaTotalPointsQueryVariables>) {
          return Apollo.useLazyQuery<GetGalaTotalPointsQuery, GetGalaTotalPointsQueryVariables>(GetGalaTotalPointsDocument, baseOptions);
        }
export type GetGalaTotalPointsQueryHookResult = ReturnType<typeof useGetGalaTotalPointsQuery>;
export type GetGalaTotalPointsLazyQueryHookResult = ReturnType<typeof useGetGalaTotalPointsLazyQuery>;
export type GetGalaTotalPointsQueryResult = Apollo.QueryResult<GetGalaTotalPointsQuery, GetGalaTotalPointsQueryVariables>;
export const GetPaginatedPointsDocument = gql`
    query getPaginatedPoints($skip: Float, $take: Float, $order: String = "DESC") {
  getPaginatedPoints(skip: $skip, take: $take, order: $order) {
    createdAt
    id
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
export const GetPointsByIdDocument = gql`
    query GetPointsById($id: String!) {
  getPointsById(id: $id) {
    createdAt
    amount
    reason
  }
}
    `;

/**
 * __useGetPointsByIdQuery__
 *
 * To run a query within a React component, call `useGetPointsByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPointsByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPointsByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPointsByIdQuery(baseOptions: Apollo.QueryHookOptions<GetPointsByIdQuery, GetPointsByIdQueryVariables>) {
        return Apollo.useQuery<GetPointsByIdQuery, GetPointsByIdQueryVariables>(GetPointsByIdDocument, baseOptions);
      }
export function useGetPointsByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPointsByIdQuery, GetPointsByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetPointsByIdQuery, GetPointsByIdQueryVariables>(GetPointsByIdDocument, baseOptions);
        }
export type GetPointsByIdQueryHookResult = ReturnType<typeof useGetPointsByIdQuery>;
export type GetPointsByIdLazyQueryHookResult = ReturnType<typeof useGetPointsByIdLazyQuery>;
export type GetPointsByIdQueryResult = Apollo.QueryResult<GetPointsByIdQuery, GetPointsByIdQueryVariables>;
export const GetPointsByUsernameDocument = gql`
    query GetPointsByUsername($username: String!) {
  getPointsByUsername(username: $username) {
    createdAt
    amount
  }
}
    `;

/**
 * __useGetPointsByUsernameQuery__
 *
 * To run a query within a React component, call `useGetPointsByUsernameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPointsByUsernameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPointsByUsernameQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetPointsByUsernameQuery(baseOptions: Apollo.QueryHookOptions<GetPointsByUsernameQuery, GetPointsByUsernameQueryVariables>) {
        return Apollo.useQuery<GetPointsByUsernameQuery, GetPointsByUsernameQueryVariables>(GetPointsByUsernameDocument, baseOptions);
      }
export function useGetPointsByUsernameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPointsByUsernameQuery, GetPointsByUsernameQueryVariables>) {
          return Apollo.useLazyQuery<GetPointsByUsernameQuery, GetPointsByUsernameQueryVariables>(GetPointsByUsernameDocument, baseOptions);
        }
export type GetPointsByUsernameQueryHookResult = ReturnType<typeof useGetPointsByUsernameQuery>;
export type GetPointsByUsernameLazyQueryHookResult = ReturnType<typeof useGetPointsByUsernameLazyQuery>;
export type GetPointsByUsernameQueryResult = Apollo.QueryResult<GetPointsByUsernameQuery, GetPointsByUsernameQueryVariables>;
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
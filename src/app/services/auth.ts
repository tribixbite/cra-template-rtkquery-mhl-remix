/* eslint-disable prefer-destructuring */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../../common/hooks/store'
/* eslint-disable import/no-cycle */
import { RootState } from '../store'

export interface User {
  first_name: string
  last_name: string
}

export interface UserResponse {
  user: User
  token: string
}

export interface LoginRequest {
  username: string
  password: string
}

export const api = createApi({
    baseQuery: fetchBaseQuery({
      baseUrl: '/',
      prepareHeaders: (headers, { getState }) => {
        // By default, if we have a token in the store, let's use that for authenticated requests
        // @ts-ignore
        const token = (getState() as RootState).auth.token
        if (token) {
          headers.set('authorization', `Bearer ${token}`)
        }
        return headers
      },
    }),
    endpoints: (builder) => ({
      login: builder.mutation<UserResponse, LoginRequest>({
        query: (credentials) => ({
          url: 'login',
          method: 'POST',
          body: credentials,
        }),
      }),
      protected: builder.mutation<{ message: string }, void>({
        query: () => 'protected',
      }),
    }),
  })

// Export hooks for usage in functional components
export const { useLoginMutation, useProtectedMutation } = api
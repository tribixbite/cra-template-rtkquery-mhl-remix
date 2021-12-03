// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Member } from './types'

// Read https://redux-toolkit.js.org/rtk-query/usage/queries for usage

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://external.com/api/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Member, string>({
      query: (name) => `api/${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = api
// With RTK Query, you usually define your entire API definition in one place. 
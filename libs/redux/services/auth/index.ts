import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginResponse, LoginPayload } from './interface'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_DOMAIN }),

  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
  }),
})
export const { useLoginMutation } = authApi

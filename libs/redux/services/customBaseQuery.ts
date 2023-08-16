import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'
import { clearAuth, setUserAuth } from '../slices/auth'

import type { AuthSlice } from '../slices/auth/interface'
import type { RootState } from '../store'

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_DOMAIN,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.access_token

    if (token) headers.set('Authorization', `Bearer ${token}`)

    return headers
  },
})

export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  const state = api.getState() as RootState
  const { access_token } = state.auth

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            url: '/auth/refresh',
            method: 'post',
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          },
          api,
          extraOptions
        )

        if (refreshResult.data) {
          const { data: response } = refreshResult
          // type of data return from calling baseQuery is unknown. next line is checking for access_token property in response
          if (typeof response === 'object' && 'data' in response) {
            if (
              response.data &&
              typeof response.data === 'object' &&
              'access_token' in response.data
            ) {
              api.dispatch(setUserAuth({ ...(response.data as AuthSlice) }))
              result = await baseQuery(args, api, extraOptions)
            }
          }
        }
        if (refreshResult.error) {
          api.dispatch(clearAuth())
          window.location.replace('/login')
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
}

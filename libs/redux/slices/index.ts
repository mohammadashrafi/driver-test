import { combineReducers } from '@reduxjs/toolkit'
// import { authApi } from '../services/auth'
import { emptySplitApi } from '../services/emptyApi'

import authSlice from './auth'
import cardSlice from './card'
import footerSlice from './footer'
// import { persistReducer } from 'redux-persist';
// import { CookieStorage } from 'redux-persist-cookie-storage';
// import Cookies from 'js-cookie';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// const cookiePersistConfig = {
//   key: 'cookie',
//   storage: new CookieStorage(Cookies, {
//     expiration: {
//       default: 365 * 86400, // # One Year For Expiration
//     },
//   }),
//   whitelist: ['access_token', 'token_type', 'expires_in'],
//   stateReconciler: autoMergeLevel2, //  # For Only Shallow Merging New States With Defined States
// };

export const reducers = combineReducers({
  auth: authSlice,
  footer: footerSlice,
  card: cardSlice,
  // [authApi.reducerPath]: authApi.reducer,
  [emptySplitApi.reducerPath]: emptySplitApi.reducer,
})

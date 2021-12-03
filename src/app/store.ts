import { configureStore, combineReducers } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

/* eslint-disable import/no-cycle */
import { api } from './services/auth'
import authReducer from '../features/auth/authSlice'

const rootReducer = combineReducers({})

export const createStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export const store = createStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

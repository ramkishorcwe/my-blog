import { configureStore } from '@reduxjs/toolkit';
import blog from './blog-reducer'
import authSlice from './auth-reducer'

const store = configureStore({
  reducer: {
    blogState: blog,
    authState: authSlice,
  }
})

export default store;
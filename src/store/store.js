import { configureStore } from '@reduxjs/toolkit';
import blog from './blog-reducer'

const store = configureStore({
  reducer: {
    blog
  }
})

export default store;
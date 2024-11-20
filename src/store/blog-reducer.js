import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  title: 'initial My Title',
  description: "initial description",
  img: ""
}
const blog = createSlice({
  name: "blog",
  initialState: initialState,
  reducers: {
    first: (state, action) => {
      console.log(state, action)
    }
  }
})
export const { first } = blog.actions
export default blog.reducer;
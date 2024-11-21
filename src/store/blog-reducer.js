import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: 'initial My Title',
  description: "initial description",
  imgId: ""
}
const blogSlice = createSlice({
  name: "blogSlice",
  initialState: initialState,
  reducers: {
    first: (state, action) => {
      console.log(state, action)
    }
  }
})
export const { first } = blogSlice.actions
export default blogSlice.reducer;
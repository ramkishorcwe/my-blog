import { createSlice } from "@reduxjs/toolkit";
import auth from "../appwrite/auth";

const initialState = {
  status: false,
  userData: null
}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload.userData;
    },
    userStatus: (state, action) => {
      if (action.payload.userData.$id) {
        state.status = true;
        state.userData = action.payload.userData;
      } else {
        state.status = false;
        state.userData = newUser;
      }
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    }
  }
})

export const { login, logout, userStatus } = authSlice.actions;

export default authSlice.reducer;
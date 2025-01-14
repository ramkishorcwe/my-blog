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
      if (newUser.$id) {
        const newUser = auth.getUser();
        state.status = false;
        state.userData = newUser;
      } else {
        state.status = false;
        state.userData = newUser;
      }
      state.status = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    }
  }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
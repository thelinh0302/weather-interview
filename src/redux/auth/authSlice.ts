import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  isLoggedIn: boolean;
}
const initialState: AuthState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      state.isLoggedIn = true;
    },
    clearToken: (state) => {
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;

export default authSlice.reducer;

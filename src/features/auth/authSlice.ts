import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserFromToken } from "../../utils/jwt";
import { loginApi } from "../../utils/mockApi";

const token = localStorage.getItem("token");
const userFromToken = token ? getUserFromToken(token) : null;

interface AuthState {
  userId: string | null;
  username: string | null;
  token: string | null;
  error: string | null;
}

const initialState: AuthState = {
  userId: userFromToken ? userFromToken.userId : null,
  username: userFromToken ? userFromToken.username : null,
  token: token || null,
  error: null,
};

export const loginWithEmailAndPassword = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await loginApi(email, password);
      const userFromToken = getUserFromToken(response.token);

      return {
        token: response.token,
        userId: email,
        username: userFromToken ? userFromToken.username : email.split("@")[0],
      };
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("invalid email or password");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.userId = null;
      state.username = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        loginWithEmailAndPassword.rejected,
        (state, action: PayloadAction<string | unknown>) => {
          state.error = action.payload as string;
        }
      )
      .addCase(loginWithEmailAndPassword.fulfilled, (state, action) => {
        state.token = action.payload?.token;
        state.userId = action.payload?.userId;
        state.username = action.payload?.username;
        state.error = null;
        localStorage.setItem("token", action.payload.token);
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

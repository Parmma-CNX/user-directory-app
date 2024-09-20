import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UsersState } from "../../types/types";
import { mockUsers } from "../../utils/mockData";

const initialState: UsersState = {
  users: mockUsers,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<User[]>) {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   userList: [],
  //   loading: false,
  //   error: null,
  value: 0,
};

const userSlice = createSlice({
  name: "User Slice",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.value += 1;
    },
    dcrementCount: (state) => {
      state.value -= 1;
    },
    resetCount: (state) => {
      state.value = 0;
    },
  },
});

export default userSlice.reducer;
export const { incrementCount, dcrementCount, resetCount } = userSlice.actions;

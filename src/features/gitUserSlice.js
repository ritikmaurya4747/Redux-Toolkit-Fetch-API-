import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// data server se get karne ke liye
export const getAllData = createAsyncThunk("gitUsers", async (argument,{rejectWithValue}) => {
  const response = await fetch("https://api.github.com/users");
 try {
    const results = await response.json();
    return results;
 } catch (error) {
    return rejectWithValue("Opps found an error: " + error.message)
 }
});
export const gitUser = createSlice({
  name: "gitUser",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
//    extraReducers use nahi kar sakate isiliye ye wala version use kiya hu ( npm install @reduxjs/toolkit@1.5.0)

  extraReducers: {
    [getAllData.pending]: (state) => {
      state.loading = true;
    },
    [getAllData.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getAllData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default gitUser.reducer;

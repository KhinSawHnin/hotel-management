import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const Login=createAsyncThunk(
  "auth/login",async(data,rejectWithValue)=>{

  })
  const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    refreshToken: null,
    username:null,
    rememberMe:false,
    loading: false,
    error: null,
    initialized: false,
   
  },
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken=null;
      state.rememberMe=false;
      state.username=null;
      state.error = null;
      state.loading = false;
      state.initialized = true;
    },
}
  });
  export default authSlice.reducer;


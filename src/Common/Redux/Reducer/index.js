import { createSlice } from "@reduxjs/toolkit";
import initialState from "./InitialState";

const commonReducer = createSlice({
  name:'commonReducer',
  initialState,
  reducers:{
    setLoading: (state , action)=>{
      state.isLoading = action.payload;
    },
    setError: (state , action)=>{
      state.error = action.payload;
    },
  }
});

export const {setLoading , setError} = commonReducer.actions;
export default commonReducer.reducer ;
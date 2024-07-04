
import { createSlice } from '@reduxjs/toolkit';
import initialState from './InitialState';

const landingPageSlice = createSlice({
  name: 'landingPage',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setJobRoles: (state, action) => {
      state.jobRoles = action.payload;
    },
    setIncreaseCount: (state, action) => {
      state.count += action.payload;;
    },
    setDecreaseCount: (state) => {
      state.count -= 1;
    },
  },  
});


export const { 
  setProducts ,
  setJobRoles , 
  setIncreaseCount , 
  setDecreaseCount ,
} = landingPageSlice.actions;

export default landingPageSlice.reducer;

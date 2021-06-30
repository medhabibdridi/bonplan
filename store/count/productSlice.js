import {  createSlice } from '@reduxjs/toolkit';
import { fakeApi } from '../api/product';
const initialState = {
  value: [],
  
};



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    test : ( state, action) => {
        state.value = action.payload
    }
    
  },

  
});

export const {test } = productSlice.actions;


export const selectCount = (state) => state.value.value;


export const getfake = () => async (dispatch) => {
  try {
    const { data } = await fakeApi();
    dispatch(test(data))

  } catch (error) {
    console.log(error.message);
  }
};

export default productSlice.reducer;

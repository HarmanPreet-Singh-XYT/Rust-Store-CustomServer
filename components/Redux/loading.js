import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'Loading',
  initialState: {
    value: true,
  },
  reducers: {
    toFalse: (state) => {
      state.value = false;
    },
    toTrue: (state) => {
      state.value = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toFalse, toTrue } = counterSlice.actions

export default counterSlice.reducer
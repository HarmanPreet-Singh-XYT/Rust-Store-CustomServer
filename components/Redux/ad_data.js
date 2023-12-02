import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'adData',
  initialState: {
    value: [],
  },
  reducers: {
    updateAd: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateAd } = counterSlice.actions

export default counterSlice.reducer
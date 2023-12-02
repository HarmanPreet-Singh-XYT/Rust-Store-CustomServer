import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'shopData',
  initialState: {
    value: [],
  },
  reducers: {
    updateShop: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateShop } = counterSlice.actions

export default counterSlice.reducer
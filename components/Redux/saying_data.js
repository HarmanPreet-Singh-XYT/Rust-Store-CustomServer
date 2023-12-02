import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'sayingData',
  initialState: {
    value: [],
  },
  reducers: {
    updateSaying: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateSaying } = counterSlice.actions

export default counterSlice.reducer
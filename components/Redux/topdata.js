import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'TopCardData',
  initialState: {
    value: 0,
  },
  reducers: {
    next: (state) => {
      state.value += 1
    },
    back: (state) => {
        state.value = 0
    },
    change: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { next, back, change } = counterSlice.actions

export default counterSlice.reducer
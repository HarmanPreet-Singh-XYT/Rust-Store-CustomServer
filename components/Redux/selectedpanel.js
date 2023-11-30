import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'SelectedPanel',
  initialState: {
    value: 'Home',
  },
  reducers: {
    change: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { change } = counterSlice.actions

export default counterSlice.reducer
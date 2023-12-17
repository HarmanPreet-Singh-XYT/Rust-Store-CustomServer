import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'SelectedPolicy',
  initialState: {
    value: "terms&conditions",
  },
  reducers: {
    privacy: (state) => {
      state.value = "privacy&policy"
    },
    terms: (state) => {
      state.value = "terms&conditions"
    },
    refund: (state) => {
      state.value = "refund&cancellation"
    },
  },
})

// Action creators are generated for each case reducer function
export const { privacy, terms, refund } = counterSlice.actions

export default counterSlice.reducer
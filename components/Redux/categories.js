import { createSlice } from '@reduxjs/toolkit'
export const counterSlice = createSlice({
  name: 'Categories',
  initialState: {
    value: [{name:'All',id:0}],
  },
  reducers: {
    updateCategories: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateCategories } = counterSlice.actions

export default counterSlice.reducer
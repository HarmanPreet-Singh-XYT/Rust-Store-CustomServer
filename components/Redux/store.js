import { configureStore } from '@reduxjs/toolkit'
import top from './topdata'
import cat from './category'
export default configureStore({
  reducer: {
    TopCardData: top,
    SelectedCategory: cat
  },
})
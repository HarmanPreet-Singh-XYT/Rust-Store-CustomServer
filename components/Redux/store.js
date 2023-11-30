import { configureStore } from '@reduxjs/toolkit'
import top from './topdata'
import cat from './category'
import nav from './selectedpanel'
export default configureStore({
  reducer: {
    TopCardData: top,
    SelectedCategory: cat,
    SelectedPanel: nav
  },
})
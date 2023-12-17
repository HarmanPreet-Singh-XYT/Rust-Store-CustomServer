import { configureStore } from '@reduxjs/toolkit';
import top from './topdata';
import cat from './category';
import nav from './selectedpanel';
import shopD from './shop_data';
import sayingData from './saying_data';
import adData from './ad_data';
import catData from './categories'
import selpolicy from './sel_policy'
export default configureStore({
  reducer: {
    TopCardData: top,
    SelectedCategory: cat,
    SelectedPanel: nav,
    shopData: shopD,
    sayingData: sayingData,
    adData: adData,
    Categories: catData,
    SelectedPolicy: selpolicy,
  },
});
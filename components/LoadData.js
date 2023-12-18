"use client"
import {useEffect} from 'react'
import { updateShop } from './Redux/shop_data'
import { updateAd } from './Redux/ad_data'
import { updateSaying } from './Redux/saying_data'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { updateCategories } from './Redux/categories'
import { toFalse } from './Redux/loading'
import { categories, entries, userPatterns, vipUpgrades } from '@/app/data'
const LoadData = () => {
    const dispatch = useDispatch();
    const url = process.env.NEXT_PUBLIC_BACKEND
    const ifLocal = process.env.NEXT_PUBLIC_LOCALDATA
    async function getData() {
        try {
            // Make a GET request to the backend API to set data
            const data = await axios.get(`${url}/all-data`);
            dispatch(updateAd(data.data['ads']));
            dispatch(updateShop(data.data['shopItems']));
            dispatch(updateSaying(data.data['sayings']));
            dispatch(updateCategories(data.data['categories']));
            dispatch(toFalse());
          } catch (error) {
            console.error(error);
          }
    }
    function localData(){
      dispatch(updateAd(vipUpgrades));
      dispatch(updateShop(entries));
      dispatch(updateSaying(userPatterns));
      dispatch(updateCategories(categories));
      dispatch(toFalse());
    }
    useEffect(() => {
      ifLocal==='true' ? localData() : getData()
    }, [])
    return null;
}

export default LoadData
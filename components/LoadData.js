"use client"
import React,{useEffect} from 'react'
import { updateShop } from './Redux/shop_data'
import { updateAd } from './Redux/ad_data'
import { updateSaying } from './Redux/saying_data'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { updateCategories } from './Redux/categories'
const LoadData = () => {
    const dispatch = useDispatch();
    const url = process.env.NEXT_PUBLIC_BACKEND
    async function getData() {
        try {
            // Make a POST request to the backend API to add the item
            const data = await axios.get(`${url}/all-data`);
            dispatch(updateAd(data.data['ads']));
            dispatch(updateShop(data.data['shopItems']));
            dispatch(updateSaying(data.data['sayings']));
            dispatch(updateCategories(data.data['categories']))
          } catch (error) {
            console.error(error);
          }
    }
    useEffect(() => {
      getData()
    }, [])
    
}

export default LoadData
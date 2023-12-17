"use client"
import Policies from '@/components/Policies'
import React from 'react'
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
const page = () => {
  return (
    <Provider store={store}>
    <Policies/>
    </Provider>
  )
}

export default page
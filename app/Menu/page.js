"use client"
import Menu from '@/components/Menu'
import React from 'react'
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
const page = () => {
  return (
    <Provider store={store}>
    <Menu/>
    </Provider>
  )
}

export default page
"use client"
import React from 'react'
import About from '@/components/About'
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
const page = () => {

  return (
    <Provider store={store}>
    <About/>
    </Provider>
  )
}

export default page
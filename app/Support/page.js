"use client"
import Support from '@/components/Support'
import React from 'react'
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
const page = () => {
  return (
    <Provider store={store}>
      <Support/>
    </Provider>
  )
}

export default page
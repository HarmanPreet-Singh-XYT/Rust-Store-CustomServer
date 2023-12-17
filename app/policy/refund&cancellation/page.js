"use client"
import Refund from '@/components/Policies/Refund'
import React from 'react'
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
import Footer from '@/components/Common/Footer'
const page = () => {
  return (
    <Provider store={store}>
    <div className="container">
    <Refund/>
    </div>
    <Footer/>
    </Provider>
  )
}

export default page
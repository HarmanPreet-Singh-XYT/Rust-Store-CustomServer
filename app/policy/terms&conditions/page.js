"use client"
import Terms from '@/components/Policies/Terms'
import React from 'react'
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
import Footer from '@/components/Common/Footer'
const page = () => {
  return (
    <Provider store={store}>
    <div className="container">
    <Terms/>
    </div>
    <Footer/>
    </Provider>
  )
}

export default page
"use client"
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
import Footer from '@/components/Common/Footer'
import Privacy from '@/components/Policies/Privacy'
import React from 'react'

const page = () => {
  return (
    <Provider store={store}>
    <div className="container">
    <Privacy/>
    </div>
    <Footer/>
    </Provider>
  )
}

export default page
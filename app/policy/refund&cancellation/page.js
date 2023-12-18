"use client"
import Refund from '@/components/Policies/Refund'
import React from 'react'
import { Provider } from 'react-redux'
import store from "@/components/Redux/store";
import Footer from '@/components/Common/Footer'
import Navbar from '@/components/Common/Navbar';
import Policies from '@/components/Policies';
const page = () => {
  return (
    <Provider store={store}>
    {/* <header className="header_section">
    <Navbar/>
    </header>
    <div className="container">
    <Refund/>
    </div>
    <Footer/> */}
    <Policies type='refund&cancellation'/>
    </Provider>
  )
}

export default page
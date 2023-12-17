"use client"
import Terms from '@/components/Policies/Terms';
import React from 'react';
import { Provider } from 'react-redux';
import store from "@/components/Redux/store";
import Footer from '@/components/Common/Footer';
import Navbar from '@/components/Common/Navbar';
const page = () => {
  return (
    <Provider store={store}>
    <header className="header_section">
    <Navbar/>
    </header>
    <div className="container">
    <Terms/>
    </div>
    <Footer/>
    </Provider>
  )
}

export default page
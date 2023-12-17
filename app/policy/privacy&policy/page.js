"use client"
import { Provider } from 'react-redux';
import store from "@/components/Redux/store";
import Footer from '@/components/Common/Footer';
import Privacy from '@/components/Policies/Privacy';
import React from 'react';
import Navbar from '@/components/Common/Navbar';
const page = () => {
  return (
    <Provider store={store}>
    <header className="header_section">
    <Navbar/>
    </header>
    <div className="container">
    <Privacy/>
    </div>
    <Footer/>
    </Provider>
  )
}

export default page
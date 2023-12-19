"use client"
import { Provider } from 'react-redux';
import store from "@/components/Redux/store";
import Footer from '@/components/Common/Footer';
import Privacy from '@/components/Policies/Privacy';
import React from 'react';
import Navbar from '@/components/Common/Navbar';
import Policies from '@/components/Policies';
const page = () => {
  return (
    <Provider store={store}>
    {/* <header className="header_section">
    <Navbar/>
    </header>
    <div className="container">
    <Privacy/>
    </div>
    <Footer/> */}
    <Policies type='privacy&policy'/>
    </Provider>
  )
}

export default page
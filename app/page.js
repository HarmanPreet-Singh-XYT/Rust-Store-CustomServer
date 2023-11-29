"use client"
import Home from "@/components/Home";
import store from "@/components/Redux/store";
import React from "react";
import { Provider } from 'react-redux'
const Page = ()=>{
  return (
  <>
  <Provider store={store}>
  <Home/>
  </Provider>
  </>
  )
}
export default Page;
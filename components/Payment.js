"use client"
import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Payment = () => {
  const storeItems = useSelector((state)=> state.shopData.value);
  return (
    <form id="rzp_payment_form"></form>
  );
}

export default Payment;
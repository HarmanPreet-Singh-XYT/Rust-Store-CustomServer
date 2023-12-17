import React from 'react'
import Privacy from './Policies/Privacy'
import Refund from './Policies/Refund'
import Terms from './Policies/Terms'
import { useSelector,useDispatch } from 'react-redux'
import { privacy, terms, refund } from './Redux/sel_policy'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
const Policies = () => {
  const dispatch = useDispatch();
    const selectedpolicy = useSelector((state) => state.SelectedPolicy.value);
  return (
    <>
    <header className="header_section">
    <Navbar/>
    </header>
    <div className="container pol-btn">
      <button onClick={()=>dispatch(privacy())}>Privacy Policy</button>
      <button onClick={()=>dispatch(terms())}>Terms and Conditions</button>
      <button onClick={()=>dispatch(refund())}>Refund and Cancellation</button>
    </div>
    <div className="container">
    {selectedpolicy==='privacy&policy' && <Privacy/>}
    {selectedpolicy==='refund&cancellation' && <Refund/>}
    {selectedpolicy==='terms&conditions' && <Terms/>}
    </div>
    <Footer/>
    </>
  )
}

export default Policies
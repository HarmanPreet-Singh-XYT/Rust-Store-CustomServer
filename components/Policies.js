import React, { useEffect } from 'react'
import Privacy from './Policies/Privacy'
import Refund from './Policies/Refund'
import Terms from './Policies/Terms'
import { useSelector,useDispatch } from 'react-redux'
import { privacy, terms, refund } from './Redux/sel_policy'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
const Policies = (props) => {
  useEffect(() => {
    props.type === 'privacy&policy' && dispatch(privacy());
    props.type === 'terms&conditions' && dispatch(terms());
    props.type === 'refund&cancellation' && dispatch(refund());
  }, [])
  
  const dispatch = useDispatch();
    const selectedpolicy = useSelector((state) => state.SelectedPolicy.value);
  return (
    <>
    <header className="header_section">
    <Navbar/>
    </header>
    <div className="container pol-btn">
      <button style={{backgroundColor:selectedpolicy==='privacy&policy' ? `#007bff` : `#0256b0`}} onClick={()=>dispatch(privacy())}>Privacy Policy</button>
      <button style={{backgroundColor:selectedpolicy==='terms&conditions' ? `#007bff` : `#0256b0`}} onClick={()=>dispatch(terms())}>Terms and Conditions</button>
      <button style={{backgroundColor:selectedpolicy==='refund&cancellation' ? `#007bff` : `#0256b0`}} onClick={()=>dispatch(refund())}>Refund and Cancellation</button>
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
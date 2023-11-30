import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { next,back,change } from '../Redux/topdata'
import Navbar from "../Common/Navbar";
const Top = ()=>{
    const count = useSelector((state) => state.TopCardData.value);
    const dispatch = useDispatch();
    useEffect(() => {
        const intervalId = setInterval(() => {
          if (count < TopData.length-1) {
            dispatch(next());
          } else {
            dispatch(back());
          }
        }, 2000);
      
        return () => {
          clearInterval(intervalId); // Clear the interval using the ID
        };
      }, [count]);
    const TopData = [
        {title:'VIP',content:'Unlock a new level of gameplay with VIP status! Enjoy exclusive access to the server, upgraded tools, and a resource boost to jumpstart your Rust adventure. Show off with VIP-only cosmetic items and stand out in the harsh wilderness.',link:'#'},
        {title:'VIP+',content:'Elevate your experience with VIP+! All the benefits of VIP, plus a premium kit with advanced tools and weapons. Gain access to exclusive building components and enjoy enhanced services like priority access to server events. Boost your resource gathering rates even further for a truly elite edge.',link:'#'},
        {title:'VIP++',content:'Step into the elite ranks with VIP++! Experience the pinnacle of Rust luxury with high-tier tools and weapons in your elite kit. Enjoy VIP++ exclusive building materials for truly lavish bases. Access a dedicated support channel and receive unique rare items. Enjoy faster respawn times and dominate the Rust world like never before.',link:'#'}
    ]
    return (
        <div className="hero_area">
            <div className="bg-box">
            <img src="banner.jpg" alt=""/>
            </div>
            <header className="header_section">
            <Navbar/>
            </header>
            <section className="slider_section ">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                {<div className="carousel-item active">
                    <div className="container ">
                    <div className="row">
                        <div className="col-md-7 col-lg-6 ">
                        <div className="detail-box">
                            <h1>
                            {TopData[count]['title']}
                            </h1>
                            <p>
                            {TopData[count]['content']}
                            </p>
                            <div className="btn-box">
                            <a href={TopData[count]['link']} className="btn1">
                                Checkout Now
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>}
                </div>
                <div className="container">
                <ol className="carousel-indicators">
                    <li data-target="#customCarousel1" data-slide-to="0" onClick={()=>dispatch(change(0))} className={count===0 ? 'active' : 'inactive'}></li>
                    <li data-target="#customCarousel1" data-slide-to="1" onClick={()=>dispatch(change(1))} className={count===1 ? 'active' : 'inactive'}></li>
                    <li data-target="#customCarousel1" data-slide-to="2" onClick={()=>dispatch(change(2))} className={count===2 ? 'active' : 'inactive'}></li>
                </ol>
                </div>
            </div>

            </section>
        </div>
    );
};
export default Top;
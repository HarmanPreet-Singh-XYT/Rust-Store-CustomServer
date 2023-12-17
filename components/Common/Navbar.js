import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { changeSelected } from '../Redux/selectedpanel'
const Navbar = () => {
    const nav = ['Home','Menu','About','Support','policy']
    const selectedpanel = useSelector((state) => state.SelectedPanel.value);
    const dispatch = useDispatch();
  return (
    <div className="container">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                <a className="navbar-brand" href="index.html">
                    <span>
                    Unicorn Rust
                    </span>
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""> </span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mx-auto ">
                    {nav.map((each,index)=>
                        <li onClick={()=>dispatch(changeSelected(each))} key={index} className={selectedpanel===each ? "nav-item active" : "nav-item"}>
                            <Link className="nav-link" href={each==='Home' ? '/' : `/${each}`} passHref>{each} <span className="sr-only">{selectedpanel===each && '(current)'}</span></Link>
                        </li>
                    )}
                    </ul>
                    <div className="user_option">
                    <a href="" className="user_link">
                        <i className="fa fa-user" aria-hidden="true"></i>
                    </a>
                    <a className="cart_link" href="#">
                    
                    </a>
                    {/* <form className="form-inline">
                        <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form> */}
                    <a href="https://discord.gg/uWC8kBj3cf" style={{backgroundColor:'#7289da'}} className="order_online">
                        Join Discord
                    </a>
                    </div>
                </div>
                </nav>
            </div>
  )
}

export default Navbar
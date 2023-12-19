import React from 'react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { privacy, terms, refund } from '../Redux/sel_policy'
import { changeSelected } from '../Redux/selectedpanel'
const Footer = () => {
    const dispatch = useDispatch();
  return (
    <footer className="footer_section">
        <div className="container">
        <div className="row">
            <div className="col-md-4 footer-col">
            <div className="footer_contact">
                <h4>
                Contact Us
                </h4>
                <div className="contact_link_box">
                <a href="https://discord.gg/uWC8kBj3cf">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>
                    Discord
                    </span>
                </a>
                <p>
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                    unicornrust@asia.com
                    </span>
                </p>
                </div>
            </div>
            </div>
            <div className="col-md-4 footer-col">
            <div className="footer_detail">
                <a href="/" className="footer-logo">
                Unicorn Rust
                </a>
                <p>
                Forge legendary tales with us on Unicorn Rust – where survival meets magic, and every player is part of the Rust family.
                </p>
                <div className="footer_links">
                <Link onClick={()=>{dispatch(privacy());dispatch(changeSelected('policy'))}} className='policies' href="/policy/privacypolicy" passHref>
                    Privacy Policy
                </Link>
                <Link onClick={()=>{dispatch(terms());dispatch(changeSelected('policy'))}} className='policies' href="/policy/termsofservice" passHref>
                    Terms of Service
                </Link>
                <Link onClick={()=>{dispatch(refund());dispatch(changeSelected('policy'))}} className='policies' href="/policy/refund&cancellation" passHref>
                    Refund and Cancellation
                </Link>
                {/* <a href="">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="">
                    <i className="fa fa-pinterest" aria-hidden="true"></i>
                </a> */}
                </div>
            </div>
            </div>
            <div className="col-md-4 footer-col">
            <h4>
                Server Time
            </h4>
            <p>
                Everyday
            </p>
            <p>
                24 Hours Online
            </p>
            </div>
        </div>
        <div className="footer-info">
        </div>
        </div>
    </footer>
  )
}

export default Footer
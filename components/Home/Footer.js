import React from 'react'

const Footer = () => {
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
                <a href="">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>
                    unicornrust@asia.com
                    </span>
                </a>
                </div>
            </div>
            </div>
            <div className="col-md-4 footer-col">
            <div className="footer_detail">
                <a href="" className="footer-logo">
                Unicorn Rust
                </a>
                <p>
                Forge legendary tales with us on Unicorn Rust – where survival meets magic, and every player is part of the Rust family.
                </p>
                <div className="footer_social">
                {/* <a href="">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="">
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
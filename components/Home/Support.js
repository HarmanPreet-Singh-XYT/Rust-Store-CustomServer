import React from 'react'

const Support = () => {
  return (
    <section className="book_section layout_padding">
        <div className="container">
        <div className="heading_container">
            <h2>
            Contact Support
            </h2>
        </div>
        <div className="row">
            <div className="col-md-6">
            <div className="form_container">
                <form action="">
                <div>
                    <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div>
                    <input type="text" className="form-control" placeholder="Steam ID" />
                </div>
                <div>
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div>
                    <textarea cols="50" rows="5" placeholder="I have Issue regarding a Player"></textarea>
                </div>
                <div className="btn_box">
                    <button>
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
            <div className="col-md-6">
            <div className="map_container ">
                <img src="rust-logo.png" width="400px" height="350px"/>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Support
import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
const Support = () => {
    const email = process.env.NEXT_PUBLIC_EMAIL;
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        steam:"",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
          .send(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            {
              from_name: form.name,
              to_name: "UnicornRust Contact",
              from_email: form.email,
              to_email: email,
              message: `Steam ID=${form.steam} - Message=${form.message}`,
            },
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            () => {
              setLoading(false);
              alert("Thank you. I will get back to you as soon as possible.");
    
              setForm({
                name: "",
                steam:"",
                email: "",
                message: "",
              });
            },
            (error) => {
              setLoading(false);
              console.error(error);
    
              alert("Ahh, something went wrong. Please try again.");
            }
          );
      };
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
                <form ref={formRef} onSubmit={handleSubmit} action="">
                <div>
                    <input name='name' value={form.name} onChange={handleChange} type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div>
                    <input name='steam' value={form.steam} onChange={handleChange} type="text" className="form-control" placeholder="Steam ID" />
                </div>
                <div>
                    <input name='email' value={form.email} onChange={handleChange} type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div>
                    <textarea name='message' value={form.message} onChange={handleChange} cols="50" rows="5" placeholder="I have Issue regarding a Player"></textarea>
                </div>
                <div className="btn_box">
                    <button disabled={loading}>
                        {loading ? 'Loading...' : 'Submit'}
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
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from '../Common/Loading';
const Saying = () => {
    const sayings = useSelector((state) => state.sayingData.value);
    // const sayings = [
    //     {user:'XYT',desc:"Embrace the wild beauty of Rust on Unicorn Rust! As an admin, my commitment is to ensure a thrilling and fair gaming environment. From epic battles to grand alliances, I'm here to make your Rust experience unforgettable. Join us, and let's forge legendary stories together!",position:'Admin',image:'a1.jpg'},
    //     {user:'xDaggeRxYT',desc:"Survival, strategy, and a touch of magic – that's the Unicorn Rust promise. As an admin, my focus is on creating a server where every player feels valued. Expect exciting challenges, frequent events, and a supportive community. Join us on this extraordinary journey; your Rust adventure begins here!",position:'Admin',image:'a2.jpg'},
    //     {user:'LUKY 3',desc:"At Unicorn Rust, we're more than just a server – we're a Rust family. As an admin, my goal is to ensure that every player enjoys a balanced and immersive experience. From fair gameplay to responsive support, we've got your back. Join us, and let's build a Rust community like no other!",position:'Admin',image:'a3.jpg'}
    // ]
  return (
    <section className="client_section layout_padding-bottom">
        <div className="container">
        <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
            What Says Our Admins
            </h2>
        </div>
        <Loading/>
        <div className="carousel-wrap row ">
            <div className="owl-carousel client_owl-carousel">
            {sayings.map((each,index)=><div key={index} className="item">
                <div className="box">
                <div className="detail-box">
                    <p>
                    {each.desc}
                    </p>
                    <h6>
                    {each.user}
                    </h6>
                    <p>
                    {each.position}
                    </p>
                </div>
                <div className="img-box">
                    <img src={each.image} alt="" className="box-img"/>
                </div>
                </div>
            </div>)}
            </div>
        </div>
        </div>
    </section>
  )
}

export default Saying
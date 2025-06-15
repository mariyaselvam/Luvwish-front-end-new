import React from 'react'
import Img1 from "../../assets/images/about/about-img.png"

const AboutUs = () => {
  return (
    <>

    <section className='about-us-sec-main sec-p'> 
     <section className="about-us-sec">
        <div className="about-us-sec-tit-wrap">
            <h3>About us</h3>
            <p>Empowering Period Care, One Kit at a Time</p>
        </div>
     </section>

     <section className='about-us-sec-two'>
          <div className="container">
            <div className="row">
                <div className="col-3">
                   <div className="about-img">
                    <img src={Img1} alt="" />
                   </div>
                </div>
                  <div className="col-8">
                      <div className="about-cont-wrap">
                        
<p>  <span className='pink-span'>At Luvwish,</span> we believe that period care should be simple, stylish, and stress-free. Our journey began with a simple thought—why should managing periods be a hassle? We wanted to create a solution that blends convenience, hygiene, and empowerment, all wrapped up in a discreet and travel-friendly kit</p>

                       <p>We know that periods are a natural part of life, yet they often come with unexpected moments. Whether you’re at work, in class, on a trip, or out with friends, finding the right products at the right time can be challenging. That’s why we designed the <span className='pink-span'> Luvwish Periods Kit—a compact, ready-to-use pack </span> that ensures you’re always prepared</p>
                  
                      </div>

                       </div>
            </div>
        </div>
     </section>
     </section>
    </>
  )
}

export default AboutUs
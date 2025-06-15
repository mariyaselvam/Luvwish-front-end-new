import React from 'react'
import Img1 from "../../assets/images/how-it-works/how-it-works-img-1.jpg"
import Img2 from "../../assets/images/how-it-works/how-it-works-img-2.png"

const HowItWorks = () => {
  return (
    <>
     <section className="how-it-works-sec sec-p">
        
        <div className="container">
            <h3 className='pink-tit how-its-work-main-tit mb-5'>How a Wish Turned into Luvwish</h3>
            <div className="row">
                <div className="col-lg-7">
                    <div className="how-it-works-img-wrap">
                        <img src={Img1} alt="" />
                    </div>

                    <h3 className="pink-tit">LUVWISH MENSTRUAL MAGIC</h3>

                        <p>As the worldresounds with the stern tones of self-care, two friends from the vibrant town of Chittur Palakkad are resolute to make menstrual health a revolutionized story. The dynamic duo of Luvwish, composed of Sarath and Akhilesh, does not just sell products. They are weavingan engaging narrative of compassion and</p>

                        <h3 className='pink-tit'>FOUNDER’S</h3>

                    <div className="how-it-works-img-wrap">
                        <img src={Img2} alt="" />
                    </div>

                </div>
                <div className="col-lg-5">
                    <p>It started with Sarath’s deep concern for the health of women and his dream to make periods a celebrated part of womanhood. Akhilesh, a BBA graduate who had a knack for business, they started on a journey to make hygiene essentials accessible and enjoyable</p>

                    <p>Luvwish’s curated packs, offered at an affordable ₹299, include everything from sanitary pads to pain relief packs, thoughtfully designed to cater to women’s needs. “Wherever we go, we will be hygienic,” Sarath emphasizes, showcasing their commitment to convenience and care.</p>

                    <p>Their packs feature reusable cotton pads and plastic-free disposable bags and are assembled by their family with love, much like the personal touch that defines Luvwish. This approach reflects their dedication to both sustainability and care. With dreams of spreading their influence across Kerala and beyond, Sarath and Akhilesh’s journey is just beginning.</p>


                    <p>The story of Sarath and Akhilesh is a testament to the youthful ambition and power of social media. The content creation skills of Sarath have been the main drivingforce in breakingthe stigma around menstruation, and helping women be confidentabout their periods. “In the future,when our people think of periods, they will remember Luvwish,” Sarath envisions.</p>

                    <h2 className='how-it-works-big-tit pt-5'>“WHEREVER WE   GO, WE WILL BE HYGIENIC”</h2>
                </div>
                <div className="col-lg-12">
                    <h3 className='pink-tit'>Akhilesh & Sarath</h3>

                    <p>Two young men are leading an inspiring journey that is all about making a difference. While it’s strictly business, every middle-class dreamer needs someone like Luvwish, whose mission calls on us to champion their cause towards a more aware and compassionate handling of menstrual health. Let us champion this noble cause andwrite a new history for periods in the making-a pack at a time</p>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default HowItWorks
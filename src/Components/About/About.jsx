import React from 'react'
import './about.css'

//images
import img1 from '../../assets/wander.png'
import img2 from '../../assets/travel.png'
import img3 from '../../assets/customer.png'

//import video
import video from '../../assets/travel.mp4'


const About = () => {
    return (
        <section className='about section'>
            <div className="secContainer">
                <h2 className="title">
                    Why Wanderer?
                </h2>

                <div className="mainContent container grid">

                    <div className="singleItem">
                        <img src={img1} alt="Image Name" />

                        <h3>100+ Places To Visit</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id, ut dicta reiciendis laudantium quibusdam?</p>

                    </div>

                    <div className="singleItem">
                        <img src={img2} alt="Image Name" />

                        <h3>800+ Spots To Explore</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id, ut dicta reiciendis laudantium quibusdam?</p>

                    </div>

                    <div className="singleItem">
                        <img src={img3} alt="Image Name" />

                        <h3>3000+ Happy to Customers</h3>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque id, ut dicta reiciendis laudantium quibusdam?</p>

                    </div>

                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">
                        <div className="cardText">
                            <h2>Wonderful Time is right ahead of you it's just a leap of faith.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam rem, saepe deleniti harum iste et?</p>
                        </div>

                        <div className="cardVideo">
                            <video src={video} autoPlay loop muted type='video/mp4'></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

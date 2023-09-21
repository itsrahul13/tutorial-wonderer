import React from 'react'
import './popular.css'
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { BsDot } from "react-icons/bs"

//import images

// import img from "../../assets/image (2).jpg"
import img2 from "../../assets/image (6).jpg"
import img5 from "../../assets/image (8).jpg"
import img7 from "../../assets/image (10).jpg"
import img9 from "../../assets/image (12).jpg"
import img10 from "../../assets/image (14).jpg"

//array method to display other destinations using map.

const Data = [
    {
        id: 1,
        imgSrc: img2,
        desTitle: 'Budapest',
        location: 'Hungary',
        grade: 'CULTURAL RELAX,'
    },
    {
        id: 2,
        imgSrc: img5,
        desTitle: 'Flam',
        location: 'Norway',
        grade: 'CULTURAL RELAX,'
    },
    {
        id: 3,
        imgSrc: img7,
        desTitle: 'Guanajuanto',
        location: 'Mexico',
        grade: 'CULTURAL RELAX,'
    },
    {
        id: 4,
        imgSrc: img9,
        desTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX,'
    },
    {
        id: 5,
        imgSrc: img10,
        desTitle: 'Belarus',
        location: 'Russia',
        grade: 'CULTURAL RELAX,'
    },
]



const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">

                <div className="secHeader flex">

                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular Destinations
                        </h2>
                        <p>Explore the most magnificient beauties created by the Gods themselves!</p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({ id, imgSrc, desTitle, location, grade }) => {
                            return (
                                <div className="singleDestination">
                                    <div className="destImage">

                                        <img src={imgSrc} alt="Image title" />

                                        <div className="overlayInfo">

                                            <h3>{desTitle}</h3>

                                            <p>{location}
                                            </p>

                                            <BsArrowRightShort className='icon' />
                                        </div>

                                    </div>

                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>
                                        <div className="destText flex">
                                            <h6>{location}</h6>
                                            <span className="flex">
                                                <span className="dot">

                                                    <BsDot className="icon" />

                                                </span>
                                                Wanderer
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                    {/* <div className="singleDestination">
                        <div className="destImage">

                            <img src={imgSrc} alt="Image title" />

                            <div className="overlayInfo">

                                <h3>Info</h3>

                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, alias
                                </p>

                                <BsArrowRightShort className='icon' />
                            </div>

                        </div>

                        <div className="destFooter">
                            <div className="number">
                                01
                            </div>
                            <div className="destText flex">
                                <h6>London</h6>
                                <span className="flex">
                                    <span className="dot">

                                        <BsDot className="icon" />

                                    </span>
                                    Dot
                                </span>
                            </div>
                        </div> 
                     </div>  */}



                </div>

            </div>
        </section>
    )
}

export default Popular

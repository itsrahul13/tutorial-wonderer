import React from 'react'
import './offers.css'

import { MdBathtub, MdKingBed, MdAirportShuttle, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs';


//let import images


import img6 from '../../assets/image (6).jpg'
import img8 from '../../assets/image (8).jpg'
import img10 from '../../assets/image (10).jpg'


//using high order array method(map) to list offers.

const Offers = [
    {
        id: 1,
        imgSrc: img6,
        stTdeitle: 'Budapest',
        location: 'Hungary',
        price: '$2,452'
    },
    {
        id: 2,
        imgSrc: img8,
        stTdeitle: 'Flam',
        location: 'Norway',
        price: '$4,800'
    },
    {
        id: 3,
        imgSrc: img10,
        stTdeitle: 'Guanajuanto',
        location: 'Mexico',
        price: '$7,899'
    },
]

const Offer = () => {
    return (
        <section className="offer container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">Special Offers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at aliquam distinctio officiis unde dolore ratione ullam quod expedita recusandae.</p>
                </div>

                <div className="mainContent grid">

                    {
                        Offers.map(({ id, imgSrc, stTdeitle, location, price }) => {
                            return (
                                <div className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt={stTdeitle} />

                                        <span className="discount"> 40% Off</span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>{price}</h4>
                                            <span className="status">For Rent</span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className='icon' />
                                                <small>2 Beds</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdBathtub className='icon' />
                                                <small>1 Bath</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <FaWifi className='icon' />
                                                <small>Wi-Fi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdAirportShuttle className='icon' />
                                                <small>Shuttle</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className='icon' />
                                            <small>450 Vines #013, {location}</small>
                                        </div>

                                        <button className="btn flex">
                                            View
                                            <BsArrowRightShort />
                                        </button>

                                    </div>

                                </div>
                            )

                        })
                    }

                    {/* <div className="singleOffer">
                        <div className="destImage">
                            <img src={img} alt="Image Info" />

                            <span className="discount"> 40% Off</span>
                        </div>

                        <div className="offerBody">
                            <div className="price flex">
                                <h4>$1000</h4>
                                <span className="status">For Rent</span>
                            </div>

                            <div className="amenities flex">
                                <div className="singleAmenity flex">
                                    <MdKingBed className='icon' />
                                    <small>2 Beds</small>
                                </div>
                                <div className="singleAmenity flex">
                                    <MdBathtub className='icon' />
                                    <small>1 Bath</small>
                                </div>
                                <div className="singleAmenity flex">
                                    <FaWifi className='icon' />
                                    <small>Wi-Fi</small>
                                </div>
                                <div className="singleAmenity flex">
                                    <MdAirportShuttle className='icon' />
                                    <small>Shuttle</small>
                                </div>
                            </div>

                            <div className="location flex">
                                <MdLocationOn className='icon' />
                                <small>450 Vines #013, India</small>
                            </div>

                            <button className="btn flex">
                                View
                                <BsArrowRightShort />
                            </button>

                        </div>

                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default Offer

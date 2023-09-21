import React from 'react'
import './home.css'

const Home = () => {
    return (
        <section className='home'>
            <div className="setContainer container">

                <div className="homeText">
                    <h1 className="title">
                        Plan Your Trip with Wanderer
                    </h1>
                    <p className="subTitle">
                        Travel to the unknown wonders with Us.
                    </p>
                    <button className="btn">
                        <a href="# ">Wander With Us</a>
                    </button>
                </div>

                <div className="homeCard grid">

                    <div className="locationDiv">
                        <label htmlFor="location">Location</label>
                        <input type="text" placeholder='Where are you going?' />
                    </div>

                    <div className="distDiv">
                        <label htmlFor="distance">Distance</label>
                        <input type="text" placeholder='11/Meters' />
                    </div>

                    <div className="priceDiv">
                        <label htmlFor="price">Price Range</label>
                        <input type="text" placeholder='$200-$20,000' />
                    </div>

                    <button className="btn">
                        Search
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Home

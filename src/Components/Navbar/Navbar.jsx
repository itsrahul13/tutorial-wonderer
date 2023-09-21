import React, { useState } from 'react'
import './navbar.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
// import { useState } from 'react'




const Navbar = () => {
    //To toogle across Navbar
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    //To remove Navbar
    const removeNav = () => {
        setActive('navBar')
    }

    //Background color to header

    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if (window.scrollY >= 10) {
            setTransparent('header activeHeader')
        }
        else {
            setTransparent("header")
        }
    }
    window.addEventListener('scroll', addBg)

    return (
        <section className='navBarSection'>
            {/* <div className='header'> */}
            <div className={transparent}>

                <div className="logoDiv">
                    <a href="# " className='logo'>
                        <h1 className='flex'><SiYourtraveldottv className="icon" />Wanderer
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="# " className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="# " className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="# " className="navLink">Service</a>
                        </li>

                        <li className="navItem">
                            <a href="# " className="navLink">Contact</a>
                        </li>

                        <li className="navItem">
                            <a href="# " className="navLink">Blogs</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="# ">Login</a>
                            </button>
                            <button className="btn">
                                <a href="# ">Sign Up</a>
                            </button>
                        </div>

                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>

                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>

            </div>
        </section>
    )
}

export default Navbar

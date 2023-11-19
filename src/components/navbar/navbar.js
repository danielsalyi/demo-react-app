import React from 'react'
import logo from '../common/logo192.png'
import "./navbar.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navContainer'>
                <a href='./'>
                    <img className='navLogo' src={logo} />
                </a>
                <div>
                    <a href='./booking' className='navButton'>Book Now</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
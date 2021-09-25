import React, { useEffect, useState } from 'react'
import {FaSearch, FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar: React.FC = () => {
    const [Scroll, setScroll] = useState(false)
    useEffect(() => {
        const checkScroll = (): void => {
            if(window.scrollY > 50 ) setScroll(true)
            else setScroll(false)
        }

        window.addEventListener('scroll', checkScroll)

        return () => window.removeEventListener('scroll', checkScroll)
    }, [])
    return (
        <header className={Scroll ? 'scrolled' : ''}>
            <div className="navbar split-between" id="container">
                <nav>
                    <ul className="split-center">
                        <li><NavLink to="/">home</NavLink></li>
                        <li><NavLink to="/store">flowers</NavLink></li>
                        <li><NavLink to="blog">blog</NavLink></li>
                        <li><NavLink to="contact">contact</NavLink></li>
                    </ul>
                </nav>
                <div className="logo">HMSF</div>
                <div className="nav-cta">
                    <FaSearch />
                    <FaShoppingCart />
                </div>
            </div>
        </header>
    );
}

export default Navbar
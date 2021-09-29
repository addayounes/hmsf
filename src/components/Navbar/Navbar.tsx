import React, { useEffect, useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { RootStateOrAny, useSelector } from "react-redux";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [Scroll, setScroll] = useState(false);
    const cartItems = useSelector((state: RootStateOrAny) => state.cartReducer.cartItems);
    const { pathname } = useLocation();
    const history = useHistory();

    useEffect(() => {
        const checkScroll = (): void => {
            if (window.scrollY > 50) setScroll(true);
            else setScroll(false);
        };

        window.addEventListener("scroll", checkScroll);

        return () => window.removeEventListener("scroll", checkScroll);
    }, []);
    return (
        <header className={Scroll ? "scrolled" : pathname === "/" ? "home-position" : ""}>
            <div className='navbar split-between' id='container'>
                <nav>
                    <ul className='split-center'>
                        <li>
                            <NavLink exact to='/'>
                                home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/store'>flowers</NavLink>
                        </li>
                        <li>
                            <NavLink to='blog'>blog</NavLink>
                        </li>
                        <li>
                            <NavLink to='contact'>contact</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='logo'>HMSF</div>
                <div className='nav-cta split-between'>
                    <FaSearch />
                    <div onClick={() => history.push("/cart")} className='split-center'>
                        <span>{cartItems?.length}</span>
                        <FaShoppingCart />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

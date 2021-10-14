import React, { useEffect, useState } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { VscSignOut } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LogOut } from "../../firebase/auth";
import { setSearch } from "../../redux/ducks/flowers";
import { RootState } from "../../redux/store";
import "./Navbar.css";

const Navbar: React.FC = () => {
    const [Scroll, setScroll] = useState(false);
    const [ShowSearch, setShowSearch] = useState(false);
    const cartItems = useSelector((state: RootState) => state.cartReducer.cartItems);
    const search = useSelector((state: RootState) => state.flowersReducer.search);
    const isLogged = useSelector((state: RootState) => state.userReducer.isLogged);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearch(e.target.value));
    };
    const handleLogout = async () => {
        await LogOut();
        history.push("/");
        window.location.reload();
    };

    useEffect(() => {
        const checkScroll = (): void => {
            if (window.scrollY > 50) setScroll(true);
            else setScroll(false);
        };

        window.addEventListener("scroll", checkScroll);

        return () => window.removeEventListener("scroll", checkScroll);
    }, []);
    return (
        <header
            className={`split-center ${
                Scroll ? "scrolled" : pathname === "/" ? "home-position" : ""
            }`}>
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
                            <NavLink exact to='blog'>
                                blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to='contact'>
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='logo'>
                    <NavLink exact to='/'>
                        HMSF
                    </NavLink>
                </div>
                <div className='nav-cta split-between'>
                    <FaSearch onClick={() => setShowSearch((v) => !v)} />
                    {ShowSearch && (
                        <input
                            type='text'
                            placeholder='Search...'
                            className='search-input'
                            onChange={handleSearchChange}
                            value={search}
                        />
                    )}
                    {isLogged && (
                        <div onClick={() => history.push("/favorite")} className='split-center'>
                            <span>{cartItems?.length}</span>
                            <FaHeart />
                        </div>
                    )}
                    <div onClick={() => history.push("/cart")} className='split-center'>
                        <span>{cartItems?.length}</span>
                        <FaShoppingCart />
                    </div>
                    {isLogged ? (
                        <VscSignOut onClick={handleLogout} />
                    ) : (
                        <FaUser onClick={() => history.push("/login")} />
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;

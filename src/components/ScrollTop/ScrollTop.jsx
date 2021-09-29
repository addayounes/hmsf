import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "./ScrollTop.css";

const ScrollTop = () => {
    const [appear, setAppear] = useState(false);
    const handleClick = () => {
        scroll.scrollToTop(150);
    };
    const handleScroll = () => {
        if (window.scrollY > 850) setAppear(true);
        else setAppear(false);
    };
    window.addEventListener("scroll", handleScroll);
    return (
        <>
            {appear && (
                <div onClick={handleClick} className='scroll-to-top-icon'>
                    <FaAngleUp />
                </div>
            )}
        </>
    );
};

export default ScrollTop;

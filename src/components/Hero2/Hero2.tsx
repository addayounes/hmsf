import React from "react";
import Button from "../Button/Button";

const Hero2: React.FC = () => {
    return (
        <section className='hero2'>
            <div className='hero-content'>
                <div id='container'>
                    <h1>
                        Surprise who you love
                        <br />
                        with flowers
                    </h1>
                    <p>Make someone happy with a flower</p>
                    <Button label='shop now' variant='secondary-light' />
                </div>
            </div>
        </section>
    );
};

export default Hero2;

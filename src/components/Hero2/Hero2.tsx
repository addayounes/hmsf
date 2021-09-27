import React from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";

const Hero2: React.FC = () => {
    const history = useHistory();
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
                    <Button
                        onClick={() => history.push("/store")}
                        label='shop now'
                        variant='secondary-light'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero2;

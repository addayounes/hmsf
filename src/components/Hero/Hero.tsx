import React, { useEffect } from "react";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import "./Hero.css";

const Hero: React.FC = () => {
    const history = useHistory();
    useEffect(() => {}, []);
    return (
        <section className='hero'>
            <div className='hero-content'>
                <div id='container'>
                    <h1>
                        Flowers don't tell,
                        <br />
                        they <span>show</span>
                    </h1>
                    <p>Surprise who you love with flowers from HMSF</p>
                    <Button
                        onClick={() => history.push("/store")}
                        label='shop now'
                        variant='primary'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

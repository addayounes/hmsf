import React from 'react'
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import './Hero.css'


const Hero: React.FC = () => {
    return (
        <section className="hero">
            <Navbar />
            <div className="hero-content">
                <div id="container">
                    <h1>Flowers don't tell,<br />they <span>show</span></h1>
                    <p>Surprise who you love with flowers from HMSF</p>
                    <Button label="shop now" variant="primary" />
                </div>
            </div>
        </section>
    );
}

export default Hero


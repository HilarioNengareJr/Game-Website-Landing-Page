import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="section hero" id="home" aria-label="home" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}>
            <div className="container">

                <div className="hero-content">

                    <p className="hero-subtitle">World Gaming</p>

                    <h1 className="h1 hero-title">
                        Create <span className="span">Manage</span> Matches
                    </h1>

                    <p className="hero-text">
                        Find technology or people for digital projects in public sector and Find an individual specialist develope
                        researcher.
                    </p>

                    <button className="btn skewBg">Read More</button>

                </div>

                <figure className="hero-banner img-holder" style={{ width: '700', height: '700' }}>
                    <img src="/images/hero-banner.png" width="700" height="700" alt="hero banner" className="w-100" />
                </figure>

            </div>
        </section>
    )
}

export default Hero;
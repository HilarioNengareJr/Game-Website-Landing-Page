import React, { useState } from 'react';
import { CaretUp } from 'react-ionicons';
import './BackTop.css';


const BackTop = () => {
    const [isActive, setIsActive] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <a href="#top" className={isActive ? "back-top-btn active" : "back-top-btn"} aria-label="back to top">
            <CaretUp
                color={'#000000'}
                height="16px"
                width="16px"
                role="img" className="md hydrated" aria-label="cart"
            />
        </a>
    );
}

export default BackTop;
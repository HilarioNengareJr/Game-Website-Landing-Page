import React, { useState } from 'react';
import { LogoFacebook, LogoPinterest, LogoLinkedin, LogoTwitter, CartSharp, MenuOutline, SearchOutline, CloseOutline } from 'react-ionicons';
import './Navbar.css';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    };

    window.addEventListener('scroll', handleScroll);

    const toggleSearch = () => {
        setIsSearchActive(prevSearchActive => !prevSearchActive);
    }

    const toggleNav = () => {
        setIsClicked(prevActive => !prevActive);
    }

    return (
        <header className="header">

            <div className="header-top">
                <div className="container">

                    <div className="countdown-text">
                        Exclusive Black Friday ! Offer <span className="span skewBg">10</span> Days
                    </div>

                    <div className="social-wrapper">

                        <p className="social-title">Follow us on :</p>

                        <ul className="social-list">

                            <li>
                                <a href="#" className="social-link">
                                    <LogoFacebook
                                        color={'var(--marigold)'}
                                        height="18px"
                                        width="18px"
                                        role="img" className="md hydrated" aria-label="logo facebook"
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <LogoTwitter
                                        color={'var(--marigold)'}
                                        height="18px"
                                        width="18px"
                                        role="img" className="md hydrated" aria-label="logo facebook"
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <LogoPinterest
                                        color={'var(--marigold)'}
                                        height="18px"
                                        width="18px"
                                        role="img" className="md hydrated" aria-label="logo facebook"
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="#" className="social-link">
                                    <LogoLinkedin
                                        color={'var(--marigold)'}
                                        height="18px"
                                        width="18px"
                                        role="img" className="md hydrated" aria-label="logo facebook"
                                    />
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>
            </div>

            <div className={isActive ? 'header-bottom skewBg active' : 'header-bottom skewBg'}>
                <div className="container">

                    <a href="#" className="logo">i-Game</a>

                    <nav className={isClicked ? "navbar active" : "navbar"} >
                        <ul className="navbar-list">

                            <li className="navbar-item">
                                <a href="#home" className="navbar-link skewBg" data-nav-link="">Home</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#live" className="navbar-link skewBg" data-nav-link="">Live</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#features" className="navbar-link skewBg" data-nav-link="">Features</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#shop" className="navbar-link skewBg" data-nav-link="">Shop</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#blog" className="navbar-link skewBg" data-nav-link="">Blog</a>
                            </li>

                            <li className="navbar-item">
                                <a href="#" className="navbar-link skewBg" data-nav-link="">Contact</a>
                            </li>

                        </ul>
                    </nav>

                    <div className="header-actions">

                        <button className="cart-btn" aria-label="cart">
                            <CartSharp
                                color={'#ffffff'}
                                height="18px"
                                width="18px"
                                role="img" className="md hydrated" aria-label="cart"
                            />
                            <span className="cart-badge">0</span>
                        </button>

                        <button className="search-btn" aria-label="open search" onClick={toggleSearch}>
                            <SearchOutline
                                color={isSearchActive ? 'var(--marigold)' : '#ffffff'}
                                height="18px"
                                width="18px"
                                role="img" className="md hydrated" aria-label="search outline"
                            />
                        </button>

                        <button className="nav-toggle-btn" aria-label="toggle menu" onClick={toggleNav}>
                            {isClicked ? (
                                <CloseOutline
                                    color={'#ffffff'}
                                    height="30px"
                                    width="30px"
                                    role="img" className="close md hydrated" aria-label="menu outline" 
                                />
                            ) : (
                                <MenuOutline
                                    color={'#ffffff'}
                                    height="30px"
                                    width="30px"
                                    role="img" className="menu md hydrated" aria-label="menu outline"
                                />
                            )}
                        </button>

                    </div>

                </div>
            </div>

        </header>
    );
}

export default Navbar;
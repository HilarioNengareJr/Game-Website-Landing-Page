import React from "react";
import './Footer.css';
import { LogoFacebook, Headset, LogoLinkedin, Rocket, LogoPinterest, LogoTwitter, Location, MailOpen } from "react-ionicons";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-top">
                <div className="container">

                    <div className="footer-brand">

                        <a href="#" className="logo">i-Game</a>

                        <p className="footer-text">
                            i-Game marketplace the relase etras thats sheets continig passag.
                        </p>

                        <ul className="contact-list">

                            <li className="contact-item">
                                <div className="contact-icon">
                                    <Location
                                        color={'var(--roman-silver)'}
                                        height="16px"
                                        width="16px"
                                        role="img" className="md hydrated" aria-label="aria label"
                                    />
                                </div>

                                <address className="item-text">
                                    Address : PO Box W75 Street lan West
                                </address>
                            </li>

                            <li className="contact-item">
                                <div className="contact-icon">
                                    <Headset
                                        color={'var(--roman-silver)'}
                                        height="16px"
                                        width="16px"
                                        role="img" className="md hydrated" aria-label="aria label"
                                    />
                                </div>

                                <a href="tel:+241645654235" className="item-text">Phone : +90 533 850 2322</a>
                            </li>

                            <li className="contact-item">
                                <div className="contact-icon">
                                    <MailOpen
                                        color={'var(--roman-silver)'}
                                        height="16px"
                                        width="16px"
                                        role="img" className="md hydrated" aria-label="aria label"
                                    />
                                </div>

                                <a href="mailto:hnengare@gmail.com" className="item-text">Email : hnengare@gmail.com</a>
                            </li>

                        </ul>

                    </div>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Products</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Graphics (26)</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Backgrounds (11)</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Fonts (9)</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Music (3)</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Photography (3)</a>
                        </li>

                    </ul>

                    <ul className="footer-list">

                        <li>
                            <p className="footer-list-title">Need Help?</p>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Terms &amp; Conditions</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Privacy Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Refund Policy</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Affiliate</a>
                        </li>

                        <li>
                            <a href="#" className="footer-link">Use Cases</a>
                        </li>

                    </ul>

                    <div className="footer-wrapper">

                        <div className="social-wrapper">

                            <p className="footer-list-title">Follow Us</p>

                            <ul className="social-list">

                                <li>
                                    <a href="#" className="social-link" style={{ backgroundColor: "#3b5998" }}>
                                        <LogoFacebook
                                            color={'#ffffff'}
                                            height="16px"
                                            width="16px"
                                            role="img" className="md hydrated" aria-label="aria label"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link" style={{ backgroundColor: "#55acee" }}>
                                        <LogoTwitter
                                            color={'#ffffff'}
                                            height="16px"
                                            width="16px"
                                            role="img" className="md hydrated" aria-label="person outline"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link" style={{ backgroundColor: "#d71e18" }}>
                                        <LogoPinterest
                                            color={'#ffffff'}
                                            height="16px"
                                            width="16px"
                                            role="img" className="md hydrated" aria-label="logo pinterest"
                                        />
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link" style={{ backgroundColor: "#1565c0" }}>
                                        <LogoLinkedin
                                            color={'#ffffff'}
                                            height="16px"
                                            width="16px"
                                            role="img" className="md hydrated" aria-label="logo linkedin"
                                        />
                                    </a>
                                </li>

                            </ul>

                        </div>

                        <div className="footer-newsletter">

                            <p className="footer-list-title">Newsletter Sign Up</p>

                            <form action="" className="footer-newsletter">
                                <input type="email" name="email_address" aria-label="email" placeholder="Enter your email" required="" className="email-field" />

                                <button type="submit" className="footer-btn" aria-label="submit">
                                    <Rocket
                                        color={'#000000'}
                                        height="16px"
                                        width="16px"
                                        role="img" className="md hydrated" aria-label="logo linkedin"
                                    />
                                </button>
                            </form>

                        </div>

                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">

                    <p className="copyright">
                        © 2023 i-Game. All Right Reserved by <a href="#" className="copyright-link">Hilario Nengare Jr</a>
                    </p>

                    <img src="/images/footer-bottom-img.png" width="340" height="21" loading="lazy" alt="" className="footer-bottom-img" />

                </div>
            </div>

        </footer>
    );
}

export default Footer;
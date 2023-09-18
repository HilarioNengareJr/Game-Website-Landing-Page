import React from 'react';
import './Newsletter.css';
import { PaperPlane } from 'react-ionicons';

const Newsletter = () => {
    return (
        <section className="newsletter" aria-label="newsletter">
            <div className="container">

                <div className="newsletter-card">

                    <h2 className="h2">
                        Our <span className="span">Newsletter</span>
                    </h2>

                    <form action="" className="newsletter-form">

                        <div className="input-wrapper skewBg">
                            <input type="email" name="email_address" aria-label="email" placeholder="Enter your email..." required="" className="email-field" />
                        </div>

                        <button type="submit" className="btn newsletter-btn skewBg">
                            <span className="span">Subscribe</span>

                            <PaperPlane
                                color={'#000000'}
                                height="16px"
                                width="16px"
                                role="img" className="md hydrated" aria-label="aria label"
                            />
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}

export default Newsletter;
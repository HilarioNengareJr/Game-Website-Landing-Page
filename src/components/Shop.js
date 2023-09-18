import React, { useState } from 'react';
import './Shop.css';
import { Basket } from 'react-ionicons';

const Shop = () => {
  const [hoveredItems, setHoveredItems] = useState([]);

  const handleMouseEnter = (index) => {
    setHoveredItems([...hoveredItems, index]);
  }

  const handleMouseLeave = (index) => {
    setHoveredItems(hoveredItems.filter(itemIndex => itemIndex !== index));
  }

  return (
    <section className="section shop" id="shop" aria-label="shop" style={{ backgroundImage: 'url(/images/shop-bg.jpg)' }}>
      <div className="container">
        <h2 className="h2 section-title">
          Gaming Product <span className="span">Corner</span>
        </h2>
        <p className="section-text">
          Compete with 100 players on a remote island for winner takes showdown known issue where certain skin strategic
        </p>
        <ul className="has-scrollbar">
          {[1, 2, 3, 4].map(index => (
            <li className="scrollbar-item" key={index}>
              <div className="shop-card">
                <figure className="card-banner img-holder" width='300' height='260'>
                  <img src={`/images/shop-img-${index}.jpg`} width="300" height="260" loading="lazy" alt={`Product ${index}`} className="img-cover" />
                </figure>
                <div className="card-content">
                  <a href="#" className="card-badge skewBg">Category</a>
                  <h3 className="h3">
                    <a href="#" className="card-title">Product {index}</a>
                  </h3>
                  <div className="card-wrapper">
                    <p className="card-price">$29.00</p>
                    <button
                      className="card-btn"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      <Basket
                        color={hoveredItems.includes(index) ? 'black' : 'var(--marigold)'}
                        height="18px"
                        width="18px"
                        role="img"
                        className="md hydrated"
                        aria-label="basket"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Shop;

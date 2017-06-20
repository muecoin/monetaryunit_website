import React from 'react';

export default ({ title }) => (
  <div className="hero">
      <div className="hero__aside">
        <div className="hero__aside-image-container">
          <img className="hero__aside-image" src="assets/images/home/hero-mobiles-medium.png" />
        </div>
      </div>
      <div className="hero__lead">
        <div className="hero__lead-container">
          <h1 className="hero__lead-heading">Monetary Unit</h1>
          <h2 className="hero__lead-subheading">For Me, U and Everyone</h2>
          <p className="hero__lead-intro">MUE is a well established and respected brand with a mature ecosystem and progression driven by a dedicated foundation team.</p>
          <p className="hero__lead-intro">We aim to break away from the mould that cryptocurrency is only for tech-savvy people.</p>
          <ul className="hero__actions">
            <li className="hero__actions-why-mue">
              <a className="hero__actions-btn-why-mue" href="">Why choose MonetaryUnit?</a>
            </li>
            <li className="hero__actions-start-using">
              <a className="hero__actions-btn-start-using" href="">Start using MonetaryUnit today</a>
            </li>
          </ul>
        </div>
      </div>
  </div>
)

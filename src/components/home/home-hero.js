import React from 'react';
import Navigation from '../common/navigation';

export default () => (
  <div className="home-hero" data-fixed-nav-target>
    <Navigation />
    <section className="home-hero__container">
        <div className="home-hero__aside">
          <div className="home-hero__aside-image-container">
            <img className="home-hero__aside-image" src="assets/images/home/hero-mobiles-medium.png" />
          </div>
        </div>
        <div className="home-hero__lead">
          <div className="home-hero__lead-container">
            <h1 className="home-hero__lead-heading">Monetary Unit</h1>
            <h2 className="home-hero__lead-subheading">For Me, U and Everyone</h2>
            <p className="home-hero__lead-intro">MUE is a well established and respected brand with a mature ecosystem and progression driven by a dedicated foundation team.</p>
            <p className="home-hero__lead-intro">We aim to break away from the mould that cryptocurrency is only for tech-savvy people.</p>
            <ul className="home-hero__actions">
              <li className="home-hero__actions-why-mue">
                <a className="home-hero__actions-btn-why-mue" data-modal-target="why-buy-mue-video" href="">Why choose MonetaryUnit? <span className="home-hero__actions-btn-why-mue--play-icon"></span></a>
              </li>
              <li className="home-hero__actions-start-using">
                <a className="home-hero__actions-btn-start-using" href="" data-jump-to=".get-started">Start using MonetaryUnit today</a>
              </li>
            </ul>
          </div>
        </div>
    </section>
  </div>
)

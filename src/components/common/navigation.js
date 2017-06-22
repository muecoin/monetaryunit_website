import React from 'react';

export default () => (

  <header className="nav">
    <div className="nav__wrapper">
      <a className="nav__logo" id="logo-test" href="/">
        <img className="nav__logo-image" src="/assets/images/monetary-unit-white-logo.png" alt="Monetary Unit" />
      </a>
      <div className="nav__menu-button-slices" id="toggle">
        <span className="nav__menu-button-slice--top"></span>
        <span className="nav__menu-button-slice--middle"></span>
        <span className="nav__menu-button-slice--bottom"></span>
      </div>
      <div className="nav__overlay" id="overlay-wrapper">
        <nav className="nav__overlay-menu" id="overlay">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__link link--active" href="/">Home</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">About</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">Why MUE?</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">Get Started</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">Community</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">Foundation</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#">Shop</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

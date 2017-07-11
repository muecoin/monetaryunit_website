import React from 'react';

export default () => (

  <header className="nav">
    <div className="nav__wrapper">
      <a className="nav__logo" id="logo-test" href="/">
        <img className="nav__logo-image" src="/assets/images/monetary-unit-logo.svg" alt="Monetary Unit" />
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
              <a className="nav__link link--active" href="/" data-jump-to=".home-hero">Home</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="/#about" data-jump-to=".about">About</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="/#why-choose-mue" data-jump-to=".why-choose-mue">Why MUE?</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="/#get-started" data-jump-to=".get-started">Get Started</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="/#join-the-community" data-jump-to=".join-the-community">Community</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="https://monetaryunitfoundation.org/" target="_blank">Foundation</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="/frequently-asked-questions.html">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

import React from 'react';

export default () => (
  <header className="fixed-nav" data-fixed-nav>
    <div className="fixed-nav__wrapper">
      <a className="fixed-nav__logo" id="logo-test" href="/">
        <img className="fixed-nav__logo-image" src="/assets/images/monetary-unit-logo.svg" alt="Monetary Unit" />
      </a>
      <div className="fixed-nav__menu-button-slices" id="fixed-toggle">
        <span className="fixed-nav__menu-button-slice--top"></span>
        <span className="fixed-nav__menu-button-slice--middle"></span>
        <span className="fixed-nav__menu-button-slice--bottom"></span>
      </div>
      <div className="fixed-nav__overlay">
        <nav className="fixed-nav__overlay-menu">
          <ul className="fixed-nav__list">
            <li className="fixed-nav__list-item">
              <a className="fixed-nav__link link--active" href="/">Home</a>
            </li>
            <li className="fixed-nav__list-item">
              <a className="fixed-nav__link" href="/#about" data-jump-to=".about">About</a>
            </li>
            <li className="fixed-nav__list-item">
              <a className="fixed-nav__link" href="/#why-choose-mue" data-jump-to=".why-choose-mue">Why MUE?</a>
            </li>
            <li className="fixed-nav__list-item">
              <a className="fixed-nav__link" href="/#get-started" data-jump-to=".get-started">Get Started</a>
            </li>
            <li className="fixed-nav__list-item">
              <a className="fixed-nav__link" href="/#join-the-community" data-jump-to=".join-the-community">Community</a>
            </li>
            <li className="fixed-nav__list-item">
              <a className="fixed-nav__link" href="https://monetaryunitfoundation.org/" target="_blank">Foundation</a>
            </li>
            <li className="fixed-nav__list-item">
              <a className="fixed-nav__link" href="/frequently-asked-questions.html">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

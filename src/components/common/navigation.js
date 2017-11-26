import React from 'react';

export default ({ block = "nav", fixed = false }) => (
  <header className={block} data-fixed-nav={fixed}>
    <div className={`${block}__wrapper`}>
      <a className={`${block}__logo`} id="logo-test" href="/">
        <img className={`${block}__logo-image`} src="/assets/images/monetary-unit-logo.svg" alt="Monetary Unit" />
      </a>
      <div className={`${block}__menu-button-slices`} data-toggle>
        <span className={`${block}__menu-button-slice--top`}></span>
        <span className={`${block}__menu-button-slice--middle`}></span>
        <span className={`${block}__menu-button-slice--bottom`}></span>
      </div>
      <div className={`${block}__overlay`} data-overlay-wrapper>
        <nav className={`${block}__overlay-menu`} id="overlay">
          <ul className={`${block}__list`}>
            <li className={`${block}__list-item`}>
              <a className={`${block}__link link--active`} href="/" data-jump-to=".home-hero">Home</a>
            </li>
            <li className={`${block}__list-item`}>
              <a className={`${block}__link`} href="/#about" data-jump-to=".about">About</a>
            </li>
            <li className={`${block}__list-item`}>
              <a className={`${block}__link`} href="/#why-choose-mue" data-jump-to=".why-choose-mue">Why MUE?</a>
            </li>
            <li className={`${block}__list-item`}>
              <a className={`${block}__link`} href="/#get-started" data-jump-to=".get-started">Get Started</a>
            </li>
            <li className={`${block}__list-item`}>
              <a className={`${block}__link`} href="/#join-the-community" data-jump-to=".join-the-community">Community</a>
            </li>
            <li className={`${block}__list-item`}>
              <a className={`${block}__link`} href="/foundation.html" target="_blank">Foundation</a>
            </li>
	    <li className={`${block}__list-item`}>
              <a className={`${block}__link`} href="/directors.html" target="_blank">Directors</a>
            </li>
            <li className={`${block}__list-item`}>
              <a className={`${block}__link`} href="/frequently-asked-questions.html">FAQ</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

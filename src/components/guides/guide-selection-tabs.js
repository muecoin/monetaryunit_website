import React from 'react';

export default ({merchants = "", developers = "", consumers = "", investors = ""}) => (
  <nav className="guide-selection-tabs">
    <ul className="guide-selection-tabs__list">
      <li className="guide-selection-tabs__tab-container">
        <a className={`guide-selection-tabs__tab${investors}`} href="/investors-guide.html">For Investors</a>
      </li>
      <li className="guide-selection-tabs__tab-container">
        <a className={`guide-selection-tabs__tab${merchants}`} href="/merchants-guide.html">For Merchants</a>
      </li>
      <li className="guide-selection-tabs__tab-container">
        <a className={`guide-selection-tabs__tab${developers}`} href="/developers-guide.html">For Developers</a>
      </li>
      <li className="guide-selection-tabs__tab-container--developers">
        <a className={`guide-selection-tabs__tab${consumers}`} href="/consumers-guide.html">For Consumers</a>
      </li>
    </ul>
  </nav>
)

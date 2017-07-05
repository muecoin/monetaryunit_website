import React from 'react';

export default () => (
  <nav className="guide-selection-tabs">
    <ul className="guide-selection-tabs__list">
      <li className="guide-selection-tabs__tab-container">
        <a className="guide-selection-tabs__tab--active" href="">For Investors</a>
      </li>
      <li className="guide-selection-tabs__tab-container">
        <a className="guide-selection-tabs__tab" href="">For Merchants</a>
      </li>
      <li className="guide-selection-tabs__tab-container">
        <a className="guide-selection-tabs__tab" href="">For Developers</a>
      </li>
      <li className="guide-selection-tabs__tab-container--developers">
        <a className="guide-selection-tabs__tab" href="">For Consumers</a>
      </li>
    </ul>
  </nav>
)

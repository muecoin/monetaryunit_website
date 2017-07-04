import React from 'react';
import Navigation from '../common/navigation';

export default ({title, subheading, children }) => (
  <div className="hero">
    <Navigation />
    <section className="hero__container--tab-nav">
        <div className="hero__lead">
          <div className="hero__lead-container">
            <h1 className="hero__lead-heading">{title}</h1>
            <h2 className="hero__lead-subheading">{subheading}</h2>
            {children}
          </div>
        </div>
    </section>
  </div>
)

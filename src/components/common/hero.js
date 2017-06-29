import React from 'react';
import Navigation from '../common/navigation';

export default () => (
  <div className="hero">
    <Navigation />
    <section className="hero__container">
        <div className="hero__lead">
          <div className="hero__lead-container">
            <h1 className="hero__lead-heading">Monetary Unit</h1>
            <h2 className="hero__lead-subheading">Frequently Asked Questions</h2>
            <p className="hero__lead-intro">If you can’t find what you’re looking for let us know <a className="hero__feedback-link" href="#">here</a>.</p>
          </div>
        </div>
    </section>
  </div>
)

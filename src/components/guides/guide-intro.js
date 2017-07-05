import React from 'react';
import Navigation from '../common/navigation';

export default ({title, children }) => (

  <div className="guide-intro">
    <section className="guide-intro__container">
        <div className="guide-intro__intro">
          <div className="guide-intro__text-container">
            <h1 className="guide-intro__heading">{title}</h1>
            {children}
          </div>
        </div>
    </section>
  </div>
)

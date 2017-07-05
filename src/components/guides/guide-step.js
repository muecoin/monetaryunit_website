import React from 'react';

export default ({title, children, step, tipOne, tipTwo, imageUrl }) => (

  <div className={`guide-step--${step}`}>
    <section className="guide-step__container">
        <div className="guide-step__step-instruction">
          <div className="guide-step__heading-row">
            <h1 className={`guide-step__heading--${step}`}>{title}</h1>
          </div>
          {children}
        </div>
        <div className="guide-step__step-aside">
          <div className="guide-step__step-aside-image-container">
            <h3 className="guide-step__tip-top">{tipOne}</h3>
            <img src={imageUrl} className="guide-step__step-aside-image" />
            <h3 className="guide-step__tip-bottom">{tipTwo}</h3>
          </div>
        </div>
    </section>
  </div>
)

import React from 'react';

export default ({ containerThemeModifier = "", children }) => (
  <div className={`written-content${containerThemeModifier}`}>
    <section className="written-content__container">
      <div className="written-content__content">
        {children}
      </div>
    </section>
  </div>
)

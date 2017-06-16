import React from 'react';
import renderComponent from './components/render-component';

export default () => {
  return renderComponent(
    <div className="example">

      <div className="example__row">
        <div className="example__column">
          <div className="example__value">1/2</div>
        </div>
        <div className="example__column">
          <div className="example__value">1/2</div>
        </div>
      </div>

      <div className="example__row">
        <div className="example__column--half">
          <div className="example__value">1/3</div>
        </div>
        <div className="example__column">
          <div className="example__value">1/3</div>
        </div>
        <div className="example__column">
          <div className="example__value">1/3</div>
        </div>
        <div className="example__column">
          <div className="example__value">1/3</div>
        </div>
      </div>

    </div>
  );
}

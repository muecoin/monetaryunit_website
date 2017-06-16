import React from 'react';
import renderComponent from './components/render-component';

export default () => {
  return renderComponent(
    <div className="example3">

      <div className="example3__row">
        <div className="example3__column">
          <div className="example3__value">1/2</div>
        </div>
        <div className="example3__column">
          <div className="example3__value">1/2</div>
        </div>
      </div>

      <div className="example3__row">
        <div className="example3__column">
          <div className="example3__value">1/3</div>
        </div>
        <div className="example3__column">
          <div className="example3__value">1/3</div>
        </div>
        <div className="example3__column">
          <div className="example3__value">1/3</div>
        </div>
      </div>

    </div>
  );
}

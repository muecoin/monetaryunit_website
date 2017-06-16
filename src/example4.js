import React from 'react';
import renderComponent from './components/render-component';

export default () => {
  return renderComponent(
    <div className="example4">

      <div className="example4__container">
        <div className="example4__row">
          <div className="example4__column">
            <div className="example4__value">1/2</div>
          </div>
          <div className="example4__column">
            <div className="example4__value">1/2</div>
          </div>
        </div>
      </div>

      <div className="example4__container-row">
        <div className="example4__column">
          <div className="example4__value">1/3</div>
        </div>
        <div className="example4__column">
          <div className="example4__value">1/3</div>
        </div>
        <div className="example4__column">
          <div className="example4__value">1/3</div>
        </div>
      </div>

    </div>
  );
}

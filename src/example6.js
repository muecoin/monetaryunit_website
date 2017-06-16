import React from 'react';
import renderComponent from './components/render-component';

export default () => {
  return renderComponent(
    <div className="example6">
      <div className="example6__row">
        <div className="example6__column--1of3">
          <div className="example2__value">1/3</div>
        </div>
        <div className="example6__column">
          <div className="example6__row">
            <div className="example6__column">
              <div className="example2__value">1/4</div>
            </div>
            <div className="example6__column">
              <div className="example2__value">1/4</div>
            </div>
            <div className="example6__column">
              <div className="example2__value">1/4</div>
            </div>
            <div className="example6__column">
              <div className="example2__value">1/4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

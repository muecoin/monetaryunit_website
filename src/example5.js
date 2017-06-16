import React from 'react';
import renderComponent from './components/render-component';

export default () => {
  return renderComponent(
    <div className="example5">

      <div className="example5__container">
        <div className="example5__row">
          <div className="example5__column">
            <div className="example5__value">1/2</div>
          </div>
          <div className="example5__column">
            <div className="example5__value">1/2</div>
          </div>
        </div>
      </div>

      <div className="example5__container-row">
        <div className="example5__column">
          <div className="example5__value">1/3</div>
        </div>
        <div className="example5__column--center">
          <div className="example5__value">1/3</div>
        </div>
        <div className="example5__column">
          <div className="example5__value">1/3</div>
        </div>
      </div>

      <div className="example5__container">
        <div className="example5__row--center">
          <div className="example5__column">
            <div className="example5__value">1/3</div>
          </div>
          <div className="example5__column">
            <div className="example5__value">1/3</div>
          </div>
          <div className="example5__column">
            <div className="example5__value">1/3</div>
          </div>
        </div>
      </div>

      <div className="example5__container">
        <div className="example5__row--center">
          <div className="example5__column--1of4">
            <div className="example5__value">1/4</div>
          </div>
          <div className="example5__column--1of4">
            <div className="example5__value">1/4</div>
          </div>
        </div>
      </div>

    </div>
  );
}

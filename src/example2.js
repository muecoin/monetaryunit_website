import React from 'react';
import renderComponent from './components/render-component';

export default () => {
  return renderComponent(
    <div className="example2">
      <div className="example2__column">
        <div className="example2__value">1/2</div>
      </div>
      <div className="example2__column">
        <div className="example2__value">1/2</div>
      </div>
    </div>
  );
}

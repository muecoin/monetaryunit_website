import React from 'react';
import FixedNavigation from './common/fixed-navigation';
export default ({ children, className = 'layout' }) => (
  <div className={className}>
    <FixedNavigation />
    {children}
  </div>
)

import React from 'react';
import Navigation from './common/navigation';
export default ({ children, className = 'layout' }) => (
  <div className={className}>
    <Navigation block={"fixed-nav"} fixed />
    {children}
  </div>
)

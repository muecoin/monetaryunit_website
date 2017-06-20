import React from 'react';

export default ({ children, className = 'layout' }) => (
  <div className={className}>
    {children}
  </div>
)

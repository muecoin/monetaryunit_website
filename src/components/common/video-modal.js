import React from 'react';

export default () => (
<div className="video-modal--hidden">
  <div className="video-modal__modal">
    <span className="video-modal__close"></span>
    <div className="video-modal__embed-container">
      <iframe className="video-modal__embed-container-iframe" src="https://www.youtube.com/embed/4nw62tqWMgw" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>
)

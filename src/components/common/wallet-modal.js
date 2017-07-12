import React from 'react';

export default () => (
<div className="wallet-download-modal--hidden" data-modal data-modal-id="wallet-download">
  <span className="wallet-download-modal__close"></span>
  <div className="wallet-download-modal__modal">
    <h1 className="wallet-download-modal__heading">Download Your Wallet</h1>
    <div className="wallet-download-modal__wallet-container">
      <div className="wallet-download-modal__download-item">
        <a className="wallet-download-modal__btn--windows" href="">
          <div className="wallet-download-modal__platform-icon-wrapper">
            <span className="wallet-download-modal__platform-icon--windows"></span>
          </div>
          Windows X11 Wallet
          <span className="wallet-download-modal__btn-icon--download"></span>
        </a>
      </div>
      {/* <div className="wallet-download-modal__download-item">
        <a className="wallet-download-modal__btn--mac" href="">
          <div className="wallet-download-modal__platform-icon-wrapper">
            <span className="wallet-download-modal__platform-icon--mac"></span>
          </div>
          Mac X11 Wallet
          <span className="wallet-download-modal__btn-icon--download"></span>
        </a>
      </div>
      <div className="wallet-download-modal__download-item">
        <a className="wallet-download-modal__btn--android" href="">
          <div className="wallet-download-modal__platform-icon-wrapper">
            <span className="wallet-download-modal__platform-icon--android"></span>
          </div>
          Android X11 Wallet
          <span className="wallet-download-modal__btn-icon--download"></span>
        </a>
      </div>
      <div className="wallet-download-modal__download-item">
        <a className="wallet-download-modal__btn--ios" href="">
          <div className="wallet-download-modal__platform-icon-wrapper">
            <span className="wallet-download-modal__platform-icon--ios"></span>
          </div>
          iOS X11 Wallet
          <span className="wallet-download-modal__btn-icon--download"></span>
        </a>
      </div> */}
    </div>
  </div>
</div>
)

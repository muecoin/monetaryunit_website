import React from 'react';

export default ({title = "Get Started"}) => (
  <div className="get-started" data-hash-target="get-started">
    <section className="get-started__container">
      <h1 className="get-started__heading">{title}</h1>

      <div className="get-started__guides-list">

        <div className="get-started__guide-item">
          <div className="get-started__guide">
            <div className="get-started__guide-icon">
              <span className="get-started__guide-icon--investors"></span>
            </div>
            <h2 className="get-started__sub-heading">For Investors</h2>
            <a className="get-started__find-out-more-btn" href="/investors-guide.html" target="_self">Find out more</a>
            <p className="get-started__description">MUE has shown consistent growth since launch in July 2014. Can you miss out on the opportunity for a sound and reliable investment?</p>
          </div>
        </div>

        <div className="get-started__guide-item">
          <div className="get-started__guide">
            <div className="get-started__guide-icon">
              <span className="get-started__guide-icon--consumers"></span>
            </div>
            <h2 className="get-started__sub-heading">For Consumers</h2>
            <a className="get-started__find-out-more-btn" href="/consumers-guide.html" target="_self">Find out more</a>
            <p className="get-started__description">Buying and spending with MUE is easier than you think. Download a wallet and find retailers and other spending touch points here.</p>
          </div>
        </div>

        <div className="get-started__guide-item">
          <div className="get-started__guide">
            <div className="get-started__guide-icon">
              <span className="get-started__guide-icon--merchants"></span>
            </div>
            <h2 className="get-started__sub-heading">For Merchants</h2>
            <a className="get-started__find-out-more-btn" href="/merchants-guide.html" target="_self">Find out more</a>
            <p className="get-started__description">Enhance your ecommerce solution by allowing customers to pay using MUE currency payments. Let us show you how.</p>
          </div>
        </div>

        <div className="get-started__guide-item">
          <div className="get-started__guide">
            <div className="get-started__guide-icon">
              <span className="get-started__guide-icon--developers"></span>
            </div>
            <h2 className="get-started__sub-heading">For Developers</h2>
            <a className="get-started__find-out-more-btn" href="/developers-guide.html" target="_self">Find out more</a>
            <p className="get-started__description">For the tech savvy amongst you to start making your own MUE we can show you the coin specs and get you going.</p>
          </div>
        </div>

      </div>

      <div className="get-started__wallet-cta-container">
        <a className="get-started__wallet-download" data-modal-target="wallet-download" href="">Download wallet now<span className="get-started__download-icon--download"></span></a>
      </div>
    </section>
  </div>
)

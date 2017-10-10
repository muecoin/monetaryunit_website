import React from 'react';

export default ({title = "Further Reading"}) => (
  <div className="further-reading" id="further-reading">
    <section className="further-reading__container">
      <h1 className="further-reading__heading">{title}</h1>

      <div className="further-reading__posts-list">

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            {/* <div className="further-reading__post-logo">
              <img className="further-reading__post-logo-image" src="/assets/images/common/interviews-news/logos/investitin-logo.png" alt="Investitin Article, Part 1" />
            </div> */}
            <h2 className="further-reading__sub-heading">The MUE Advantage</h2>
            <a className="further-reading__learn-more-btn" href="#" target="_self">Learn more</a>
            <p className="further-reading__description">Short summary of what this is about.</p>
          </div>
        </div>

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            {/* <div className="further-reading__post-logo">
              <img className="further-reading__post-logo-image" src="/assets/images/common/interviews-news/logos/cryptolix-logo.png" alt="Cryptolix Article" />
            </div> */}
            <h2 className="further-reading__sub-heading">MasterNode ROI</h2>
            <a className="further-reading__learn-more-btn" href="" target="_self">Learn more</a>
            <p className="further-reading__description">Short summary of what this is about.</p>
          </div>
        </div>

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            {/* <div className="further-reading__post-logo">
              <img className="further-reading__post-logo-image" src="/assets/images/common/interviews-news/logos/investitin-logo.png" alt="Investitin Article, Part 2" />
            </div> */}
            <h2 className="further-reading__sub-heading">MUE inflation rate</h2>
            <a className="further-reading__learn-more-btn" href="" target="_self">Learn more</a>
            <p className="further-reading__description">Short summary of what this is about.</p>
          </div>
        </div>

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            {/* <div className="further-reading__post-logo">
              <img className="further-reading__post-logo-image" src="/assets/images/common/interviews-news/logos/core-media-logo.png" alt="Core Media Article" />
            </div> */}
            <h2 className="further-reading__sub-heading">The MUE vision</h2>
            <a className="further-reading__learn-more-btn" href="" target="_self">Learn more</a>
            <p className="further-reading__description">Short summary of what this is about.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

import React from 'react';

export default ({title = "Press Articles & Interviews"}) => (
  <div className="press-articles" id="press-articles">
    <section className="press-articles__container">
      <h1 className="press-articles__heading">{title}</h1>

      <div className="press-articles__articles-list">

        <div className="press-articles__article-item">
          <div className="press-articles__article">
            <div className="press-articles__article-logo">
              <img className="press-articles__article-logo-image" src="/assets/images/common/interviews-news/logos/investitin-logo.png" alt="Investitin Article, Part 1" />
            </div>
            <h2 className="press-articles__sub-heading">Investitin</h2>
            <a className="press-articles__visit-btn" href="https://www.investitin.com/mue-secure-fast-near-instant-transactions-self-sustainable-cryptocurrency-project-long-term-goals/" target="_blank">Visit</a>
            <p className="press-articles__description">Short summary of what this is about.</p>
          </div>
        </div>

        <div className="press-articles__article-item">
          <div className="press-articles__article">
            <div className="press-articles__article-logo">
              <img className="press-articles__article-logo-image" src="/assets/images/common/interviews-news/logos/cryptolix-logo.png" alt="Cryptolix Article" />
            </div>
            <h2 className="press-articles__sub-heading">Cryptolix</h2>
            <a className="press-articles__visit-btn" href="http://cryptolix.com/excitement-continues-to-build-for-monetary-unit-mue-an-overview/" target="_blank">Visit</a>
            <p className="press-articles__description">Short summary of what this is about.</p>
          </div>
        </div>

        <div className="press-articles__article-item">
          <div className="press-articles__article">
            <div className="press-articles__article-logo">
              <img className="press-articles__article-logo-image" src="/assets/images/common/interviews-news/logos/investitin-logo.png" alt="Investitin Article, Part 2" />
            </div>
            <h2 className="press-articles__sub-heading">Investitin - Part 2</h2>
            <a className="press-articles__visit-btn" href="https://www.investitin.com/monetary-unit/" target="_blank">Visit</a>
            <p className="press-articles__description">Short summary of what this is about.</p>
          </div>
        </div>

        <div className="press-articles__article-item">
          <div className="press-articles__article">
            <div className="press-articles__article-logo">
              <img className="press-articles__article-logo-image" src="/assets/images/common/interviews-news/logos/core-media-logo.png" alt="Core Media Article" />
            </div>
            <h2 className="press-articles__sub-heading">Crypto Core Radio</h2>
            <a className="press-articles__visit-btn" href="https://soundcloud.com/coremediaradio/munit" target="_blank">Visit</a>
            <p className="press-articles__description">Interview with Core Media Radio.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
)

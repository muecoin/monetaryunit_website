import React from 'react';

export default ({title = "Further Reading"}) => (
  <div className="further-reading" id="further-reading">
    <section className="further-reading__container">
      <h1 className="further-reading__heading">{title}</h1>

      <div className="further-reading__posts-list">

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            <h2 className="further-reading__sub-heading">The MUE Advantage</h2>
            <a className="further-reading__learn-more-btn" href="/the-mue-advantage.html" target="_self">Learn more</a>
          </div>
        </div>

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            <h2 className="further-reading__sub-heading">MasterNode ROI</h2>
            <a className="further-reading__learn-more-btn" href="https://docs.google.com/spreadsheets/d/14AVDtxfYAnIVtzbCSONO5MBQ948eVCcGChUcmpPBGWA/edit?ts=59d252d6#gid=2002781196" target="_blank">Learn more</a>
          </div>
        </div>

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            <h2 className="further-reading__sub-heading">MUE inflation rate</h2>
            <a className="further-reading__learn-more-btn" href="#" target="_self">Learn more</a>
          </div>
        </div>

        <div className="further-reading__post-item">
          <div className="further-reading__post">
            <h2 className="further-reading__sub-heading">The MUE vision</h2>
            <a className="further-reading__learn-more-btn" href="/the-mue-vision.html" target="_self">Learn more</a>
          </div>
        </div>
      </div>
    </section>
  </div>
)

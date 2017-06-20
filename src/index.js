import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';
import Hero from './components/home/hero';
import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
      <div className="layout__hero">
        {/*<Navigation />*/}
        <Hero />
      </div>
      {/*<div className="layout__about">
        <About />
      </div>*/}
    </Layout>
  );
}

import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import Hero from './components/common/hero';
import GetStarted from './components/home/get-started';
import GuideSelectionTabs from './components/guides/guide-selection-tabs';

import WalletModal from './components/common/wallet-modal';
import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <WalletModal />
        <Hero title="Monetary Unit" subheading="Getting Started Guides">
          <p className="hero__lead-intro">A series of short guides to help you get the most out of our digitial currency.<br/>If you can’t find what you’re looking for let us know <a className="hero__feedback-link" href="#">here</a>.</p>
          <GuideSelectionTabs />
        </Hero>
        <GetStarted />
        <Footer />
    </Layout>
  );
}

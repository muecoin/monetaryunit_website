import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import Hero from './components/common/hero';
import GetStarted from './components/home/get-started';

import FaqAccordianMenu from './components/faq/faq-accordian-menu';
import WalletModal from './components/common/wallet-modal';
import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <WalletModal />
        <Hero title="Monetary Units" subheading="Frequently Asked Questions">
          <p className="hero__lead-intro">If you can’t find what you’re looking for let us know <a className="hero__feedback-link" href="#">here</a>.</p>
        </Hero>
        <FaqAccordianMenu />
        <GetStarted />
        <Footer />
    </Layout>
  );
}

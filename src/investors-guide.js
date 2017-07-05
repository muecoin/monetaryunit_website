import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import Hero from './components/common/hero';
import GetStarted from './components/home/get-started';
import GuideSelectionTabs from './components/guides/guide-selection-tabs';


import WalletModal from './components/common/wallet-modal';
import Footer from './components/common/footer';
import GuideIntro from './components/guides/guide-intro';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <WalletModal />
        <Hero title="Monetary Unit" subheading="Getting Started Guides" containerClassName="hero__container--tab-nav">
          <p className="hero__lead-intro">A series of short guides to help you get the most out of our digital currency.</p>
          <GuideSelectionTabs />
        </Hero>
        <GuideIntro title="Buying your first MUE">
          <p className="guide-intro__paragraph">If you’re new to digital currencies or don’t own any yet, the easiest route to buying MUE is through an exchange website such as Bittylicious. Their website allows to you purchase digital currencies with pounds. Once you have your wallet setup and have verified your account with them, it’s a fast and simple process.</p>
          <p className="guide-intro__paragraph">We currently recommend <a className="guide-intro__paragraph-link" href="http://www.bittylicious.com" target="_blank">Bittylicious</a> for their excellent feedback on trustadvisor.</p>

      </GuideIntro>
        <GetStarted />
        <Footer />
    </Layout>
  );
}

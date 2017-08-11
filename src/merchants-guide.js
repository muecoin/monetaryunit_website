import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import Hero from './components/common/hero';
import GetStarted from './components/home/get-started';
import GuideSelectionTabs from './components/guides/guide-selection-tabs';
import GuideIntro from './components/guides/guide-intro';
import JoinTheCommunity from './components/common/join-the-community';

import WalletModal from './components/common/wallet-modal';
import Footer from './components/common/footer';


export default () => {
  return renderComponent(
    <Layout className="layout">
        <WalletModal />

        <Hero title="Monetary Unit" subheading="Getting Started Guides" containerClassName="hero__container--tab-nav">
          <p className="hero__lead-intro">A series of short guides to help you get the most out of our digital currency.</p>
          <GuideSelectionTabs merchants="--active"/>
        </Hero>

        <GuideIntro title="For Merchants">
          <p className="guide-intro__paragraph">Resources for integrating Monetary Unit payments into your website:</p>
          <p className="guide-intro__paragraph">
            <a className="guide-intro__paragraph-link" href="https://gourl.io/monetaryunit-payment-gateway-api.html" target="_blank">Monetaryunit Payment PHP API Examples</a>
            <br/>
            <a className="guide-intro__paragraph-link" href="https://www.coinpayments.net/merchant-tools" target="_blank">CoinPayments Merchant Tools</a>
          </p>
        </GuideIntro>

        <GetStarted title="Discover More" />

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

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
          <GuideSelectionTabs investors="--active" />
        </Hero>

        <GuideIntro title="For Investors">
          <p className="guide-intro__paragraph">Monetary Unit has proven to be an excellent investment opportunity since our launch in 2014.<br/>See here the <a className="guide-intro__paragraph-link" href="https://coinmarketcap.com/currencies/monetaryunit/#charts" target="_blank">market price over the last year.</a></p>
          <p className="guide-intro__paragraph">And here are our <a className="guide-intro__paragraph-link" href="https://docs.google.com/spreadsheets/d/14AVDtxfYAnIVtzbCSONO5MBQ948eVCcGChUcmpPBGWA/edit#gid=0" target="_blank">ROI projections for MasterNodes</a> for the next 3 years.</p>
        </GuideIntro>

        <GetStarted title="Discover More" />

        <JoinTheCommunity title="Was this guide helpful?" description="If this guide needs improving or you would like assistance with something else, let us know. Keep in touch with all the news and chat to the team via our social channels, communication tools and open source developer networks." />

        <Footer />
    </Layout>
  );
}

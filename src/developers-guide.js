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
          <GuideSelectionTabs developers="--active"/>
        </Hero>

        <GuideIntro title="For Developers">
          <p className="guide-intro__paragraph">All code and commits are accessible with Github. Please go here for further information <a className="guide-intro__paragraph-link" href="https://github.com/muecoin" target="_blank">github.com/muecoin</a>.</p>
        </GuideIntro>

        <GetStarted title="Discover More" />

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

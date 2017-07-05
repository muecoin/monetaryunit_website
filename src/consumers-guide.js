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
          <GuideSelectionTabs consumers="--active"/>
        </Hero>

        <GuideIntro title="Coming soon">
          <p className="guide-intro__paragraph">We're working on lots of useful guides at the moment, please bare with us and pop back soon.</p>
          <p className="guide-intro__paragraph">In the meantime, the quickest way to reach us is via our helpful and very welcoming <a className="guide-intro__paragraph-link" href="https://mueslack.herokuapp.com/" target="_blank">Slack Channel</a>.</p>
        </GuideIntro>

        <GetStarted title="Discover More" />

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

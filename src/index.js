import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import HomeHero from './components/home/home-hero';
import About from './components/home/about';
import WhyChooseMue from './components/home/why-choose-mue';
import GetStarted from './components/home/get-started';
import JoinTheCommunity from './components/common/join-the-community';

import VideoModal from './components/common/video-modal';
import WalletModal from './components/common/wallet-modal';
import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <WalletModal />
        <VideoModal />
        <HomeHero />
        <About />
        <WhyChooseMue />
        <GetStarted />
        <JoinTheCommunity />
        <Footer />
    </Layout>
  );
}

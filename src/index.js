import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import Hero from './components/home/hero';
import About from './components/home/about';
import WhyChooseMue from './components/home/why-choose-mue';
import GetStarted from './components/home/get-started';
import JoinTheCommunity from './components/home/join-the-community';

import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <Hero />
        <About />
        <WhyChooseMue />
        <GetStarted />
        <JoinTheCommunity />>
        <Footer />
    </Layout>
  );
}

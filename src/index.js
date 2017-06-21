import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import Hero from './components/home/hero';
import About from './components/home/about';
import WhyChooseMue from './components/home/why-choose-mue';
import GetStarted from './components/home/get-started';
import JoinTheCommunity from './components/home/join-the-community';

import Footer from './components/common/footer';
import Navigation from './components/common/navigation';

export default () => {
  return renderComponent(
    <Layout className="layout">
      <div className="layout__hero">
        <Navigation />
        <Hero />
      </div>
      <div className="layout__about">
        <About />
      </div>
      <div className="layout__why-choose-mue">
        <WhyChooseMue />
      </div>
      <div className="layout__get-started">
        <GetStarted />
      </div>
      <div className="layout__join-the-community">
        <JoinTheCommunity />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </Layout>
  );
}

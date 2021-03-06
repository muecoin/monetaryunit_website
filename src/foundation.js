import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';
import Hero from './components/common/hero';
import WrittenContent from './components/common/written-content';
import JoinTheCommunity from './components/common/join-the-community';
import PressArticles from './components/common/foundation';
import FurtherReading from './components/common/further-reading';
import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <Hero title="MonetaryUnit Foundation" subheading="The MonetaryUnit Foundation was set up to help guide and support the sustained growth of the MonetaryUnit (MUE) cryptocurrency and surrounding ecosystem." containerClassName="hero__container">
        </Hero>

        <PressArticles />

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

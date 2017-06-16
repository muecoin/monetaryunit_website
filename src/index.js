import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';
import Header from './components/header';
import Footer from './components/footer';
import GetStarted from './components/get-started';

export default () => {
  return renderComponent(
    <Layout className="layout">
      <Header title="Header" />
      <GetStarted title="Get started"  />
      <Footer title="Header" />
    </Layout>
  );
}

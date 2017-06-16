import React from 'react';
import renderComponent from './components/render-component';

import Wrapper from './components/wrapper';
import Hero from './components/home/hero';
import Footer from './components/common/footer';
import GetStarted from './components/home/get-started';

export default () => {
  return renderComponent(
    <Wrapper>
      <Hero />
      <Footer title="Footer" />
    </Wrapper>
  );
}

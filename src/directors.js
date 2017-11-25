import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';
import Hero from './components/common/hero';
import WrittenContent from './components/common/written-content';
import JoinTheCommunity from './components/common/join-the-community';
import PressArticles from './components/common/press-articles';
import FurtherReading from './components/common/further-reading';
import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <Hero title="Board of Directors" containerClassName="hero__container">
<WrittenContent>
<ul>
            <li>Director of operations & software architecture - Bbobb</li>
<li>Director of hardware R&D - Mike.N</li>
<li>Director of value added services - Pjcltd</li>
<li>Director of european business development (excl. UK) - Johans</li>
<li>Director of Finance - Notsofast</li>
<li>Director of project controls - C4</li>
<li>Director of International Business development (inc. UK)/Founder - Bizzyb</li>
          </ul>
</WrittenContent>
        </Hero>

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

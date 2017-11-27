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
            <Hero title="Board of Directors" subheading="The board of directors are the driving force behind the commercial success of MUE and the surrounding ecosystem.  Experienced self starters, investors and experts in their fields, they will bring to bear their formidable skills to ensure the long term success of MonetaryUnit" containerClassName="hero__container">
                <WrittenContent>
                    <ul>
                        <li>Founder / Director of International Business Development (inc. UK)- Bizzyb</li>
                        <li>Director of European Business Development (excl. UK) - Johans</li>
                        <li>Director of Project Controls - C4</li>
                        <li>Director of Finance - Notsofast</li>
                        <li>Director of Value Added Services - Pjcltd</li>
                        <li>Director of Hardware R&D - Mike.N</li>
                        <li>Director of Operations & Software Architecture - BBoBB</li>
                    </ul>
                </WrittenContent>
            </Hero>

            <JoinTheCommunity/>

            <Footer/>
        </Layout>
    );
}

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
        <Hero title="Why MUE?" subheading="What makes MUE different from your average crypto currency?" containerClassName="hero__container">
          <p className="hero__lead-intro">Here is an overview of the project and a breakdown of what MUE is all about.</p>
        </Hero>

        <WrittenContent containerThemeModifier="--color-theme--2">

          <ul>
            <li>Instant &amp; private transactions</li>
            <li>Self funding</li>
            <li>Decentralised governance allows stakeholders to vote democratically</li>
            <li>Efficient mining hardware can be used</li>
            <li>No ignored or delayed transactions</li>
            <li><a href="/foundation.html" target="_blank">Foundation team</a></li>
            <li>Development team of 15+</li>
            <li>Well established, launched July 2014</li>
            <li>Consistently growing price &amp; network security</li>
            <li>Road map &amp; <a href="https://tree.taiga.io/project/monetaryunit-monetaryunit/" target="_blank">objectives</a></li>
            <li>Development budget</li>
            <li>Committed team</li>
            <li>Commercial arms &amp; affiliates
              <ol>
                <li>
                  <a href="https://www.muex.io/" target="_blank">www.MUEX.io</a>
                </li>
                <li>
                  <a href="https://www.startmy.io/" target="_blank">www.StartMy.io</a>
                </li>
                <li>
                  <a href="https://www.muegs.io/" target="_blank">www.MUEgs.com</a>
                </li>
              </ol>
            </li>
            <li>Growing portfolio of apps &amp; services</li>
            <li>Long term low inflation rate ~3% promotes use</li>
            <li>Utility focused - MUE can be used to purchase goods &amp; services</li>
            <li>Great support from a friendly community</li>
          </ul>

        </WrittenContent>

        <PressArticles />

        <FurtherReading />

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

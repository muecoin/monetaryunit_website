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
        <Hero title="The MUE Vision" subheading="Brief description here please tom if possible" containerClassName="hero__container">
          <p className="hero__lead-intro">Or here too/instead if you wanted to write something a bit longer.</p>
        </Hero>

        <WrittenContent containerThemeModifier="--color-theme--2">

          <ul>
            <li>Offering benefit to crypto as a whole whilst targeting MUE specifically.</li>
            <li>Building a network of mutually beneficial services & apps with underlying loyalty schemes to retain users.</li>
            <li>Focusing on creating value added innovative services to attract & retain new users to MUE.</li>
          </ul>

          <p>BizzyB aka ByronB, launched MonetaryUnit over 3 years ago, initially sat on my own, at my desk, CPU mining.</p>
          <p>How things have changed.</p>
          <p>You can get more insight as to why MUE was launched here:</p>

        </WrittenContent>

        <PressArticles />

        <WrittenContent>

          <p>The project now has a great team of people and a great, growing community.</p>
          <h2>We have:</h2>

          <ul>
            <li>Over 1000 people registered in Slack</li>
            <li>Over 7000 Twitter followers</li>
            <li>177 page ANN thread on BitcoinTalk</li>
            <li>2000+ GH of X11 mining hashrate</li>
            <li>135 MasterNodes spread over 9 countries</li>
            <li>$20,000,000 + Market Cap</li>
            <li>Up to $2,000,000 of daily trading volume</li>
            <li>13+ developers</li>
            <li>Several world firsts for crypto
              <ol>
                <li>
                  First multi-crypto crowdfunding website<br/><a href="https://www.startmy.io/" target="_blank">www.StartMy.io</a>
                </li>
                <li>
                  Worlds first instantly activated MasterNode shares service<br/><a href="http://mymue.com/" target="_blank">MyMue.com</a>
                </li>
                <li>
                  Worlds first multi-crypto forex trading<br/><a href="https://muex.io/forex" target="_blank">www.Muex.io/forex</a>
                </li>
                <li>
                  Worlds first auto-detect wallet nodes<br/><a href="https://muex.io/Nodes" target="_blank">Muex.io/nodes</a>
                </li>
              </ol>
            </li>
          </ul>

          <p>When I read back over, it blows me away, but it is only the start for what my vision for MUE is.</p>
          <p>Where we are right now is a fantastic platform to build from. We will soon activate the budget &amp; governance system & this will bring in around $50,000 per month to fund the project with democratically approved proposals. Read that again. That is $600,000 per year!</p>
          <p>Now picture what that sort of investment, when well allocated, will bring to the project.</p>
          <p>How does this all tie into the "vision"?</p>

          <h2>MUE, Me, U, Everyone.</h2>

          <p>MUE can help itself grow, whilst also helping the individual and also all those around it.</p>
          <p>When we look at a new service offering we think to ourselves "How can we make this benefit other crypto users whilst also offering a premium service to MonetaryUnit holders".</p>
          <p>The crypto space is fiercely competitive, but rather than fight it, we want to embrace it and we want to attract as wide an audience as possible, as often as we can with every service.</p>
          <p>A big part of the vision is bringing benefit to crypto as a whole, and where possible we will do this.</p>
          <p>Real world use is the driving force.</p>
          <p>As a team, we make sure the technology underlying our wallet & network code is robust.</p>
          <p>We do not however, plan to make that our USP (Unique Selling Point).</p>
          <p>Whilst stable & resilient wallets & networks are imperative, our public focus is in creating "must have" services that mutually benefit each other, &amp; create a wide portfolio that is extremely attractive to the existing, but also new users.</p>
          <p>This portfolio will eventually have an underlying loyalty scheme, most likely "Go Shopping" points aka GSpoints. These will be accumulated when buying and using our services, and can then be redeemed for discounts or perks across our network &amp; even bought as physical "cards".</p>

          <h2>Retention through innovation</h2>

          <p>By creating services that can be used by many crypto communities we broaden our market.</p>
          <p>By offering loyalty schemes and not confusing the end user with technology, we reduce barriers to entry.</p>
          <p>We then have to offer interesting &amp; exciting services to both attract new users, but also retain those new users and the existing community base.</p>
          <p>Even with the best marketing team in the world, we would not be able to retain users if we have nothing to offer them.</p>
          <p>So that is what we do. We see what gaps are in the market, and try where possible to fill those gaps, and soon, with the budget available to us, we will be able to ramp up every aspect of what we do.</p>
          <p>As a team we are dedicated to making MUE the best we can, whilst also being a role model for others to follow in how to be a good crypto citizen.</p>
        </WrittenContent>

        <FurtherReading />

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

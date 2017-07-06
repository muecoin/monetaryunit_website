import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';

import Hero from './components/common/hero';
import GetStarted from './components/home/get-started';
import GuideSelectionTabs from './components/guides/guide-selection-tabs';
import GuideStep from './components/guides/guide-step';
import GuideIntro from './components/guides/guide-intro';
import JoinTheCommunity from './components/common/join-the-community';

import WalletModal from './components/common/wallet-modal';
import Footer from './components/common/footer';


export default () => {
  return renderComponent(
    <Layout className="layout">
        <WalletModal />

        <Hero title="Monetary Unit" subheading="Getting Started Guides" containerClassName="hero__container--tab-nav">
          <p className="hero__lead-intro">A series of short guides to help you get the most out of our digital currency.</p>
          <GuideSelectionTabs investors="--active" />
        </Hero>

        <GuideIntro title="Buying your first MUE">
          <p className="guide-intro__paragraph">If you’re new to digital currencies or don’t own any yet, the easiest route to buying MUE is through an exchange website such as Bittylicious. Their website allows to you purchase digital currencies with pounds. Once you have your wallet setup and have verified your account with them, it’s a fast and simple process.</p>
          <p className="guide-intro__paragraph">We currently recommend <a className="guide-intro__paragraph-link" href="http://www.bittylicious.com" target="_blank">Bittylicious</a> for their excellent feedback on <a className="guide-intro__paragraph-link" href="https://uk.trustpilot.com/review/www.bittylicious.com" target="_blank">Trustpilot</a>.</p>
        </GuideIntro>

        <GuideStep
          step="1"
          title="Download your wallet"
          tipOne="The first time you load your wallet, it may take a while to sync. Don’t worry, it only happens once!"
          tipTwo="Your could also use our secure online wallet webwallets.io"
          imageUrl="assets/images/guides/investors/buying-mue/step-1.png">
            <p className="guide-step__paragraph">Wallets store your digital currencies. Just install them on your preferred device and wait for them to sync up with the network. You could also choose to use one of our secure online at <a className="guide-intro__paragraph-link" href="http://www.webwallets.io/" target="_blank">webwallets.io</a></p>
            <p className="guide-step__paragraph">If you haven’t already set up your wallet, use the button below to crack on.</p>
            <a className="guide-step__wallet-download" data-modal-target="wallet-download" href="">Download wallet now<span className="get-started__download-icon--download"></span></a>
        </GuideStep>

        <GuideStep
          step="2"
          title="Get verified on Bittylicious"
          tipOne="You can still make anonymous purchases but the amount you can buy is severely reduced without verification."
          tipTwo="Once you’ve submitted your documents, you should hear back shortly."
          imageUrl="assets/images/guides/investors/buying-mue/step-2.png">
            <p className="guide-step__paragraph">
              <a className="guide-step__paragraph-link" href="http://www.bittylicious.com" target="_blank">Bittylicious</a> is a great option to quicky purchase MUE.</p>
            <p className="guide-step__paragraph">So head on over there, register an account, verify your email address and then log in and visit your profile.</p>
            <p className="guide-step__paragraph">For higher transaction amounts you’ll need to enter your information to pass a few security checks. This will involve uploading identity documents. For more assistance, visit their helpful <a className="guide-step__paragraph-link" href="https://help.bittylicious.com/index.php/Main_Page" target="_blank">wiki</a>.</p>
        </GuideStep>

        <GuideStep
          step="3"
          title="Find your receiving address"
          tipOne=""
          tipTwo=""
          imageUrl="assets/images/guides/investors/buying-mue/step-1.png">
            <p className="guide-step__paragraph">Your wallets address allows you to receive transactions from elsewhere and is what you’ll use to send Monetary Unit to yourself from Bittylicious.</p>
            <p className="guide-step__paragraph">In the desktop wallet this can be found under:</p>
            <p className="guide-step__paragraph"><b>File > Receiving Addresses</b></p>
            <p className="guide-step__paragraph">Copy your wallet address <b>carefully!</b></p>
        </GuideStep>

        <GuideStep
          step="4"
          title="Order your MUE"
          tipOne="Always double check your address has been copied correctly into Bittylicious!"
          tipTwo="You’ll be notified of the progress of the transaction and should receive your payment within minutes."
          imageUrl="assets/images/guides/investors/buying-mue/step-4.png">
            <p className="guide-step__paragraph">Go to the Bittylicious homepage and make you’re logged in and verified.</p>
            <p className="guide-step__paragraph">Select ‘buy’, enter your amount and most importantly ensure you choose Monetary Unit from the currency dropdown.</p>
            <p className="guide-step__paragraph">When ready, select ‘get some coins’ and enter your payment details. Job done!</p>
        </GuideStep>

        <JoinTheCommunity title="Was this guide helpful?" description="If this guide needs improving or you would like assistance with something else, let us know. Keep in touch with all the news and chat to the team via our social channels, communication tools and open source developer networks." />

        <GetStarted title="Discover More" />

        <Footer />
    </Layout>
  );
}

import React from 'react';
import renderComponent from './components/render-component';

import Layout from './components/layout';
import Hero from './components/common/hero';
import WrittenContent from './components/common/written-content';
import JoinTheCommunity from './components/common/join-the-community';
import FurtherReading from './components/common/further-reading';
import Footer from './components/common/footer';

export default () => {
  return renderComponent(
    <Layout className="layout">
        <Hero title="The MUE advantage" subheading="" containerClassName="hero__container">
          <p className="hero__lead-intro">What is the MonetaryUnit advantage, and why should you be using it instead of one of the many hundreds of other cryptocurrencies?</p>
        </Hero>
        <WrittenContent>
          <h2>Well, firstly it works!</h2>

          <p>We did a straw poll recently and chose 5 random crypto projects with a market cap between 2-5 X the MUE market cap. So these aren't "hobby projects", they are quite serious net worth projects.</p>
          <p>Out of those 5 projects, only <b>ONE</b> had no issues with installing the software wallets.</p>
          <p>The MUE wallets all work. We have multiple versions, Windows 32 & 64 bit, OSX, Android &amp; web.</p>

          <h2>We're established</h2>

          <p>We launched 27th July 2014. The MonetaryUnit reputation and brand has been well established. The project is respected and trusted within the crypto community and has not been accused of any wrong doing of any kind.</p>

          <h2>MUE can be used!</h2>

          <p>As a project team, we ask ourselves often, what is our main goal?</p>
          <p>Our main goal is that MonetaryUnit can be used to buy every day goods and services.</p>
          <p>Right now, MUE can be used with many many dozens of merchants &amp; retailers, and that list is growing by the day. Use MUE right now for web hosting to cooking sauces.</p>

          <h2>Preferential pricing</h2>

          <p>Discounts for purchasing goods or services using MUE is an important goal for us.</p>
          <p>For example when using www.MUEX.io you will find the majority of services &amp; apps within MUEX allow MUE users to obtain bigger discounts or better bonuses.</p>

          <h2>Secure</h2>

          <p>MonetaryUnit has been secured computationally using two different layers.</p>
          <p>The first layer is the mining layer. Many computers all working together to confirm all transactions processed within the MUE network are valid and honest.</p>
          <p>The second layer is the MasterNode network. These check all the miners to make sure the transactions they say are valid and honest are in fact valid and honest.</p>
          <p>So if the first layer of security, the miners, allows a transaction to be processed that is incorrect, the second layer of security, the MasterNodes, will refuse that transaction.</p>
          <p>Working in tandem, this system, used by only a handful of crypto projects, allows for a very secure network, providing security & stability to all that use it.</p>

          <h2>Self sustaining</h2>

          <p>The economic design of MonetaryUnit means that 10% of all created MUE is reserved for the benefit of the project.</p>
          <p>This pool of funds is available for people to request budget proposals to utilise this fund to help the project. The proposal may be to cover overheads, such as server costs, or to pay for marketing, or development of a particular application or service.</p>

          <h2>Governance built in</h2>

          <p>The budget proposal system is not a free for all. It is a democratic process that is maintained and monitored by the MasterNode network.</p>
          <p>Once a budget proposal has been made, the MasterNode network, the stakeholders of the MUE project, maintained by the individuals or groups that manage those MasterNodes, can then vote. 1 vote per MasterNode.</p>
          <p>A majority decision has to be achieved for the budget proposal to be approved. The funds are released at the end of the month through what is called a "SuperBlock".</p>
          <p>Again, this self governing model is not widely used amongst other cryptocurrencies, and helps MUE maintain the integrity of the project, and helps to improve strategic &amp; commercial decisions for the project and how it spends its own funds.</p>

          <h2>Instant payments &amp; privacy</h2>

          <p>The software wallets provided for use with MUE have several advantages of many of the other cryptocurrencies, including Bitcoin.</p>
          <p>For the extremely busy, or for urgent transactions, the Instantsend function means you can send a payment and it will be instantly received and confirmed by the recipient.</p>

          <p>During busy times, a Bitcoin payment can take up to 48 hours to be received by the recipient!</p>
          <p>For the privacy concerned, or slightly paranoid user, the PrivateSend function is another special inbuilt function that allows you to send MUE to a recipient, and it makes it impossible for the end receiver to know what wallet those funds were sent from.</p>

          <h2>Investment opportunity</h2>

          <p>We are not financial advisors nor are we traders, this is not professional advice, what we will do is highlight the potential upside and as always only invest what you are willing to lose.</p>

          <p>The MUE price has historically been around the 20-50 satoshi area.</p>
          <p>Recently as we secure our development team and solidify our goals people have been investing in MUE and the price has increased well.</p>
          <p>In January 2015 we offered the opportunity to buy up to 20 million MUE for 20 sats each. They were sold and were invested in additional features for MUE.</p>
          <p>The current price of around $0.14 per MUE and 3500 sats is still a significant way off our target pricing goals.</p>
          <p>We are aiming to hit, over the next 12-18 months a price of around $1.00 per MUE based on the revenue producing apps & services soon to be launching on MUEX.io.</p>
          <p>This would represent a 7 fold increase IF you were to buy MUE now.</p>
          <p>Please do your own research.</p>

          <h2>Inclusive</h2>

          <p>MonetaryUnit is about getting people involved.</p>
          <p>We are not an elitist group of academics or high net worth individuals.</p>
          <p>As a group, we want to grow the project, involve and help people about MUE, and get a grass roots growth not just on the internet, but also on the high street, with people carrying around MUE coupons, or having MUE wallets installed on their phone.</p>
          <p>The coin is not being marketed as a "scarce commodity" like so many other cryptocurrencies. The worth of the project comes from allowing people to get involved at any time. It is attainable, and if you don't want to buy any, just ask the community and someone will just send you some to use and test :)</p>
          <p>We don't have any kind of "halving" of coin production.</p>
          <p>Inflation is going to be about 3% per year, which promotes the use and distribution of MUE.</p>
          <p>40 MUE every 40 seconds from now for at least the next 130 years.</p>
          <p>There is time for you get involved, and we welcome all who do.</p>

        </WrittenContent>

        <FurtherReading />

        <JoinTheCommunity />

        <Footer />
    </Layout>
  );
}

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

            <section className="press-articles__container">
                <div className="press-articles__articles-list">

                    <div className="press-articles__article-item">
                        <div className="press-articles__article">
                            <h1 className="press-articles__sub-heading">BizzyB</h1>
                            <h5>Founder / Director of International Business Development (inc. UK)</h5>
                            <a className="press-articles__visit-btn" href="https://twitter.com/BizzybMUE" target="_blank">Twitter</a>    <a className="press-articles__visit-btn" href="https://bitcointalk.org/index.php?action=profile;u=237103" target="_blank">BitcoinTalk</a>    <a className="press-articles__visit-btn" href="https://www.linkedin.com/in/bizzy-b-0ab382150/" target="_blank">in</a>
                            <b><p className="press-articles__description">Started in crypto:</p></b> July 2013
                            <b><p className="press-articles__description">Current industry sector:</p></b> I.T
                            <b><p className="press-articles__description">Previous industry experience:</p></b> Startups,
                            Project management
                        </div>
                    </div>
                    <div className="press-articles__article-item">
                        <div className="press-articles__article">
                            <h1 className="press-articles__sub-heading">Johans</h1>
                            <h5>Director of European Business Development (excl. UK)</h5>
                            <a className="press-articles__visit-btn" href="https://twitter.com/TheCryptoEmpire"
                               target="_blank">Twitter</a>    <a className="press-articles__visit-btn" href="bcttalk" target="_blank">BitcoinTalk</a>
                            <b><p className="press-articles__description">Started in crypto:</p></b> January 2016
                            <b><p className="press-articles__description">Current industry sector:</p></b> Teaching
                            networking/IT skills / Crypto Miner
                            <b><p className="press-articles__description">Previous industry experience:</p></b> -
                        </div>
                    </div>

                    <h1 className="press-articles__heading"></h1>

                    <div className="press-articles__article-item">
                        <div className="press-articles__article">
                            <h1 className="press-articles__sub-heading">NotSoFast</h1>
                            <h5>Director of Finance</h5>
                            <a className="press-articles__visit-btn" href="https://twitter.com/notsofast"
                               onclick="return false;" target="_blank">Twitter</a>    <a className="press-articles__visit-btn" href="https://bitcointalk.org/index.php?action=profile;u=339189" target="_blank">BitcoinTalk</a>
                            <b><p className="press-articles__description">Started in crypto:</p></b> 2014
                            <b><p className="press-articles__description">Current industry sector:</p></b> Independent Advisor/Analyst
                            <b><p className="press-articles__description">Previous industry experience:</p></b> Independent mining, Trading, and related research
                        </div>
                    </div>
                    <div className="press-articles__article-item">
                        <div className="press-articles__article">
                            <h1 className="press-articles__sub-heading">C4</h1>
                            <h5>Director of Project Controls</h5>
                            <a className="press-articles__visit-btn" href="https://twitter.com/c44c_" target="_blank">Twitter</a>    <a className="press-articles__visit-btn" href="https://bitcointalk.org/index.php?action=profile;u=122406" target="_blank">BitcoinTalk</a>
                            <b><p className="press-articles__description">Started in crypto:</p></b> April-May 2013
                            <b><p className="press-articles__description">Current industry sector:</p></b> Mechanical
                            Engineering and Consulting
                            <b><p className="press-articles__description">Previous industry experience:</p></b> Mech. Eng
                        </div>
                    </div>

                    <h1 className="press-articles__heading"></h1>

                    <div className="press-articles__article-item">
                        <div className="press-articles__article">
                            <h1 className="press-articles__sub-heading">Mike.N</h1>
                            <h5>Director of Hardware R&D</h5>
                            <a className="press-articles__visit-btn" href="#"
                               onclick="return false;" target="_blank">Twitter</a>    <a className="press-articles__visit-btn" href="bcttalk" onclick="return false;" target="_blank">BitcoinTalk</a>
                            <b><p className="press-articles__description">Started in crypto:</p></b> May 2013
                            <b><p className="press-articles__description">Current industry sector:</p></b> Security
                            <b><p className="press-articles__description">Previous industry experience:</p></b> -
                        </div>
                    </div>
                    <div className="press-articles__article">
                        <h1 className="press-articles__sub-heading">Pjcltd</h1>
                        <h5>Director of Value Added Services</h5>
                        <a className="press-articles__visit-btn" href="https://twitter.com/mphostinguk"
                           target="_blank">Twitter</a>    <a className="press-articles__visit-btn" href="https://bitcointalk.org/index.php?action=profile;u=151913" target="_blank">BitcoinTalk</a>    <a className="press-articles__visit-btn" href="https://www.linkedin.com/in/paul-jenkinson-28482974" target="_blank">in</a>
                        <b><p className="press-articles__description">Started in crypto:</p></b> June 2013
                        <b><p className="press-articles__description">Current industry sector:</p></b> I.T. Hosting,
                        SIP, 3CX
                        <b><p className="press-articles__description">Previous industry experience:</p></b> -
                    </div>

                    <h1 className="press-articles__heading"></h1>

                    <div className="press-articles__article-item">
                        <div className="press-articles__article">
                            <h1 className="press-articles__sub-heading">Bbobb</h1>
                            <h5>Director of Operations & Software Architecture</h5>
                            <a className="press-articles__visit-btn" href="https://twitter.com/Cryptophi" onclick="return false;" target="_blank">Twitter</a>    <a className="press-articles__visit-btn" href="https://bitcointalk.org/index.php?action=profile;u=563625" target="_blank">BitcoinTalk</a> <a className="press-articles__visit-btn" href="https://www.linkedin.com/in/awzzwa/" target="_blank">in</a>
                            <b><p className="press-articles__description">Started in crypto:</p></b> October 2012
                            <b><p className="press-articles__description">Current industry sector:</p></b> ICT
                            <b><p className="press-articles__description">Previous industry experience:</p></b> Tech ops,
                            PM, BDM
                        </div>
                    </div>

                </div>
            </section>

            </Hero>

            <JoinTheCommunity/>

            <Footer/>
        </Layout>
    );
}

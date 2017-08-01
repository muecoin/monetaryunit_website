import React from 'react';

export default () => (
  <div className="faq-accordian-menu" data-accordion>
    <section className="faq-accordion-menu__container">
        <dl className="faq-accordion-menu__define-list">
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion1" aria-expanded="false" aria-controls="accordion1" data-accordion-trigger className="faq-accordion-menu__title">
              Where can I buy MUE?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item faq-accordion-menu__item--is-collapsed" id="accordion1" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">You can get MUE from <a className="faq-accordion-menu__link" href="https://bittylicious.com/" target="_blank">Bittylicious</a> &amp; <a className="faq-accordion-menu__link" href="https://bittrex.com/Market/?MarketName=BTC-MUE" target="_blank">Bittrex</a></p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion2" aria-expanded="false" aria-controls="accordion2" data-accordion-trigger className="faq-accordion-menu__title">
              Where can I use MUE?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion2" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">Why not try Forex trading <a className="faq-accordion-menu__link" href="https://muex.io/Forex" target="_blank">here</a> or see what merchants accept MUE <a className="faq-accordion-menu__link" href="https://www.coinpayments.net/store-directory-coin-MUE" target="_blank">here</a></p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion3" aria-expanded="false" aria-controls="accordion3" data-accordion-trigger className="faq-accordion-menu__title">
              What are the technical specs of MUE?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion3" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">MUE is a fork of the latest Dash code & utilises X11 POW and MasterNodes.</p>
            <ul className="faq-accordion-menu__bullet-list">
              <li>1 block every 40 seconds</li>
              <li>36 MUE per block</li>
              <li>18 for POW</li>
              <li>18 for MNs</li>
              <li>(plus an additional 4 MUE per block set aside for project funding)</li>
            </ul>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion4" aria-expanded="false" aria-controls="accordion4" data-accordion-trigger className="faq-accordion-menu__title">
              When did MUE launch?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion4" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">MUE launched July 2014, and changed code base June 2017.</p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion5" aria-expanded="false" aria-controls="accordion5" data-accordion-trigger className="faq-accordion-menu__title">
              How is MUE different to all the other coins?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion5" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">We are one of very few projects which have a sustainable business model.
              10% of newly created MUE are set aside by the network to be used once per month to fund democratically approved projects. This offers us a secure & long term future as a viable &amp; healthy project.</p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion5" aria-expanded="false" aria-controls="accordion6" data-accordion-trigger className="faq-accordion-menu__title">
              Does MUE have a project road map?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion5" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">We have our project overview Kanban which shows you our product pipeline <a className="faq-accordion-menu__link" href="https://tree.taiga.io/project/monetaryunit-monetaryunit/kanban" target="_blank">here</a></p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion5" aria-expanded="false" aria-controls="accordion7" data-accordion-trigger className="faq-accordion-menu__title">
              Does MUE have a whitepaper?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion5" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">No, we are not fans of whitepapers. If you would like to know more about the project though, feel free to read the following <a className="faq-accordion-menu__link" href="https://docs.google.com/document/d/12-hznqKYqMRDnEiPcHy_GNpo4LVFSFBNzr6JuJRmXLc/edit?usp=sharing" target="_blank">overview document</a></p>
          </dd>
          <dt className="faq-accordion-menu__define-term">
            <a href="#accordion5" aria-expanded="false" aria-controls="accordion8" data-accordion-trigger className="faq-accordion-menu__title">
              How many developers does MUE have?
            </a>
          </dt>
          <dd className="faq-accordion-menu__item accordionItem faq-accordion-menu__item--is-collapsed" id="accordion5" aria-hidden="true">
            <p className="faq-accordion-menu__paragraph">We currently have in excess of 15, all participating in various aspects of the project from maintaining this website, to developing new code for wallets & pools, creating exciting new services like Forex trading and gaming portals, to managing mining hardware, developing apps & offering MasterNode shares.
This excludes the marketers, planners , operational team & customer support, plus the fantastic community all of whom help the project grow every day.</p>
          </dd>
        </dl>
    </section>
  </div>
)

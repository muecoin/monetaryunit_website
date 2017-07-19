import React from 'react';

export default () => (
  <footer className="footer">
      <div className="footer__sitemap">
        <div className="footer__sitemap-column">
          <h2 className="footer__sitemap-category">About</h2>
          <ul className="footer__sitemap-list">
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/#about" data-jump-to=".about">About MonetaryUnit</a>
            </li>
          </ul>
        </div>

        <div className="footer__sitemap-column">
          <h2 className="footer__sitemap-category">Why Choose MUE?</h2>
          <ul className="footer__sitemap-list">
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/#why-choose-mue" data-jump-to=".why-choose-mue" target="_self">muex.io</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/#why-choose-mue" data-jump-to=".why-choose-mue" target="_self">webwallets.io</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/#why-choose-mue" data-jump-to=".why-choose-mue" target="_self">coinbuy.io</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/#why-choose-mue" data-jump-to=".why-choose-mue" target="_self">cashchat.io</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/#why-choose-mue" data-jump-to=".why-choose-mue" target="_self">GS Points</a>
            </li>
          </ul>
        </div>

        <div className="footer__sitemap-column">
          <h2 className="footer__sitemap-category">Get Started</h2>
          <ul className="footer__sitemap-list">
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/investors-guide.html" target="_self">For Investors</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/consumers-guide.html" target="_self">For Consumers</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/merchants-guide.html" target="_self">For Merchants</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/developers-guide.html" target="_self">For Developers</a>
            </li>
          </ul>
        </div>

        <div className="footer__sitemap-column">
          <h2 className="footer__sitemap-category">Community</h2>
          <ul className="footer__sitemap-list">
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://twitter.com/monetaryunit" target="_blank">Twitter</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://www.facebook.com/MonetaryUnit/" target="_blank">Facebook</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://mueslack.herokuapp.com/" target="_blank">Slack</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://github.com/MUEcoin/" target="_blank">Github</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://bitcointalk.org/index.php?topic=778322.0" target="_blank">Bitcoin talk</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://tree.taiga.io/project/monetaryunit-monetaryunit/kanban" target="_blank">Kanban</a>
            </li>
          </ul>
        </div>

        <div className="footer__sitemap-column">
          <h2 className="footer__sitemap-category">Other</h2>
          <ul className="footer__sitemap-list">
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="http://monetaryunitfoundation.org/" target="_blank">Foundation</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://www.zazzle.co.uk/monetaryunit/products" target="_blank">UK Shop</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="https://www.zazzle.com/monetaryunit/products" target="_blank">US Shop</a>
            </li>
            <li className="footer__sitemap-item">
              <a className="footer__sitemap-link" href="/frequently-asked-questions.html" target="_self">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer__copyright">
          <div className="footer__copyright-wrapper">
            <img className="footer__logo" src="/assets/images/monetary-unit-white-logo.png" alt="Monetary Unit" />
            <small className="footer__legal">Copyright &copy; 2017 Monetary Unit, All Rights Reserved.</small>
          </div>
        </div>
      </div>
  </footer>
)

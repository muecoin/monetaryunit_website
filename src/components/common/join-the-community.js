import React from 'react';

export default ({title = "Join the Community", description = "At MUE we pride ourselves on being honest and transparent in everything we do. Keep in touch with all the news and chat to the team via our social channels, communication tools and open source developer networks." }) => (

  <div className="join-the-community" id="join-the-community">
    <section className="join-the-community__container">
        <div className="join-the-community__intro">
          <div className="join-the-community__intro-text-container">
            <h1 className="join-the-community__intro-heading">{title}</h1>
            <p className="join-the-community__intro-paragraph">{description}</p>
          </div>
          <div className="join-the-community__social-links">
            <div className="join-the-community__social-link">
              <a href="https://twitter.com/monetaryunit" target="_blank">
                <span className="join-the-community__icon--twitter"></span>
              </a>
            </div>
            <div className="join-the-community__social-link">
              <a href="https://www.facebook.com/MonetaryUnit/" target="_blank">
                <span className="join-the-community__icon--facebook"></span>
              </a>
            </div>
            <div className="join-the-community__social-link">
              <a href="https://mueslack.herokuapp.com/" target="_blank">
                <span className="join-the-community__icon--slack"></span>
              </a>
            </div>
            <div className="join-the-community__social-link">
              <a href="https://github.com/MUEcoin/" target="_blank">
                <span className="join-the-community__icon--github"></span>
              </a>
            </div>
            <div className="join-the-community__social-link">
              <a href="https://bitcointalk.org/index.php?topic=778322.0" target="_blank">
                <span className="join-the-community__icon--btc"></span>
              </a>
            </div>
            <div className="join-the-community__social-link">
              <a href="https://tree.taiga.io/project/monetaryunit-monetaryunit/kanban" target="_blank">
                <span className="join-the-community__icon--kanban"></span>
              </a>
            </div>
          </div>
        </div>

    </section>
  </div>
)

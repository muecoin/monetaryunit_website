import React from 'react';

export default () => (
  <div className="about" id="about">
    <section className="about__container">
        <div className="about__intro">
          <div className="about__intro-text-container">
            <h1 className="about__intro-heading">About</h1>
            <p className="about__intro-paragraph">Launched in July 2014 Monetary Unit is a decentralised, self-sustainable and self-governed cryptocurrency project with long term goals. Our focus has always been to create a cryptocurrency that is accessible to all and breaks away from the stigma of being understood not only by the tech industry but be an attractive offering for developers, investors and the general public alike.</p>
            <p className="about__intro-paragraph">Maintained by a friendly and committed community and with many exciting projects on the horizon, here at MUE, we continue to innovate and build on our reputation to launch into the mainstream as the most trusted and exciting cryptocurrency project in the market.</p>
          </div>
        </div>

        <div className="about__benefits">
          <div className="about__benefits-row">
            <div className="about__benefits-item">
              <span className="about__benefits-icon--rocket"></span>
              <p className="about__benefits-description">
                <b>Instant Transactions:</b> For urgent transactions a payment can be instantly received and confirmed by the recipient via the Instantsend {'function'}.
                  If privacy is a concern, use our PrivateSend {'function'} that uses multiple layers of obfuscation to hide from the recipient the source of the funds.
              </p>
            </div>
            <div className="about__benefits-item">
              <span className="about__benefits-icon--users"></span>
              <p className="about__benefits-description">
                <b>Community & Foundation:</b> Helpful community and Foundation Team always on hand to assist with questions and to help educate.
              </p>
            </div>
          </div>
          <div className="about__benefits-row">
            <div className="about__benefits-item">
              <span className="about__benefits-icon--balance"></span>
              <p className="about__benefits-description">
                <b>MasterNodes:</b> Our unique business model ensures stability within the community with inbuilt governance and voting systems.
              </p>
            </div>
            <div className="about__benefits-item">
              <span className="about__benefits-icon--cycle"></span>
              <p className="about__benefits-description">
                <b>Self Sustaining:</b> The economic design of MonetaryUnit means that 10% of all created MUE is reserved for the benefit of the project.
              </p>
            </div>
          </div>
          <div className="about__benefits-row">
            <div className="about__benefits-item">
              <span className="about__benefits-icon--chart"></span>
              <p className="about__benefits-description">
                <b>Commercial Arms & Affiliates:</b> MUE is focused on the continual development of their surrounding ecosystem to ensure maximum currency exposure and usage to benefit the entire crypto community.
              </p>
            </div>
            <div className="about__benefits-item">
              <span className="about__benefits-icon--wallet"></span>
              <p className="about__benefits-description">
                <b>Long Term Low Inflation Rate:</b> With a long term inflation rate of 3% per year, this promotes the use and distribution of MUE. 40 MUE every 40 seconds from now for at least the next 130 years.
              </p>
            </div>
          </div>
        </div>
    </section>
  </div>
)

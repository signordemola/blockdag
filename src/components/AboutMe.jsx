import React from 'react';

import ThreeDdgif from '../assets/images/3d.gif';

const AboutMe = () => {
  return (
    <section className="About_about__kVW_A">
      <div className="Container_container__bOiDv About_container__vm63G  ">
        <div className="About_cube__L0rET">
          <img
            alt="bdag"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              inset: '0px',
              color: 'transparent',
            }}
            src={ThreeDdgif}
          />
        </div>

        <div className="About_title__uY06O">
          <h1 className="About_titleH2__eEYeM">What Is BlockDAG?</h1>
          <span>Speed Meets Security</span>

          <div className="About_paragraphs__tGWI3">
            <p>
              BlockDAG, inspired by Bitcoin, is the world’s most advanced layer
              1 blockchain. A cutting-edge Proof-of-Work (PoW) algorithm that
              delivers industry-leading speeds, unbeatable security, and high
              decentralization. Built for the future, BlockDAG can power
              everyday applications to enterprise-grade DeFi protocols. With the
              power to mine from anywhere, BlockDAG makes crypto mining simple,
              for everyone.
            </p>
          </div>
        </div>

        <div className="About_buttons__orwxi">
          <a
            className="Button_button__mCT0h  Button_black__Fjplo"
            href="https://wiki.blockdag.network/"
          >
            Learn More
          </a>

          <a
            target="_blank"
            href="/../blockdag-technical-whitepaper.pdf"
            className="Button_button__mCT0h  Button_transparent__l4UOb"
          >
            DAGpaper v2
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

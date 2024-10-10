import React from 'react';

import email from '../assets/images/socials/email.svg';
import twitter from '../assets/images/socials/twitter.svg';
import facebook from '../assets/images/socials/facebook2.svg';
import reddit from '../assets/images/socials/reddit.svg';
import whatsapp from '../assets/images/socials/whatsapp.svg';

const Invite = () => {
  return (
    <section className="InviteAndBoost_inviteAndBoost__74ljS">
      <div className="Container_container__bOiDv InviteAndBoost_container__7aEwN">
        <div className="InviteAndBoost_title__iy_cg">
          <h2>SPREAD THE WORD</h2>
          <p>
            Rally your circle to BlockDAG, where shared efforts meet
            unprecedented rewards. Open a new chapter of crypto evolution.
          </p>
        </div>

        {/* image */}
        <div></div>

        {/*  */}
        <div className="ShareCode_shareButtons__Uup_Q ShareCode_staticView__1rIZa">
          <button>
            <img src={email} alt="email icon" />
            Email
          </button>
          <button>
            <img src={twitter} alt="twitter icon" />
            Twitter
          </button>
          <button>
            <img src={facebook} alt="facebook icon" />
            Facebook
          </button>
          <button>
            <img src={reddit} alt="reddit icon" />
            Reddit
          </button>
          <button>
            <img src={whatsapp} alt="whatsapp icon" />
            WhatsApp
          </button>
        </div>

        {/*  */}
        <button
          type="button"
          className="Button_button__mCT0h  Button_black__Fjplo"
        >
          SHARE NOW
        </button>
      </div>
    </section>
  );
};

export default Invite;

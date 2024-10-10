import React from 'react';

import copyGradient from '../assets/images/copy-gradient.svg'

const Donate = () => {
  return (
    <section className="Donate_donate__FmJ1h null">
      <div
        id=""
        className="Container_container__bOiDv Donate_container__Hf0tC  "
      >
        <div className="Donate_donateBox__90qbK">
          <div></div>
          <div className="Donate_boxLeft__xbrm0">
            <h2>Support Our Mission</h2>
            <div>
              <p>
                Every contribution, regardless of its size, has a meaningful
                impact for our team, together have the power to bring about
                lasting change and forge a brighter future for everyone
                involved. Our community thrives on collaboration and shared
                commitment.
              </p>
              <p>
                The management of our community wallet rests in the capable
                hands of three elected members: XCat, Leopard Win, and Technix,
                who have earned the trust of the public through a democratic
                voting process. Operating as a multi-signature wallet, any
                spending transaction requires the authorization of at least two
                of these appointed Treasurers, ensuring a secure and transparent
                financial process.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="Button_button__mCT0h Donate_button__cIjRo Button_light__xmSX6"
          >
            Make a Donation
          </button>
        </div>
      </div>

      <div className="Donate_modal__HIWwR ">
        <div className="Donate_modalContent__Is4os">
          <h2>Donate to BlockDAG</h2>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            fillRule="evenodd"
            className="Donate_close__n0jlw"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64Zm0 76c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372Zm128.013 198.826c.023.007.042.018.083.059l45.02 45.019c.04.04.05.06.058.083a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082L557.254 512l127.861 127.862a.268.268 0 0 1 .05.06l.009.023a.118.118 0 0 1 0 .07c-.007.022-.018.041-.059.082l-45.019 45.02c-.04.04-.06.05-.083.058a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059L512 557.254 384.14 685.115c-.042.041-.06.052-.084.059a.118.118 0 0 1-.07 0c-.022-.007-.041-.018-.082-.059l-45.02-45.019c-.04-.04-.05-.06-.058-.083a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082L466.745 512l-127.86-127.86a.268.268 0 0 1-.05-.061l-.009-.023a.118.118 0 0 1 0-.07c.007-.022.018-.041.059-.082l45.019-45.02c.04-.04.06-.05.083-.058a.118.118 0 0 1 .07 0c.022.007.041.018.082.059L512 466.745l127.862-127.86c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
          </svg>
          <div className="Donate_selectBar__H_4dI">
            <span>Development Fund</span>
          </div>
          <span className="Donate_titleSpan__pfsbG">Funding Address</span>{' '}
          <span className="Donate_addressSpan__0QAON">
            0xa69fF6cdb130F4324777724b915D6Cd88C247a70
          </span>
          <div className="Donate_copy__eWa_c">
            <div className="Donate_icon__7H6mA">
              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className=""
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: '0px',
                  color: 'transparent',
                }}
                src={copyGradient}
              />
            </div>
            <span>Copy Address</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;

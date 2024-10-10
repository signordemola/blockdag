import React from 'react';

import telegram from '../assets/images/socials/telegram.svg';
import twitter from '../assets/images/socials/twitter.svg';
import youtube from '../assets/images/socials/youtube.svg';
import facebook from '../assets/images/socials/facebook.svg';
import instagram from '../assets/images/socials/insta.svg';
import bloomberg from '../assets/images/bloomberg.svg';
import coinTelegraphy from '../assets/images/coinTelegraphy.svg';
import coindesk from '../assets/images/coindesk.svg';
import international from '../assets/images/international.svg';
import dailyCoin from '../assets/images/dailyCoin.svg';
import yahoo from '../assets/images/yahoo.svg';
import newBtc from '../assets/images/newBtc.svg';

const Sponsors = () => {
  return (
    <section className="Sponsors_sponsors__kve62">
      <div
        id=""
        className="Container_container__bOiDv Sponsors_titleContainer__Hm0cO  "
      >
        <h2>PRESS</h2>
      </div>

      <div
        id=""
        className="Container_container__bOiDv Sponsors_container__odrTw"
      >
        <div className="Sponsors_leftContent__jrVVi">
          <p>
            Find us across the digital spectrum, check us out, feel the pulse of
            the BlockDAG project
          </p>
          <div className="Sponsors_socialLink__w0x6_">
            <ul>
              <li>
                <a target="_blank" href="https://t.me/blockDAGnetworkOfficial">
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/blockdagnetwork">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@BlockDAGofficial"
                >
                  <img src={youtube} alt="youtube" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61557699651392&amp;mibextid=LQQJ4d"
                >
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/blockdagnetwork/"
                >
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="Sponsors_button__BFmgC">
            <a
              className="Button_button__mCT0h  Button_black__Fjplo"
              href="https://purchase2.blockdag.network"
            >
              Buy Now
            </a>
          </div>
        </div>

        {/*  */}
        <div
          className="swiper swiper-initialized swiper-horizontal Sponsors_slider__XEhfF swiper-backface-hidden"
          id="sponsorSwiper"
        >
          <div className="swiper-wrapper">
            <div
              className="swiper-slide swiper-slide-active"
              style={{ width: '996px', marginRight: '50px' }}
            >
              <div className="Sponsors_rightContent__XSFp2">
                <div className="Sponsors_sponsorLeft__p1LAl">
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src={bloomberg}
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src={coinTelegraphy}
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src={coindesk}
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src={international}
                      />
                    </div>
                  </div>
                </div>
                <div className="Sponsors_sponsorRight__qDgRq">
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src={dailyCoin}
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src={yahoo}
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src={newBtc}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              style={{ width: '996px', marginRight: '50px' }}
            >
              <div className="Sponsors_rightContent__XSFp2">
                <div className="Sponsors_sponsorLeft__p1LAl">
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src="/images/sponsor/cryptonews.svg"
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src="/images/sponsor/bitget.svg"
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src="/images/sponsor/toobit.svg"
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src="/images/sponsor/bitcoinist.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="Sponsors_sponsorRight__qDgRq">
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src="/images/sponsor/coinw.svg"
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
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
                        src="/images/sponsor/coinCheckup.svg"
                      />
                    </div>
                  </div>
                  <div className="Sponsors_box__hXucP">
                    <div className="Sponsors_image__QW8Os">
                      <img
                        alt="BlockDAG"
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
                        src="/images/sponsor/be-in-crypto.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev swiper-button-disabled"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;

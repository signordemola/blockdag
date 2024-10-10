import { useState, useEffect, useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import veeTwoBanner from '../assets/images/10m-v2-banner.png';
import veeTwoBannerMobile from '../assets/images/10m-v2-banner-mobile.png';
import bdagFifty from '../assets/images/bdag50-banner-v2.png';
import bdagFiftyMobile from '../assets/images/bdag50-banner-mobile-v2.png';
import testnet from '../assets/images/testnet-presale-live-banner.png';
import testnetMobile from '../assets/images/testnet-presale-live-banner-mobile.png';
import privateClients from '../assets/images/private-clients-banner.png';
import privateClientsMobile from '../assets/images/private-clients-mobile-banner.png';
import BlockDAG from '../assets/images/BlockDAG-x30.webp';

import paymentOne from '../assets/images/walletPaymentIcons/payment-1.svg';
import paymentTwo from '../assets/images/walletPaymentIcons/payment-2.svg';
import paymentThree from '../assets/images/walletPaymentIcons/payment-3.svg';
import paymentFour from '../assets/images/walletPaymentIcons/payment-4.svg';
import paymentFive from '../assets/images/walletPaymentIcons/payment-5.svg';
import paymentSix from '../assets/images/walletPaymentIcons/payment-6.svg';
import paymentSeven from '../assets/images/walletPaymentIcons/payment-7.svg';

import ThreeDdgif from '../assets/images/3d.gif';

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('Oct 15, 2024 01:59:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
  };

  // timer useEffect
  useEffect(() => {
    startTimer();
    return () => clearInterval(interval);
  }, []);

  // swiper useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 8);
    }, 11000);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="Hero_particleWrapper__AFBeG">
      <div className="swiper swiper-initialized swiper-horizontal Hero_sliderHero__3tmIo swiper-backface-hidden">
        <div
          className="swiper-wrapper"
          style={{ transitionDuration: '0ms', transform: '' }}
        >
          {/* swiper 1 */}
          <div
            className="swiper-slide swiper-slide-next"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 0 ? 'block' : 'none',
            }}
            role="group"
            aria-label="0 / 8"
            data-swiper-slide-index="0"
          >
            <div className="Hero_hero__hbOA4 Hero_countHeroSection__18sxk">
              <div
                id=""
                className="Container_container__bOiDv Hero_countContainer___5XGn Container_large__G1Q2W "
              >
                <div className="Hero_moonContent__RI1_V">
                  {/* countdown */}
                  <div className="Hero_countdownContainer__I1vs_">
                    <div className="style_countArea__bTrPJ">
                      <div className="style_counter__6O3pp">
                        <div className="style_box__PqsS1">
                          <span className="style_numbers__8HVTA">
                            <span className="style_digit__ZAjTi style_left__xZKAi  style_active___kSgM ">
                              0
                            </span>
                            <span className="style_digit__ZAjTi style_right__TgCY5  style_active___kSgM ">
                              {timeLeft.days}
                            </span>
                          </span>
                        </div>
                        <div className="style_box__PqsS1">
                          <span className="style_numbers__8HVTA">
                            <span className="style_digit__ZAjTi style_left__xZKAi  style_active___kSgM ">
                              {timeLeft.hours.toString().padStart(2, '0')[0]}
                            </span>

                            <span className="style_digit__ZAjTi style_right__TgCY5  style_active___kSgM ">
                              {timeLeft.hours.toString().padStart(2, '0')[1]}
                            </span>
                          </span>
                        </div>
                        <div className="style_box__PqsS1">
                          <span className="style_numbers__8HVTA">
                            <span className="style_digit__ZAjTi style_left__xZKAi style_number1__PQXlN style_active___kSgM ">
                              {timeLeft.minutes.toString().padStart(2, '0')[0]}
                            </span>

                            <span className="style_digit__ZAjTi style_right__TgCY5  style_active___kSgM ">
                              {timeLeft.minutes.toString().padStart(2, '0')[1]}
                            </span>
                          </span>
                        </div>
                        <div className="style_box__PqsS1">
                          <span className="style_numbers__8HVTA">
                            <span className="style_digit__ZAjTi style_left__xZKAi  style_active___kSgM ">
                              {timeLeft.seconds.toString().padStart(2, '0')[0]}
                            </span>

                            <span className="style_digit__ZAjTi style_right__TgCY5  style_active___kSgM ">
                              {timeLeft.seconds.toString().padStart(2, '0')[1]}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* moon icons */}
                  <div className="Hero_moonIcons__6hzvz">
                    <h2 className="Hero_contentH2__M13xo Hero_contentH2Big__yQWED">
                      Presale is <span className="Hero_green___OvUP">Live</span>
                    </h2>
                    <div className="Hero_icons__d67kn">
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentOne}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentTwo}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentThree}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFour}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFive}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSix}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSeven}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="600"
                      height="696"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-sm"
                      style={{ color: 'transparent' }}
                      src={veeTwoBannerMobile}
                    />
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="1900"
                      height="750"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-md"
                      style={{ color: 'transparent' }}
                      src={veeTwoBanner}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* swiper 2 */}
          <div
            className="swiper-slide swiper-slide-next"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 1 ? 'block' : 'none',
            }}
            role="group"
            aria-label="1 / 8"
            data-swiper-slide-index="1"
          >
            <div className="Hero_hero__hbOA4 Hero_countHeroSection__18sxk">
              <div
                id=""
                className="Container_container__bOiDv Hero_countContainer___5XGn Container_large__G1Q2W "
              >
                <div className="Hero_moonContent__RI1_V">
                  {/* moon icons */}
                  <div className="Hero_moonIcons__6hzvz">
                    <h2 className="Hero_contentH2__M13xo Hero_contentH2Big__yQWED">
                      Presale is <span className="Hero_green___OvUP">Live</span>
                    </h2>
                    <div className="Hero_icons__d67kn">
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentOne}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentTwo}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentThree}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFour}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFive}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSix}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSeven}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="600"
                      height="696"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-sm"
                      style={{ color: 'transparent' }}
                      src={bdagFiftyMobile}
                    />
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="1900"
                      height="750"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-md"
                      style={{ color: 'transparent' }}
                      src={bdagFifty}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* swiper 3 */}
          <div
            className="swiper-slide swiper-slide-next"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 2 ? 'block' : 'none',
            }}
            role="group"
            aria-label="1 / 8"
            data-swiper-slide-index="1"
          >
            <div className="Hero_hero__hbOA4 Hero_countHeroSection__18sxk">
              <div
                id=""
                className="Container_container__bOiDv Hero_countContainer___5XGn Container_large__G1Q2W "
              >
                <div className="Hero_moonContent__RI1_V">
                  {/* moon icons */}
                  <div className="Hero_moonIcons__6hzvz">
                    <h2 className="Hero_contentH2__M13xo Hero_contentH2Big__yQWED">
                      Presale is <span className="Hero_green___OvUP">Live</span>
                    </h2>
                    <div className="Hero_icons__d67kn">
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentOne}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentTwo}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentThree}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFour}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFive}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSix}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSeven}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="600"
                      height="696"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-sm"
                      style={{ color: 'transparent' }}
                      src={testnetMobile}
                    />
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="1900"
                      height="750"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-md"
                      style={{ color: 'transparent' }}
                      src={testnet}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* swiper 4 */}
          <div
            className="swiper-slide swiper-slide-active"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 3 ? 'block' : 'none',
            }}
            role="group"
            aria-label="4 / 8"
            data-swiper-slide-index="4"
          >
            <section className="Hero_hero__hbOA4" id="wallet">
              <div
                id=""
                className="Container_container__bOiDv Hero_container__CsdYn Container_large__G1Q2W "
              >
                <div className="Hero_videoSection__cwS_M Hero_mobileFullHeight__w071J">
                  <div className="Hero_contentForVimeo__yYfQA">
                    <div className="Hero_loadingLogo__QlyqD">
                      <span>Certified Number 1.</span>
                      <div className="Hero_logo__Cr_yv">
                        <div className="Hero_logoImg__w1oSj">
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: 'absolute',
                              height: '100%',
                              width: '100%',
                              left: '0',
                              top: '0',
                              right: '0',
                              bottom: '0',
                              color: 'transparent',
                            }}
                            src={ThreeDdgif}
                          />
                        </div>
                        <span>BlockDAG </span>
                      </div>
                    </div>
                    <iframe
                      src="blob:https://play.vidyard.com/a11ef788-4a2a-43e5-9777-0c15ef8ac2b0"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                      style={{
                        position: 'absolute',
                        height: '100%',
                        left: '0',
                        top: '0',
                        right: '0',
                        bottom: '0',
                      }}
                      title="BlockDAG - New York"
                      autoPlay=""
                    ></iframe>
                  </div>
                  <div className="Hero_videoSectionContent__sbrdl ">
                    <h2 className="Hero_contentH2__M13xo Hero_green___OvUP  d-md">
                      Presale is <span className="Hero_green___OvUP">Live</span>
                    </h2>
                    <h2 className="Hero_contentH2__M13xo Hero_green___OvUP  d-sm">
                      Presale is <span className="Hero_green___OvUP">Live</span>
                    </h2>
                    <div className="Hero_icons__d67kn">
                      <div className="Hero_icon__OAdZ2">
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          src={paymentOne}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          src={paymentTwo}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentThree}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFour}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFive}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSix}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: 'absolute',
                            height: '100%',
                            width: '100%',
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSeven}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* swiper 5 */}
          <div
            className="swiper-slide swiper-slide-active"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 4 ? 'block' : 'none',
            }}
            role="group"
            aria-label="5 / 8"
            data-swiper-slide-index="5"
          >
            <div className="Hero_hero__hbOA4 Hero_countHeroSection__18sxk">
              <div className="Container_container__bOiDv Hero_countContainer___5XGn Container_large__G1Q2W ">
                <div className="Hero_moonContent__RI1_V">
                  {/* moon icons */}
                  <div className="Hero_moonIcons__6hzvz">
                    <h2 className="Hero_contentH2__M13xo Hero_contentH2Big__yQWED">
                      Presale is <span className="Hero_green___OvUP">Live</span>
                    </h2>
                    <div className="Hero_icons__d67kn">
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentOne}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentTwo}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentThree}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFour}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentFive}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSix}
                        />
                      </div>
                      <div className="Hero_icon__OAdZ2">
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
                            left: '0',
                            top: '0',
                            right: '0',
                            bottom: '0',
                            color: 'transparent',
                          }}
                          src={paymentSeven}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="600"
                      height="696"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-sm"
                      style={{ color: 'transparent' }}
                      src={privateClientsMobile}
                    />
                    <img
                      alt="BlockDAG"
                      loading="lazy"
                      width="1900"
                      height="750"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_countdownBg__fA_wU d-md"
                      style={{ color: 'transparent' }}
                      src={privateClients}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* swiper 6 */}
          <div
            className="swiper-slide swiper-slide-active"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 5 ? 'block' : 'none',
            }}
            role="group"
            aria-label="6 / 8"
            data-swiper-slide-index="6"
          >
            <div className="Hero_hero__hbOA4">
              <div className="Container_container__bOiDv Hero_container__CsdYn Container_large__G1Q2W ">
                <div className="Hero_content__pj8_E">
                  <span className="Hero_contentH2__M13xo">
                    Next Generation
                    <br />
                    Blockchain
                    <br />
                    Built for Defi
                  </span>

                  <div className="Hero_icons__d67kn">
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentOne}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentTwo}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentThree}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentFour}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentFive}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentSix}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentSeven}
                      />
                    </div>
                  </div>
                </div>

                <div className="Hero_imgArea__SkoFO">
                  <div className="Hero_img__vS_LC ">
                    <img
                      alt="bdag"
                      loading="lazy"
                      width="779"
                      height="576"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_iphone__d9pCY"
                      style={{ color: 'transparent' }}
                      src={BlockDAG}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* swiper 7 */}
          <div
            className="swiper-slide swiper-slide-active"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 6 ? 'block' : 'none',
            }}
            role="group"
            aria-label="7 / 8"
            data-swiper-slide-index="7"
          >
            <div className="Hero_hero__hbOA4">
              <div className="Container_container__bOiDv Hero_container__CsdYn Container_large__G1Q2W ">
                <div className="Hero_content__pj8_E">
                  <span className="Hero_contentH2__M13xo">
                    Batch 24
                    <br />
                    Selling Out Fast
                    <br />
                    Limited Miners Available
                  </span>

                  <div className="Hero_icons__d67kn">
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentOne}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentTwo}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentThree}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentFour}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentFive}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentSix}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentSeven}
                      />
                    </div>
                  </div>
                </div>

                <div className="Hero_imgArea__SkoFO">
                  <div className="Hero_img__vS_LC ">
                    <img
                      alt="bdag"
                      loading="lazy"
                      width="779"
                      height="576"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_iphone__d9pCY"
                      style={{ color: 'transparent' }}
                      src={BlockDAG}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* swiper 8 */}
          <div
            className="swiper-slide swiper-slide-active"
            style={{
              maxWidth: '1711px',
              display: currentIndex === 7 ? 'block' : 'none',
            }}
            role="group"
            aria-label="8 / 8"
            data-swiper-slide-index="8"
          >
            <div className="Hero_hero__hbOA4">
              <div className="Container_container__bOiDv Hero_container__CsdYn Container_large__G1Q2W ">
                <div className="Hero_content__pj8_E">
                  <span className="Hero_contentH2__M13xo">
                    Join cloud mining
                    <br />
                    Earn BDAG
                    <br />
                    Enjoy
                  </span>

                  <div className="Hero_icons__d67kn">
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentOne}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentTwo}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentThree}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentFour}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentFive}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentSix}
                      />
                    </div>
                    <div className="Hero_icon__OAdZ2">
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
                          left: '0',
                          top: '0',
                          right: '0',
                          bottom: '0',
                          color: 'transparent',
                        }}
                        src={paymentSeven}
                      />
                    </div>
                  </div>
                </div>

                <div className="Hero_imgArea__SkoFO">
                  <div className="Hero_img__vS_LC ">
                    <img
                      alt="bdag"
                      loading="lazy"
                      width="779"
                      height="576"
                      decoding="async"
                      data-nimg="1"
                      className="Hero_iphone__d9pCY"
                      style={{ color: 'transparent' }}
                      src={BlockDAG}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* swiper pagination */}
        <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 0 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 1"
            aria-current="true"
          ></span>
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 1 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 2"
          ></span>
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 2 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 3"
          ></span>
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 3 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 4"
          ></span>
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 4 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 5"
          ></span>
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 5 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 6"
          ></span>
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 6 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 7"
          ></span>
          <span
            className={`swiper-pagination-bullet ${
              currentIndex === 7 && 'swiper-pagination-bullet-active'
            }`}
            tabIndex="0"
            role="button"
            aria-label="Go to slide 8"
          ></span>
        </div>

        {/* swiper notification */}
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
      </div>
    </section>
  );
};

export default Hero;

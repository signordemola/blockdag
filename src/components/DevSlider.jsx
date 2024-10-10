import React, { useEffect, useState } from 'react';

import devRelease from '../assets//images/dev-release-empty-bg.png';

const DevSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive((prevState) => !prevState);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="DevSlider_devSlider___3iHn">
      <div className="Container_container__bOiDv DevSlider_container__KEQ3B">
        {/* title */}
        <p className="DevSlider_titleH1__tSlIQ ">DEV RELEASES</p>
        {/* paragraph */}
        <p className="DevSlider_descH1__s_ANO">
          Check out our daily dev releases to witness the electrifying progress
          of our development&nbsp;journey
        </p>

        {/* slider */}
        <div className="swiper swiper-initialized swiper-horizontal DevSlider_sliderDev__gcg4d swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            // style={{
            //   transitionDelay: '0ms',
            //   transitionDuration: '0ms',
            //   transform: `translate3d(calc(547px - ${windowWidth}px), 0px, 0px)`,
            // }}
          >
            {/* slide 1 */}
            <div
              className="swiper-slide DevSlider_swiperListItem__BKuEm swiper-slide-active"
              style={{ width: '451px' }}
            >
              <div className="ReleaseListItem_item__UgPOX">
                <a href="/dev-releases/dev-release-135">
                  <div className="ReleaseListItem_img__txHvp">
                    <h6>Dev Release- 135</h6>
                    <img
                      alt="Dev Release- 135"
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
                      src={devRelease}
                    />
                  </div>
                </a>
                <h6>Dev Release- 135</h6>
                <p className="ReleaseListItem_desc__5ROsP">
                  A Deep Dive into Platform Growth, Testnet Performance, and
                  Exciting New Features for the BlockDAG Community.
                </p>
                <span>October 8, 2024</span>
                <a
                  className="ReleaseListItem_button__unLRJ"
                  href="/dev-releases/dev-release-135"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M7.51318 15.1338L12.5132 10.1338L7.51318 5.13379"
                      stroke="url(#paint0_linear_2365_9317)"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2365_9317"
                        x1="16.667"
                        y1="-4.76225"
                        x2="1.41734"
                        y2="3.49447"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBFF25"></stop>
                        <stop offset="1" stopColor="#FF0000"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>

            {/* slide 2 */}
            <div
              className="swiper-slide DevSlider_swiperListItem__BKuEm swiper-slide-active"
              style={{ width: '451px' }}
            >
              <div className="ReleaseListItem_item__UgPOX">
                <a href="/dev-releases/dev-release-134">
                  <div className="ReleaseListItem_img__txHvp">
                    <h6>Dev Release- 134</h6>
                    <img
                      alt="Dev Release- 135"
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
                      src={devRelease}
                    />
                  </div>
                </a>
                <h6>Dev Release- 134</h6>
                <p className="ReleaseListItem_desc__5ROsP">
                  Seamless, Fast, and User-Friendly for Everyone
                </p>
                <span>October 7, 2024</span>
                <a
                  className="ReleaseListItem_button__unLRJ"
                  href="/dev-releases/dev-release-135"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M7.51318 15.1338L12.5132 10.1338L7.51318 5.13379"
                      stroke="url(#paint0_linear_2365_9317)"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2365_9317"
                        x1="16.667"
                        y1="-4.76225"
                        x2="1.41734"
                        y2="3.49447"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBFF25"></stop>
                        <stop offset="1" stopColor="#FF0000"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>

            {/* slide 3 */}
            <div
              className="swiper-slide DevSlider_swiperListItem__BKuEm swiper-slide-active"
              style={{ width: '451px' }}
            >
              <div className="ReleaseListItem_item__UgPOX">
                <a href="/dev-releases/dev-release-135">
                  <div className="ReleaseListItem_img__txHvp">
                    <h6>Dev Release- 133</h6>
                    <img
                      alt="Dev Release- 135"
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
                      src={devRelease}
                    />
                  </div>
                </a>
                <h6>Dev Release- 133</h6>
                <p className="ReleaseListItem_desc__5ROsP">
                  A Deep Dive into Platform Growth, Testnet Performance, and
                  Exciting New Features for the BlockDAG Community.
                </p>
                <span>October 4, 2024</span>
                <a
                  className="ReleaseListItem_button__unLRJ"
                  href="/dev-releases/dev-release-135"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M7.51318 15.1338L12.5132 10.1338L7.51318 5.13379"
                      stroke="url(#paint0_linear_2365_9317)"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2365_9317"
                        x1="16.667"
                        y1="-4.76225"
                        x2="1.41734"
                        y2="3.49447"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBFF25"></stop>
                        <stop offset="1" stopColor="#FF0000"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>

            {/* slide 4 */}
            <div
              className="swiper-slide DevSlider_swiperListItem__BKuEm swiper-slide-active"
              style={{ width: '451px' }}
            >
              <div className="ReleaseListItem_item__UgPOX">
                <a href="/dev-releases/dev-release-135">
                  <div className="ReleaseListItem_img__txHvp">
                    <h6>Dev Release- 135</h6>
                    <img
                      alt="Dev Release- 135"
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
                      src={devRelease}
                    />
                  </div>
                </a>
                <h6>Dev Release- 135</h6>
                <p className="ReleaseListItem_desc__5ROsP">
                  A Deep Dive into Platform Growth, Testnet Performance, and
                  Exciting New Features for the BlockDAG Community.
                </p>
                <span>October 8, 2024</span>
                <a
                  className="ReleaseListItem_button__unLRJ"
                  href="/dev-releases/dev-release-135"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M7.51318 15.1338L12.5132 10.1338L7.51318 5.13379"
                      stroke="url(#paint0_linear_2365_9317)"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2365_9317"
                        x1="16.667"
                        y1="-4.76225"
                        x2="1.41734"
                        y2="3.49447"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBFF25"></stop>
                        <stop offset="1" stopColor="#FF0000"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>

            {/* slide 5 */}
            <div
              className="swiper-slide DevSlider_swiperListItem__BKuEm swiper-slide-active"
              style={{ width: '451px' }}
            >
              <div className="ReleaseListItem_item__UgPOX">
                <a href="/dev-releases/dev-release-135">
                  <div className="ReleaseListItem_img__txHvp">
                    <h6>Dev Release- 135</h6>
                    <img
                      alt="Dev Release- 135"
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
                      src={devRelease}
                    />
                  </div>
                </a>
                <h6>Dev Release- 135</h6>
                <p className="ReleaseListItem_desc__5ROsP">
                  A Deep Dive into Platform Growth, Testnet Performance, and
                  Exciting New Features for the BlockDAG Community.
                </p>
                <span>October 8, 2024</span>
                <a
                  className="ReleaseListItem_button__unLRJ"
                  href="/dev-releases/dev-release-135"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M7.51318 15.1338L12.5132 10.1338L7.51318 5.13379"
                      stroke="url(#paint0_linear_2365_9317)"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2365_9317"
                        x1="16.667"
                        y1="-4.76225"
                        x2="1.41734"
                        y2="3.49447"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBFF25"></stop>
                        <stop offset="1" stopColor="#FF0000"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>

            {/* slide 6 */}
            <div
              className="swiper-slide DevSlider_swiperListItem__BKuEm swiper-slide-active"
              style={{ width: '451px' }}
            >
              <div className="ReleaseListItem_item__UgPOX">
                <a href="/dev-releases/dev-release-135">
                  <div className="ReleaseListItem_img__txHvp">
                    <h6>Dev Release- 135</h6>
                    <img
                      alt="Dev Release- 135"
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
                      src={devRelease}
                    />
                  </div>
                </a>
                <h6>Dev Release- 135</h6>
                <p className="ReleaseListItem_desc__5ROsP">
                  A Deep Dive into Platform Growth, Testnet Performance, and
                  Exciting New Features for the BlockDAG Community.
                </p>
                <span>October 8, 2024</span>
                <a
                  className="ReleaseListItem_button__unLRJ"
                  href="/dev-releases/dev-release-135"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M7.51318 15.1338L12.5132 10.1338L7.51318 5.13379"
                      stroke="url(#paint0_linear_2365_9317)"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_2365_9317"
                        x1="16.667"
                        y1="-4.76225"
                        x2="1.41734"
                        y2="3.49447"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBFF25"></stop>
                        <stop offset="1" stopColor="#FF0000"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* prev button */}
          <div className="swiper-button-prev swiper-button-disabled"></div>

          {/* next button */}
          <div className="swiper-button-next"></div>

          {/* count */}
          <div className="DevSlider_count__ISoZA" translate="no">
            1 / 6
          </div>
        </div>

        {/* button */}
        <a
          className="Button_button__mCT0h DevSlider_button__7vYBw Button_light__xmSX6"
          href="/dev-releases"
        >
          See All
        </a>
      </div>
    </section>
  );
};

export default DevSlider;

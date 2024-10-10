import React from 'react';

import left from '../assets/images/left.png';
import right from '../assets/images/right.png';
import iphone from '../assets/images/iphone/iphone.svg';
import status from '../assets/images/iphone/status-bar.svg';
import screenOne from '../assets/images/iphone/screen-1.png';
import screenTwo from '../assets/images/iphone/screen-2.png';
import ThreeDdgif from '../assets/images/3d.gif';
import swipe from '../assets/images/iphone/swipe.png';
import playStore from '../assets/images/walletPaymentIcons/play-store.svg';
import appStore from '../assets/images/walletPaymentIcons/app-store.svg';

const BlockdagApp = () => {
  return (
    <section className="BlockdagApp_blockdagApp__L_jTo">
      <div className="Container_container__bOiDv">
        <div className="BlockdagApp_presale__nrvUZ">
          <span className="BlockdagApp_titleH1__lO0Ny ">PRESALE</span>

          <div className="BlockdagApp_contentPresale__I7fra">
            <h5>
              <span>$86.6M </span>
              <span>Raised So Far.</span>
            </h5>
            <p>
              Join the BlockDAG crypto presale, engage with the project, and see
              your contribution grow to new heights.
            </p>
            <div className="BlockdagApp_buttons__ZjjRI">
              <a
                className="Button_button__mCT0h  Button_black__Fjplo"
                href="https://purchase2.blockdag.network"
              >
                Join Presale
              </a>
              <a
                className="Button_button__mCT0h  Button_transparent__l4UOb"
                href="https://purchase2.blockdag.network/#how-to-buy"
              >
                How to Buy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Container_container__bOiDv BlockdagApp_container__f7uG4">
        <div className="BlockdagApp_content__U5OEd">
          <div className="BlockdagApp_leftImage__NvGub">
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
              src={left}
            />
          </div>

          <div className="BlockdagApp_iphone__z3xZr">
            <div className="MobileApp_mobileapp__DtgrC  ">
              <div className="MobileApp_statusBar__6GyLD">
                <img
                  alt="blockdag"
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
                  src={status}
                />
              </div>

              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="MobileApp_screen__3EmCH "
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: '0px',
                  color: 'transparent',
                }}
                src={screenOne}
              />

              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="MobileApp_screen__3EmCH MobileApp_stepActive__nCh8A"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: '0px',
                  color: 'transparent',
                }}
                src={screenTwo}
              />
              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="MobileApp_screen__3EmCH MobileApp_stepActive__nCh8A"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: '0px',
                  color: 'transparent',
                }}
                src={screenTwo}
              />
              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                className="MobileApp_screen__3EmCH MobileApp_stepActive__nCh8A"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  inset: '0px',
                  color: 'transparent',
                }}
                src={screenTwo}
              />

              <div className="MobileApp_screens__iUqHe ">
                <div className="Opening_opening__YPG_e">
                  <div className="Opening_content__NE1pQ">
                    <div className="Opening_logo__EvrbA">
                      <div className="Opening_img__pWv2q">
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
                          src={ThreeDdgif}
                        />
                      </div>
                      <span>BlockDAG</span>
                    </div>
                    <h2>Crypto Mining, For All</h2>
                    <p>
                      Experience the simplest and most rewarding crypto mining
                      from anywhere.
                    </p>
                  </div>

                  <div className="Opening_swipe__u_LYs">
                    <div className="Opening_getStarted__Czl7w">SWIPE ME</div>
                    <button
                      style={{ backgroundImage: `url(${swipe})`, transform: 'translateX(0)'  }}
                      className="Opening_swipeButton__zna5b trans"
                    ></button>
                  </div>
                </div>
              </div>
            </div>

            <span className="BlockdagApp_iphoneBg__lyMnL">
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
                src={iphone}
              />
            </span>
          </div>

          <div className="BlockdagApp_rightImage__Er3J0">
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
              src={right}
            />
          </div>
        </div>
      </div>

      <div className="BlockdagApp_storeArea__ypyP9">
        <h6>Download the X1 Miner App!</h6>

        <div className="BlockdagApp_stores__8qjj_">
          <div
            className="DownloadApp_downloadApp__QmHSo DownloadApp_big__zRIJb"
             style={{ display: 'flex', flexWrap: 'wrap-reverse', gap: '200px' }}
          >
            <a
              target="_blank"
              href="https://apps.apple.com/us/app/blockdag-x1/id6503609082"
            >
              <img
                alt="BlockDAG App Store"
                loading="lazy"
                width="120"
                height="40"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src={appStore}
              />
              <p className="DownloadApp_beta__zK1zT">Beta</p>
            </a>

            <a
              target="_blank"
              href="https://apk.blockdagnetwork.io/BlockDAGv1.4.apk"
            >
              <img
                alt="BlockDAG Play Store"
                loading="lazy"
                width="120"
                height="40"
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src={playStore}
              />
              <p className="DownloadApp_beta__zK1zT">Beta</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockdagApp;

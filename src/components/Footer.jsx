import React from 'react';
import Threedgif from '../assets/images/3dgif.png';
import ThreeDdgif from '../assets/images/3d.gif';

import appStore from '../assets/images/walletPaymentIcons/app-store.svg';
import playStore from '../assets/images/walletPaymentIcons/play-store.svg';
import dortmund from '../assets/images/footer-dortmund.png';
import milan from '../assets/images/footer-milan.png';

import telegram from '../assets/images/socials/telegram.svg';
import discord from '../assets/images/socials/discord.svg';
import facebook from '../assets/images/socials/facebook.svg';
import insta from '../assets/images/socials/insta.svg';
import linkedin from '../assets/images/socials/linkedin.svg';
import medium from '../assets/images/socials/medium.svg';
import twitter from '../assets/images/socials/x.svg';
import youtube from '../assets/images/socials/youtube.svg';

const Footer = () => {
  return (
    <footer className="Footer_footer__L2Zk0">
      <div
        id=""
        className="Container_container__bOiDv Footer_container__44wRa Container_large__G1Q2W "
      >
        <div className="Footer_mid__hjwSf">
          <div className="Footer_midNewContent__ki6eA">
            <a className="Footer_logo__TeKc2" href="/">
              <div className="Footer_img__iArxK">
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
            </a>
            <p className="Footer_paragraph__30xOv">
              BlockDAG is a Layer 1 proof of work consensus mechanism that
              evolves the crypto sphere with a cutting-edge Directed Acyclic
              Graph structure building on the foundations of Bitcoin
            </p>
            <h6>Download the X1 Miner App!</h6>
            <div className="DownloadApp_downloadApp__QmHSo ">
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
                  style={{
                    color: 'transparent',
                  }}
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
                  style={{
                    color: 'transparent',
                  }}
                  src={playStore}
                />
                <p className="DownloadApp_beta__zK1zT">Beta</p>
              </a>
            </div>
          </div>
          <div className="Footer_midLeft__fpfeh">
            <div className="Footer_midItem__DVrBf">
              <h5>Sitemap</h5>
              <div>
                <ul className="Footer_leftUl__w5mm9">
                  <li className="">
                    <a href="/../blockdag-whitepaper.pdf" target="_blank">
                      DAGpaper v1
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="/../blockdag-technical-whitepaper.pdf"
                      target="_blank"
                    >
                      DAGpaper v2
                    </a>
                  </li>
                  <li className="">
                    <a href="https://wiki.blockdag.network/" target="_blank">
                      Wiki
                    </a>
                  </li>
                  <li className="">
                    <a href="/tokenomics">Tokenomics</a>
                  </li>
                  <li className="">
                    <a href="/#roadmap">Roadmap</a>
                  </li>
                  <li className="">
                    <a href="/presskit">Press Kit</a>
                  </li>
                  <li className="">
                    <a href="/validation">Validation</a>
                  </li>
                </ul>
                <ul className="Footer_leftUl__w5mm9">
                  <li className="">
                    <a target="" href="/crypto-mining-rigs">
                      products
                    </a>
                  </li>
                  <li className="">
                    <a target="" href="/crypto-mining-calculator">
                      calculator
                    </a>
                  </li>
                  <li className="d-md">
                    <a target="" href="/private-clients">
                      Private Clients
                    </a>
                  </li>
                  <li className="">
                    <a target="" href="/news">
                      News
                    </a>
                  </li>
                  <li className="">
                    <a target="" href="/blog">
                      Blog
                    </a>
                  </li>
                  <li className="">
                    <a target="" href="/pillars">
                      Pillars
                    </a>
                  </li>
                  <li className="">
                    <a target="" href="/keynote">
                      Keynote
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Footer_midItem__DVrBf">
              <h5>Legals</h5>
              <ul className="undefined Footer_leftUl__w5mm9">
                <li>
                  <a href="/terms">Terms of Use</a>
                </li>
                <li>
                  <a href="/cookie">Cookie Policy</a>
                </li>
                <li>
                  <a href="/privacy">Privacy Policy</a>
                </li>
                <h5 className="Footer_mobileTextCenter__fazwX d-sm">
                  Partnership &amp; Sponsors
                </h5>
                <div className="Footer_partnerships___LTSQ">
                  <div className="Footer_partnershipsImg__p6gfn d-sm">
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
                      src="/images/footer-dortmund.png"
                    />
                  </div>
                  <div className="Footer_line__fr3H4 d-sm"></div>
                  <div className="Footer_partnershipsImg__p6gfn d-sm">
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
                      src="/images/footer-milan.png"
                    />
                  </div>
                </div>
              </ul>
            </div>
          </div>

          <div>
            <div className="Footer_midItem__DVrBf">
              <div style={{ flexDirection: 'column', gap: '0' }}>
                <h5 className="Footer_mobileTextCenter__fazwX">Socials</h5>
                <ul className="Footer_socials__G2uYj">
                  <li>
                    <a
                      target="_blank"
                      href="https://t.me/blockDAGnetworkOfficial"
                    >
                      <img src={telegram} alt="telegram" />{' '}
                      <span>telegram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://twitter.com/blockdagnetwork"
                    >
                      <img src={twitter} alt="twitter" /> <span>twitter</span>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://discord.gg/Q7BxghMVyu">
                      <img src={discord} alt="Discord" /> <span>Discord</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/@BlockDAGofficial"
                    >
                      <img src={youtube} alt="youtube" /> <span>youtube</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=61557699651392&amp;mibextid=LQQJ4d"
                    >
                      <img src={facebook} alt="facebook" />{' '}
                      <span>facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/blockdagnetwork/"
                    >
                      <img src={insta} alt="instagram" /> <span>instagram</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://medium.com/@BlockDAGNetwork1"
                    >
                      <img src={medium} alt="Medium" /> <span>Medium</span>
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/blockdag-network/"
                    >
                      <img src={linkedin} alt="LinkedIn" />{' '}
                      <span>LinkedIn</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="Footer_midItem__DVrBf d-md">
              <div style={{ flexDirection: 'column', gap: '0' }}>
                <h5 className="Footer_mobileTextCenter__fazwX">
                  Partnership &amp; Sponsors
                </h5>
                <div className="Footer_partnerships___LTSQ">
                  <div className="Footer_partnershipsImg__p6gfn d-md">
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
                      src={dortmund}
                    />
                  </div>
                  <div className="Footer_line__fr3H4 d-md"></div>
                  <div className="Footer_partnershipsImg__p6gfn d-md">
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
                      src={milan}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_bot___jWCs">
        <p>Copyright © BlockDAG</p>
        <p>
          Disclaimer: Cryptocurrency may be unregulated in your jurisdiction.
          The value of cryptocurrencies may fluctuate. Profits may be subject to
          capital gains or other taxes applicable in your jurisdiction
        </p>
      </div>
    </footer>
  );
};

export default Footer;

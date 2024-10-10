import React, { useState } from 'react';

import Threedgif from '../assets/images/3dgif.png';
import ThreeDdgif from '../assets/images/3d.gif';

const Header = () => {
  const [nav, setNav] = useState(false);

  const showNav = () => {
    setNav(!nav);
  };
  console.log(nav);
  return (
    <header className="Header_header__LV3JK">
      <div className="Header_headerArea__9p6pg">
        <div
          id=""
          className="Container_container__bOiDv Header_container__cRP9I Container_large__G1Q2W"
        >
          <a className="Header_logo__v35H3 d-md" href="/">
            <div className="Header_img__hZAwB">
              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                src={Threedgif}
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: '0',
                  right: '0',
                  top: '0',
                  bottom: '0',
                  color: 'transparent',
                }}
              />
            </div>
            <span>BlockDAG </span>
          </a>
          <a className="Header_logo__v35H3 undefined d-sm" href="/">
            <div className="Header_img__hZAwB">
              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                src={ThreeDdgif}
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: '0',
                  right: '0',
                  top: '0',
                  bottom: '0',
                  color: 'transparent',
                }}
              />
            </div>
            <span>BlockDAG</span>
          </a>
          <div className="Header_right__p6KnW">
            <nav
              className={`Header_nav__W7Lqw ${
                nav ? 'Header_activeNav__Jq_Wu' : ''
              }`}
            >
              <ul className="Header_topNavUl__D5YqH d-md">
                <li className="Header_navListItem__VyqFr">
                  <a
                    className=""
                    href="https://wiki.blockdag.network/"
                    target="_blank"
                  >
                    Wiki
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a className="" href="https://bdagscan.com/ " target="_blank">
                    Explorer
                    <span className="Header_newButton__xpEKi">New</span>
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a className="" href="/testnet" target="">
                    Testnet
                    <span className="Header_newButton__xpEKi">New</span>
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a
                    className=""
                    href="https://ide.blockdag.network/"
                    target="_blank"
                  >
                    IDE <span className="Header_newButton__xpEKi">New</span>
                  </a>
                </li>
              </ul>
              <ul className="Header_navUl__UVudD">
                <div className="Header_closeArea__99_GL d-sm">
                  <a className="Header_closeAreaLogo__432zK d-sm" href="/">
                    <div className="Header_img__hZAwB">
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
                    <span>BlockDAG</span>
                  </a>
                  <svg
                  onClick={showNav}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="Header_closeAreaLinks__ZltVh d-sm">
                  <a
                    target="_blank"
                    className="Header_closeAreaLink__gv_mc d-sm"
                    href="https://wiki.blockdag.network/"
                  >
                    Wiki{' '}
                  </a>
                  <a
                    target="_blank"
                    className="Header_closeAreaLink__gv_mc d-sm"
                    href="https://bdagscan.com/ "
                  >
                    Explorer
                    <span className="Header_newButton__xpEKi">New</span>
                  </a>
                  <a
                    className="Header_closeAreaLink__gv_mc d-sm"
                    href="/testnet"
                  >
                    Testnet
                    <span className="Header_newButton__xpEKi">New</span>
                  </a>
                  <a
                    target="_blank"
                    className="Header_closeAreaLink__gv_mc d-sm"
                    href="https://ide.blockdag.network/"
                  >
                    IDE <span className="Header_newButton__xpEKi">New</span>
                  </a>
                </div>
                <li className="Header_navListItem__VyqFr">
                  <a className="" href="/keynote" target="">
                    Keynotes{' '}
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a className="" href="/dev-releases" target="">
                    Dev Releases{' '}
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a href="/crypto-mining-rigs" target="">
                    Products{' '}
                  </a>
                  <ul className="Header_additionalList__oa8Zq false">
                    <li>
                      <a href="/tokenomics" target="">
                        BDAG Coins
                      </a>
                    </li>
                    <li>
                      <a href="/product/blockdag-card" target="">
                        BlockDAG Card
                      </a>
                    </li>
                    <li>
                      <a href="/product/tgtapminer" target="">
                        TG Tap Miner
                      </a>
                    </li>
                    <li>
                      <a href="/product/blockdagx1" target="">
                        BlockDAG X1
                      </a>
                    </li>
                    <li>
                      <a href="/product/blockdagx10" target="">
                        BlockDAG X10
                      </a>
                    </li>
                    <li>
                      <a href="/product/blockdagx30" target="">
                        BlockDAG X30
                      </a>
                    </li>
                    <li>
                      <a href="/product/blockdagx100" target="">
                        BlockDAG X100
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a className="" href="/team" target="">
                    Team{' '}
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a className="" href="/giveaway" target="">
                    WIN $1M USD{' '}
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <a className="" href="/partners" target="">
                    Partners{' '}
                  </a>
                </li>
                <li className="Header_navListItem__VyqFr">
                  <span
                    className="Header_nohref__UFOM0 undefined"
                    href="#"
                    target=""
                  >
                    Mechanics
                  </span>
                  <ul className="Header_additionalList__oa8Zq false">
                    <li>
                      <a href="/crypto-mining-calculator" target="">
                        Calculator
                      </a>
                    </li>
                    <li>
                      <a href="/pillars" target="">
                        Pillars
                      </a>
                    </li>
                    <li>
                      <a href="/news" target="">
                        News
                      </a>
                    </li>
                    <li>
                      <a href="/blog" target="">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="/presskit" target="">
                        Press Kit
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="Header_navListItem__VyqFr d-sm">
                  <a className="" href="/private-clients" target="">
                    Private Clients
                  </a>
                </li>
                {/* <div className="LangSwitcher_langSwitcher__4f3z2">
                  <div
                    translate="no"
                    className="LangSwitcher_googletranslate__mMxWm LangSwitcher_disable__L6f2N"
                  >
                    <span>
                      <span>
                        <img
                          alt="BlockDAG"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          src="/images/flags/gb.png"
                        />
                      </span>
                      English
                    </span>
                    <ul className="LangSwitcher_languageList__8F06r">
                      <span>
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/gb.png"
                          />
                        </span>
                        English
                      </span>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/sa.png"
                          />
                        </span>
                        Arabic
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/fr.png"
                          />
                        </span>
                        French
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/de.png"
                          />
                        </span>
                        German
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/in.png"
                          />
                        </span>
                        Hindi
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/id.png"
                          />
                        </span>
                        Indonesian
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/pt.png"
                          />
                        </span>
                        Portuguese
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/ru.png"
                          />
                        </span>
                        Russian
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/es.png"
                          />
                        </span>
                        Spanish
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/th.png"
                          />
                        </span>
                        Thai
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            src="/images/flags/tr.png"
                          />
                        </span>
                        Turkish
                      </a>
                      <a className="mx-3 text-blue-300 cursor-pointer hover:underline">
                        <span>
                          <img
                            alt="BlockDAG"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                           
                            src="/images/flags/vn.png"
                          />
                        </span>
                        Vietnamese
                      </a>
                    </ul>
                  </div>
                  <div className="LangSwitcher_overlay__og4tK"></div>
                </div> */}
              </ul>
              <div className="Header_overlay___6Zrj"></div>
            </nav>
            <div className="Header_rightBar__wdIRX">
              <button
                type="button"
                className="Button_button__mCT0h d-md Button_black__Fjplo"
              >
                Buy
              </button>
              <button
                type="button"
                className="Button_button__mCT0h d-sm Button_black__Fjplo"
              >
                Buy
              </button>
              <div onClick={showNav} className="Header_hamburger__FdZOH">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M9 18H21"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

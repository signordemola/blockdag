import React from 'react';

import tokePic from '../assets/images/tokenomics.svg';

const Tokenomics = () => {
  return (
    <section className="Tokenomics_tokenomics__kaCyZ">
      <div className="Container_container__bOiDv Tokenomics_container__lF7SC  ">
        {/* left */}
        <div className="Tokenomics_content__Jn2w6">
          {/* title */}
          <div className="Tokenomics_title__6cazv">
            <h2>TOKENOMICS</h2>
            <p>
              BlockDAG coin (BDAG) has a supply of 150 billion coins, a
              testament to its exclusivity and value preservation.
            </p>
          </div>

          {/* image */}
          <div className="Tokenomics_img__kW9it d-sm">
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
              src={tokePic}
            />
          </div>

          <div className="Tokenomics_table__Vx3E0">
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6 Tokenomics_empty__eCqg2"></div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_col2__UdXVE Tokenomics_center__QpxpD">
                COINS
              </div>
            </div>
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6 Tokenomics_empty__eCqg2"></div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                BILLION
              </div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                %
              </div>
            </div>
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6">Presale</div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                50
              </div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                33.3%
              </div>
            </div>
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6">Team</div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                1.5
              </div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                1.0%
              </div>
            </div>
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6">Miners</div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                75
              </div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                50.0%
              </div>
            </div>
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6">Community % Ecosystem</div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                19
              </div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                12.7%
              </div>
            </div>
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6">Liquidity</div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                4.5
              </div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                3.0%
              </div>
            </div>
            <div className="Tokenomics_tr__P6zT9">
              <div className="Tokenomics_td__v5gV6">TOTAL</div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                150
              </div>
              <div className="Tokenomics_td__v5gV6 Tokenomics_center__QpxpD">
                100%
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="Tokenomics_img__kW9it d-md">
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
            src={tokePic}
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;

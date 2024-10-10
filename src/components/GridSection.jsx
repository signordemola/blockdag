import React from 'react';

import coin from '../assets/images/grid/coin.svg';
import proof from '../assets/images/grid/proof.svg';
import digital from '../assets/images/grid/digital.svg';
import speedometer from '../assets/images/grid/speedometer.svg';
import security from '../assets/images/grid/security.svg';

const GridSection = () => {
  return (
    <section className="GridSection_grid__A2uV8">
      <div className="Container_container__bOiDv GridSection_titleContainer__DZp5W  ">
        <h2>CORE ATTRIBUTES</h2>
      </div>

      <div className="Container_container__bOiDv GridSection_attributesContainer__A5_C2  ">
        <div className="GridSection_top__C_lyx">
          <div className="GridSection_box__ohrSl GridSection_box_1__8P8yg">
            <div className="GridSection_image__uj1Ff">
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
                src={coin}
              />
            </div>
            <div className="GridSection_texts__HecwR">
              <h3 className="GridSection_title__JnS2I">Coin Acquisition</h3>
              <p className="GridSection_paragraph___F9Cg">
                Be a part of our project early on and witness your contribution
                increase in value as the project progresses. Upon listing on
                major exchanges, your early contributions will begin their
                journey as long-term assets.
              </p>
            </div>
          </div>

          <div className="GridSection_box__ohrSl GridSection_box_2__x3jTC">
            <div className="GridSection_image__uj1Ff">
              <img
                alt="BlockDAG"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                src={proof}
              />
            </div>
            <div className="GridSection_texts__HecwR">
              <h3 className="GridSection_title__JnS2I">Mining Rigs</h3>
              <p className="GridSection_paragraph___F9Cg">
                Experience the simplest crypto mining with BlockDAG. Pick what
                suits you best from our three mining options. The BlockDAG X10,
                perfect for beginners, can mine 200 BDAG coins daily. The X30
                mines 600 coins a day while the X100, can mine up to 2,000 BDAG
                coins daily, best for high returns and enterprise-scale
                operations.{' '}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="GridSection_box__ohrSl GridSection_box_3__YWR3Q">
            <div className="GridSection_image__uj1Ff">
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
                src={digital}
              />
            </div>
            <div className="GridSection_texts__HecwR">
              <h3 className="GridSection_title__JnS2I">Mobile Mining</h3>
              <p className="GridSection_paragraph___F9Cg">
                The BlockDAG X1 is the simplest way you can mine crypto. You can
                start mining BDAG on your smartphone with no drain on data or
                battery life. Enjoy easy sign-ups, referral codes, and progress
                reports while you’re on the app.
              </p>
            </div>
          </div>
        </div>

        <div className="GridSection_bot__FU2TT">
          <div className="GridSection_box__ohrSl GridSection_box_4__BjCjh">
            <div className="GridSection_image__uj1Ff">
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
                src={speedometer}
              />
            </div>

            <div className="GridSection_texts__HecwR">
              <h3 className="GridSection_title__JnS2I">Speed, Redefined</h3>
              <p className="GridSection_paragraph___F9Cg">
                BlockDAG is the fastest PoW blockchain with speed of 10 blocks
                per second. With high speed we can power up everything that
                comes our way, from high power DeFi protocols to flashy web3
                browser and wallet you love.
              </p>
            </div>
          </div>

          <div className="GridSection_box__ohrSl GridSection_box_5__5bwP3">
            <div className="GridSection_image__uj1Ff">
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
                src={security}
              />
            </div>
            <div className="GridSection_texts__HecwR">
              <h3 className="GridSection_title__JnS2I">Security, Reimagined</h3>
              <p className="GridSection_paragraph___F9Cg">
                Our innovative look at network security enables us to maintain
                high security without compromises on speed or decentralization.
                With our hybrid consensus mechanism, security is first priority
                and will always be the best in class with zero block wastage and
                strong cryptographic algorithms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;

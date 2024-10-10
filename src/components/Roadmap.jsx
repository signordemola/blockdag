import { useInView } from 'react-intersection-observer';

const Roadmap = () => {
  const { ref: firstRef, inView: divOneInview } = useInView({
    threshold: 0.5,
  });
  const { ref: secondRef, inView: divTwoInview } = useInView({
    threshold: 0.5,
    delay: 1000,
  });
  const { ref: thirdRef, inView: divThreeInview } = useInView({
    threshold: 0.5,
    delay: 1000,
  });
  const { ref: fourthRef, inView: divFourInview } = useInView({
    threshold: 0.5,
    delay: 1000,
  });

  return (
    <section className="Roadmap_roadmap__FVpYA">
      <div className="Container_container__bOiDv Roadmap_container__WYP_X">
        <div className="Roadmap_title__0D7vB">
          <h2>ROADMAP</h2>
          <p>Build the Future with BDAG coins</p>
        </div>

        <div className="Roadmap_timeline__jY2Pd">
          <div>
            <div className="Roadmap_phaseBox__T5UTO Roadmap_active__vZpeN Roadmap_phaseOne__ESL_h">
              <div ref={firstRef} className="Roadmap_number__wptsf">
                1
              </div>
              <h3 className="Roadmap_phaseTitle__JCsNf">Launch Phase</h3>
              <div>
                <ul>
                  <li>
                    To develop a P2P engine and implement algorithms that deal
                    with the establishment of the infrastructure of the project.
                  </li>
                  <li>
                    Optimize the workflows, research, and design the UI
                    concerning the user research and practice exploration for
                    Blockchain Explorer.
                  </li>
                  <li>
                    To develop the UI design for the X1 mining Application,
                    define the layouts and user interface.
                  </li>
                  <li>
                    Conduct the testing of applications, audit BDAG Smart
                    contracts, and execute marketing strategies, including 10%
                    referral bonuses for investors.
                  </li>
                </ul>
              </div>
            </div>
            <div
              ref={thirdRef}
              className={`Roadmap_phaseBox__T5UTO ${
                thirdRef && 'Roadmap_active__vZpeN'
              } Roadmap_phaseThree__PpH3C`}
            >
              <div className="Roadmap_number__wptsf">3</div>
              <h3 className="Roadmap_phaseTitle__JCsNf">Pre-Launch Phase</h3>
              <div>
                <ul>
                  <li>
                    Developing a command line for direct blockchain
                    interactions, EVM, and wallet integration through the Meta
                    Mask method.
                  </li>
                  <li>
                    Incorporate visuals, testnet faucets, and detailed
                    documentation for tokenomics.
                  </li>
                  <li>
                    Enable wallet functionalities and focus on mainnet
                    development and beta testing.
                  </li>
                  <li>
                    Establish a technical support team to analyze testing and
                    conduct training sessions.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="Roadmap_scrollBar__cv_Zx">
            <div className="Roadmap_progress__N6EAe">
              <div className="Roadmap_dot__A_10_ Roadmap_dotOne__XHOrN Roadmap_active__vZpeN"></div>
              <div
                className={`Roadmap_dot__A_10_ Roadmap_dotTwo__MfYlr ${
                  divTwoInview && 'Roadmap_active__vZpeN'
                }`}
              ></div>
              <div
                className={`Roadmap_dot__A_10_ Roadmap_dotThree__dEc6W ${
                  divThreeInview && 'Roadmap_active__vZpeN'
                }`}
              ></div>
              <div
                className={`Roadmap_dot__A_10_ Roadmap_dotFour__oQQCN ${
                  divFourInview && 'Roadmap_active__vZpeN'
                }`}
              ></div>
              <span></span>
            </div>
          </div>

          <div>
            <div
              className={`Roadmap_phaseBox__T5UTO ${
                divTwoInview && 'Roadmap_active__vZpeN'
              } Roadmap_phaseTwo__yF3tt`}
            >
              <div ref={secondRef} className="Roadmap_number__wptsf">
                2
              </div>
              <h3 className="Roadmap_phaseTitle__JCsNf">Development Phase</h3>
              <div>
                <ul>
                  <li>
                    Integration of proof of work consensus mechanism and
                    protocols for node communication.
                  </li>
                  <li>
                    Implement data structuring algorithms, UI-based framework
                    deployment, and modular architecture design.
                  </li>
                  <li>
                    Create onboarding screens and other functionalities and
                    develop user flows and UI components.
                  </li>
                  <li>
                    Production of BDAG-optimized mining hardware, forming
                    partnerships with tech providers &amp; updating the BDAG
                    community to ensure better consumer relationships.
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`Roadmap_phaseBox__T5UTO ${
                divFourInview && 'Roadmap_active__vZpeN'
              } Roadmap_phaseFour__taTBc`}
            >
              <div ref={fourthRef} className="Roadmap_number__wptsf">
                4
              </div>
              <h3 className="Roadmap_phaseTitle__JCsNf">Final Phase</h3>
              <div>
                <ul>
                  <li>
                    Launch the development network for initial testing for
                    security audits and avoid bugs.
                  </li>
                  <li>
                    Conduct external beta testing, implement BlockDAG scanner
                    features, and add support for NFT smart contracts.
                  </li>
                  <li>
                    Developing customizable settings for the X1 miner app,
                    determining the presale, releasing mining software, and
                    promoting the X1 miner app.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* fake timeline */}
      </div>

      <div className="Roadmap_btnArea__d0vQ7">
        <a href="../launch-roadmap.pdf" download="Launch Roadmap">
          Download Roadmap
        </a>
      </div>
    </section>
  );
};

export default Roadmap;

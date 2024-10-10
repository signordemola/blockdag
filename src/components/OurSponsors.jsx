import React from 'react';

import dortmund from '../assets/images/dortmund-mini.svg';
import milan from '../assets/images/inter-milan-mini.svg';

const OurSponsors = () => {
  return (
    <section className="OurSponsors_section__QYX0M">
      <div className="ExplanationSection_explanationSection__IZQdf">
        <div className="Container_container__bOiDv ExplanationSection_container___rJl4  ">
          <div className="ExplanationSection_content__NsJxh ExplanationSection_center__u7206">
            <h2 className=" ExplanationSection_mediumTitle__Zh3hY">
              Our Partners
            </h2>
            <p style={{ width: '100%', maxWidth: '100%' }}></p>
          </div>
        </div>
      </div>

      <div className="Container_container__bOiDv OurSponsors_container__Eo5UM  ">
        <div className="OurSponsors_content__msef_">
          <div className="OurSponsors_boxes__V2DTN">
            <div className="OurSponsors_img__eA6tY">
              <img
                alt="Borussia Dortmund"
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
                src={dortmund}
              />
            </div>

            <div className="OurSponsors_img__eA6tY">
              <img
                alt="Inter Milan"
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
                src={milan}
              />
            </div>
          </div>
        </div>

        <a
          href="/partners"
          className="Button_button__mCT0h OurSponsors_button__bnEtD Button_light__xmSX6"
        >
          Learn More About Our Partners
        </a>
      </div>
    </section>
  );
};

export default OurSponsors;

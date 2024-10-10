import React from 'react';

import youtube from '../assets/images/youtube.png';
import star from '../assets/images/star.svg';

const YoutubeSection = () => {
  return (
    <section className="YoutubeSection_youtubeSection__PrioZ">
      <div className="Container_container__bOiDv YoutubeSection_container__Ka8aG  ">
        <div className="YoutubeSection_youtubeImgArea__NyfVo">
          <div className="YoutubeSection_youtubeImg__Om8tc">
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
              src={youtube}
            />
          </div>

          <div className="YoutubeSection_reviewsArea__YIjVd">
            <p>Youtube Reviews</p>
            <div className='className="YoutubeSection_stars__zGQH_"'>
              <span className="YoutubeSection_star__dHqn0">
                <img
                  alt="BlockDAG"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  src={star}
                />
              </span>
              <span className="YoutubeSection_star__dHqn0">
                <img
                  alt="BlockDAG"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  src={star}
                />
              </span>
              <span className="YoutubeSection_star__dHqn0">
                <img
                  alt="BlockDAG"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  src={star}
                />
              </span>
              <span className="YoutubeSection_star__dHqn0">
                <img
                  alt="BlockDAG"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  src={star}
                />
              </span>
              <span className="YoutubeSection_star__dHqn0">
                <img
                  alt="BlockDAG"
                  loading="lazy"
                  decoding="async"
                  data-nimg="fill"
                  src={star}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="Container_container__bOiDv  Container_large__G1Q2W ">
        <div
          id="youtubeSwiper"
          className="swiper swiper-initialized swiper-horizontal YoutubeSection_sliderYoutube__mcQss swiper-backface-hidden"
        >
          <div className="swiper-wrapper">
            {/* 1 */}
            <div
              className="swiper-slide swiper-slide-active"
              style={{ maxWidth: '609.5px' }}
            >
              <div className="YoutubeSection_videoArea__5fbBn">
                <iframe
                  width="845"
                  height="480"
                  src="https://www.youtube.com/embed/IgulxtFgpy8"
                  title="DON'T MISS OUT ON THE BLOCKDAG PRESALE!!🔥 THIS ONE'S ON OUR UP NEXT RADAR TO MOON IN 2024!!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>

            {/* 2 */}
            <div
              className="swiper-slide swiper-slide-next"
              style={{ maxWidth: '609.5px' }}
            >
              <div className="YoutubeSection_videoArea__5fbBn">
                <iframe
                  width="845"
                  height="480"
                  src="https://www.youtube.com/embed/sk5UiXQYGTI"
                  title="DON'T MISS OUT ON THE BLOCKDAG PRESALE!!🔥 THIS ONE'S ON OUR UP NEXT RADAR TO MOON IN 2024!!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>

            {/* 3 */}
            <div
              className="swiper-slide swiper-slide-next"
              style={{ maxWidth: '609.5px' }}
            >
              <div className="YoutubeSection_videoArea__5fbBn">
                <iframe
                  width="845"
                  height="480"
                  src="https://www.youtube.com/embed/H5qP8kmShFM"
                  title="DON'T MISS OUT ON THE BLOCKDAG PRESALE!!🔥 THIS ONE'S ON OUR UP NEXT RADAR TO MOON IN 2024!!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>

            {/* 4 */}
            <div className="swiper-slide" style={{ maxWidth: '609.5px' }}>
              <div className="YoutubeSection_videoArea__5fbBn">
                <iframe
                  width="845"
                  height="480"
                  src="https://www.youtube.com/embed/5VOtALylPQc"
                  title="DON'T MISS OUT ON THE BLOCKDAG PRESALE!!🔥 THIS ONE'S ON OUR UP NEXT RADAR TO MOON IN 2024!!"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>

          {/* prev btn */}
          <div
            className="swiper-button-prev swiper-button-disabled"
            //  style={{ backgroundImage: `url(${left})`, backgroundRepeat: 'no-repeat' }}
          ></div>

          {/* next btn */}
          <div className="swiper-button-next"></div>

          {/* count */}
          <div className="YoutubeSection_count__0NRUx" translate="no">
            1/4
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeSection;

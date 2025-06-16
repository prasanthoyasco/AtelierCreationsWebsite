import TestimoIconOne from "../src/assets/testinonial/testimo-iocn-1.svg";
import TestimoIconTwo from "../src/assets/testinonial/testimo-iocn-2.svg";
import Ratings from "../src/assets/testinonial/ratings.svg";
import ReviwersImg from "../src/assets/testinonial/Image.png";

import Testimonial2 from "../src/assets/testinonial/testimonial2.jpg"
import Testimonial3 from "../src/assets/testinonial/testimonial3.jpg"
import Testimonial4 from "../src/assets/testinonial/testimonial4.jpg"
import Testimonial5 from "../src/assets/testinonial/testimonial5.jpg"
import Testimonial6 from "../src/assets/testinonial/testimonial6.jpg"
import Testimonial7 from "../src/assets/testinonial/testimonial7.jpg"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Testimonial = () => {
  return (
    <div className="swiper-sec ">
      <div className="tit-wraper-2">
        <span className="tit-sub">
          <div>//</div> Testimonial
        </span>
        <h3 className="what-we-do-secondry-tit-2">
        Best SEO Service Agency & Digital Marketing Company 
        </h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module
        spaceBetween={0}
        slidesPerView={2}
        loop={true}
        autoplay={{
          delay: 3000,   // Delay between slides (in ms)
          disableOnInteraction: true,  // Keep autoplay running after user interactions
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconOne} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">infinity dosa </div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
              Working with Atelier Creations has been a game-changer for our business! Their team brought our brand vision to life with stunning designs and spot-on marketing strategies. We saw a huge boost in engagement and sales. If you need top-notch branding and marketing services, these guys are the real deal. Highly recommended!

              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={Testimonial2} alt="Reviewer" height="" width="" loading="lazy" title="" />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">Rohit Mehta</h3>
                  <p className="reviwers-position">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconTwo} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">Innovify</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
              Atelier Creations totally nailed it for us! Their designs are spot-on, and their marketing advice? Absolute gold. We've seen our engagement and sales skyrocket. Honestly, if you need some killer branding and marketing, look no further. These folks know what they're doing.
              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={Testimonial3} alt="Reviewer" height="" width="" loading="lazy" title=""  />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">Priya Sharma</h3>
                  <p className="reviwers-position">Lead Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconOne} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">Charlotte Hayes</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
              These folks absolutely nailed it! 🌟 Their creativity and marketing insights totally blew us away. Our brand has never looked better, and the impact on our business has been incredible. If you need killer branding and marketing, these are the people to go to. Can't thank them enough! 🙌

              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={Testimonial4} alt="Reviewer" height="" width="" loading="lazy" title="" />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">Anjali Desai</h3>
                  <p className="reviwers-position">Chief Marketing Officer</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconOne} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">NextLeap</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
              These guys totally turned our marketing around! 😃 Their creativity and deep branding know-how helped us connect with our audience better than we ever dreamed. The visual designs were stunning, and their marketing strategies were spot on. If you're looking for top-notch branding and marketing, these folks are where it's at.

              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={Testimonial5} alt="Reviewer" height="" width="" loading="lazy" title="" />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">Rajiv Nair </h3>
                  <p className="reviwers-position">UX/UI Designer</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconOne} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">TechTrail</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
              Talk about efficient!  Working with these folks was a breeze. They promised timely delivery and absolutely delivered on that promise. Every phase of our project was on schedule, and the quality was never compromised. If you need a team that values your time as much as theirs, look no further.
              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={Testimonial6} alt="Reviewer" height="" width="" loading="lazy" title="" />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">Neha Kapoor</h3>
                  <p className="reviwers-position">Director of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-cards" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100">
            <div className="testimo-inner-card">
              <div className="testimo-inner-card-top">
                <div className="testi-logo">
                  <img src={TestimoIconOne} alt="Company Logo" height="" width="" loading="lazy" title="" />
                </div>
                <div className="testimo-tit">PulseForge</div>
                <div className="ratings">
                  <img src={Ratings} alt="Ratings" height="" width="" loading="lazy" title="" />
                </div>
              </div>
              <p className="testimo-inner-card-para">
              These folks totally revamped our marketing! Their creativity and deep understanding of branding connected us with our audience better than we ever thought possible. Stunning visual designs and spot-on marketing strategies—they nailed it. If you need top-tier branding and marketing, this is the team you want. Big thanks to them!
              </p>
              <div className="reviwers">
                <div className="reviwers-img">
                  <img src={ReviwersImg} alt="Reviewer" height="" width="" loading="lazy" title="" />
                </div>
                <div className="reviwers-txt">
                  <h3 className="reviwers-name">Arjun Patel</h3>
                  <p className="reviwers-position">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Swiper Navigation Buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default Testimonial;

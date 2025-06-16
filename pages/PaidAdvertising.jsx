import Header from "../componets/header"
import Footer from "../componets/footer"
import ServiceFirstImg from "../src/assets/services/service-first-img.webp"
import ServiceDetailedImg from "../src/assets/services/seamless-financial.svg"
import ServiceDetailedMainImg from "../src/assets/services/service-detailed-main.webp"
import ImageContainer from "../src/assets/services/image-container.png"

import img1 from "../src/assets/s-app-development/custom-mobile-app.webp"
import img2 from "../src/assets/s-app-development/comprehensive-mobile-application.webp"
import img3 from "../src/assets/s-app-development/hire-mobile-app-developers.webp"
import img4 from "../src/assets/s-app-development/why-businesses-need-mobile-apps.webp"
import img5 from "../src/assets/s-app-development/our-mobile-app-development.webp"

import {Helmet} from "react-helmet";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react"


const PaidAdvertising = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <Header />
    <Helmet>
      <title>Top Paid Advertising Digital Marketing Company in India
      </title>
      <meta name="description"
    content="At Atelier, we offer top online advertising services across platforms like Google Ads, Meta Ads, Twitter Ads, and LinkedIn Ads to enhance brand awareness.
" 
    />
      
    </Helmet>
    
    <section className="serv-banner social-media-marketing">
        <h1 className="banner-h1">
        Expert Paid Advertising & Management Services For Maximum ROI
        </h1>
    </section>
     <section className="serv-point-sec">
         <div className="serv-point-sec-container">
            <div className="servi-point-sec-left-box">
                  
                  <p>
                  At Atelier Creations, we provide expert paid advertising services designed to boost your business's online visibility, drive targeted traffic, and maximize ROI. Our campaigns on platforms like Google, Facebook, and Instagram are meticulously optimized to enhance brand awareness and increase conversions. With strategic ad targeting, we ensure your business reaches the right audience, fostering growth through high-impact, data-driven advertising solutions. Paid advertising in digital marketing enables precise audience targeting and demands effective performance tracking for long-term success.</p>

                  {/* <ul className="serv-sec-points">
                    <li>Seamless Financial Management</li>
                  </ul> */}
            </div>
            <div className="servi-point-sec-right-box">
                    <div className="seri-first-img">
                        <img src={img1} alt="" />
                    </div>
            </div>
         </div>
     </section>

     <section className="service-detailed-sec">
     <h2 className=" ">
     Paid Advertising Metrics to Monitor For Optimizing Performance & Maximizing ROI
     </h2>

        <div className="srv-detai-sec-contain">
            <div className="left-srv-detai-sec">
            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Impressions
            </h4>
            <p>how often your ads are displayed to your target audience on selected platforms, with higher volumes indicating effective targeting.</p>

            </div>

            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Click-through Rate (CTR)
            </h4>
            <p>measures the percentage of impressions that lead to clicks, indicating the effectiveness of your messaging and creativity in driving engagement.</p>

            </div>

            <div className="service-detai-cont-card">
              
             
              <h4 className="service-detailed-small-tit">
              Cost-per-click (CPC)
              </h4>
              <p>This is the amount you pay each time someone clicks your ad. Monitor CPC to effectively manage your spending.
              </p>
  
              </div>

            </div>

            <div>
             <div className="service-detailed-main-img">
              <img src={img2} alt="" />
             </div>
            </div>

            <div className="right-srv-detai-sec">
            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Conversions
            </h4>
            <p>Measure how frequently users complete desired actions such as purchases, downloads, or signups indicating effective funnel optimization and engagement.
            </p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Cost-per-acquisition (CPA) 
            </h4>
            <p>measures your customer acquisition expenses, indicating how much you spend to generate conversions. Lower CPA means greater efficiency.</p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Return on Ad Spend (ROAS)
            </h4>
            <p>The total revenue generated per dollar spent on ads showcases the profitability and effectiveness of your paid advertising campaigns.</p>

            </div>
            </div>

            
        </div>
     </section>

     <section className="extra-cont-light">

      <div>
        <h4>Top Paid Advertising Types for Various Industries </h4>
       <p>At Atelier Creations, we deliver customized paid advertising solutions tailored to different industries. Here are some of the most effective types of paid advertising for various sectors</p>
       </div>

       <div className="extra-cont-light-img">
        <img src={img3} alt="" />
       </div>
     </section>

     <section className="extra-cont-dark">

     <div className="extra-cont-light-img">
        <img src={img4} alt="" />
       </div>
    
       <div>
        <h4>Google Search Ads (PPC)</h4>
       <p>We offer the best Google Search (PPC) Ads services tailored for businesses in various sectors. Our Google Search Ads are ideal for targeting users who are actively searching for specific products or services, driving high-intent traffic to your website. By leveraging strategic keywords and optimized ad placements, we ensure your business gains maximum visibility in search results. Our expert team works diligently to create and manage campaigns that deliver measurable results, helping you achieve your marketing objectives effectively.</p>
       </div>
       
     </section>

     <section className="extra-cont-light">
       <div>
        <h4>Social Media Ads</h4>
        <p>We specialize in social media advertising campaigns across platforms like Facebook, Instagram, and LinkedIn. Our expertly crafted ads are designed to be visually engaging, helping your brand capture attention and resonate with your target audience. By leveraging these platforms' advanced targeting capabilities, we ensure your ads reach the right demographics, enhancing brand awareness and driving customer engagement. Let us help you maximize your advertising potential and connect with your audience effectively through tailored social media ad campaigns.</p>
       </div>

       <div className="extra-cont-light-img">
        <img src={img5} alt="" />
       </div>
     </section>

     <section className="extra-cont-dark">

     <div className="extra-cont-light-img">
        <img src={img4} alt="" />
       </div>
    
       <div>
        <h4>Display Ads</h4>
       <p>Our display ads are designed to elevate your brand's visibility across the Google Display Network. These banner ads effectively showcase your products and services, allowing you to reach a broader audience. With the ability to retarget potential customers across various online platforms, our display advertising solutions ensure that your brand stays top-of-mind. Whether you're looking to increase website traffic, boost brand awareness, or drive conversions, our expertly crafted display ads will help you achieve your marketing goals efficiently and effectively.</p>
       </div>
       
     </section>

     <section className="extra-cont-light">
       <div>
        <h4>Video Ads</h4>
        <p>We specialize in creating compelling video ads tailored for YouTube and various social media platforms. Our engaging video content effectively tells your brand's story, capturing audience attention and driving brand recognition. Whether in the entertainment, education, or retail sectors, our video ads are designed to resonate with viewers, enhancing your marketing strategy. With a focus on creativity and storytelling, we help you stand out in a crowded digital landscape and connect meaningfully with your target audience.</p>
       </div>

       <div className="extra-cont-light-img">
        <img src={img5} alt="" />
       </div>
     </section>

     <section className="extra-cont-dark">

     <div className="extra-cont-light-img">
        <img src={img4} alt="" />
       </div>
    
       <div>
        <h4>Shopping Ads for E-Commerce Success</h4>
       <p>We offer top-notch shopping ads that serve as a powerful tool for e-commerce businesses. These ads allow you to showcase your products directly in search results, displaying essential information such as images, prices, and descriptions. This visually appealing format makes it easier for potential customers to discover and purchase your items. By leveraging shopping ads, you can enhance visibility, attract targeted traffic, and drive conversions, ultimately leading to increased sales. Optimize your online presence and maximize your e-commerce potential with our effective shopping ad campaigns tailored specifically to your audience.</p>
       </div>
       
     </section>



    <section className="service-carosoul-sec">
      <h3 className="service-carosoul-tit">
      Why Choose Paid Advertising at Atelier?
      </h3>

      <div className="service-carosoul-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} 
        spaceBetween={0}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true, 
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >


        <SwiperSlide>
          <div className="service-carosoul-cards">
           <h4 className="service-carosoul-cards-tit">
           Cost-Effective Advertising Solutions
           </h4>
           <p>
           Paid advertising offers a cost-effective method to promote or remarket products to targeted audiences. You can easily track expenses and set budget limits to prevent overspending on ads.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Trackable Advertising Solutions
           </h4>
           <p>
           All paid advertising platforms provide comprehensive data to analyze ad performance, enabling users to make informed decisions about the effectiveness of their campaigns.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Ads Target a More Specific Audience
           </h4>
           <p>
           When creating ads for paid advertising platforms, it’s essential to define and fine-tune your target audience to ensure high click-through rates and effective campaign performance over time.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards"> 
          <h4 className="service-carosoul-cards-tit">
          Improve Brand Awareness
           </h4>
           <p>
           Various paid advertising methods effectively promote your brand. By increasing brand awareness through platforms like Google and Facebook, you familiarize your audience with your products and services, helping you stay competitive.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards"> 
          <h4 className="service-carosoul-cards-tit">
          Prospects are more likely to reconnect with your offerings
           </h4>
           <p>
           Retargeting ads into your paid advertising strategy helps you reconnect with visitors who previously engaged with your website, turning prospects into customers through timely and relevant messaging.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards"> 
          <h4 className="service-carosoul-cards-tit">
          Easier to Rank Compared to Organic Search
           </h4>
           <p>
           Paid advertising is essential for small startups, boosting website traffic immediately. While organic rankings take time, paid ads allow your business to appear higher on search engines right from the start.
           </p>
          </div>
        </SwiperSlide>

        
      </Swiper>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      </div>
      
    </section>

    <section className="faq-section">

      <h3 className="faq-tit">
      FAQs for Atelier Paid Advertising Services
      </h3>
      <div className="faq-container">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What types of paid advertising does Atelier offer?
      </button>
    </h3>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Atelier provides a variety of paid advertising services, including Google Search Ads, social media ads (Facebook, Instagram, LinkedIn), display ads, video ads, and shopping ads, tailored to meet your business goals.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How do you determine the right advertising strategy for my business?
      </button>
    </h3>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        We conduct a thorough analysis of your target audience, industry trends, and business objectives to create a customized advertising strategy that maximizes your ROI and aligns with your marketing goals.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      How do you track the performance of paid advertising campaigns?
      </button>
    </h3>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        We utilize advanced tracking tools and analytics to monitor key performance metrics, such as click-through rates (CTR), conversion rates, and return on ad spend (ROAS), ensuring transparency and continuous optimization.
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      What is the typical duration for a paid advertising campaign?
      </button>
    </h3>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Campaign duration varies based on your specific objectives and budget. We recommend starting with a minimum of 4-6 weeks to gather sufficient data for effective analysis and adjustments.
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Can I request changes to my ad campaigns once they are live?
      </button>
    </h3>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Yes, we encourage collaboration and welcome your feedback. You can request changes to your ad campaigns at any time, and our team will implement adjustments to optimize performance.

        </p>
      </div>
    </div>
  </div>
</div>
      </div>
     </section>

     <section className="contact-card-sec">
       <div className="contact-card-inside-cont">
        <h3 className="contact-inner-tit">
        Ready to Transform Your Ideas into a Powerful Mobile App?

        </h3>

        <a className="contact-card-btn" href="">
        Launch
        </a>
       </div>
       
     </section>
             
     



    
     

    <Footer />
    </>
  )
}

export default PaidAdvertising
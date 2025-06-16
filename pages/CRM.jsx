import Header from "../componets/header"
import Footer from "../componets/footer"
import ServiceFirstImg from "../src/assets/services/service-first-img.webp"
import ServiceDetailedImg from "../src/assets/services/seamless-financial.svg"
import ServiceDetailedMainImg from "../src/assets/services/service-detailed-main.webp"
import ImageContainer from "../src/assets/services/image-container.png"

import img1 from "../src/assets/s-CRM/CRM-Software.webp"
import img2 from "../src/assets/s-CRM/Improved-Sales.webp"
import img3 from "../src/assets/s-CRM/Operational-CRM-Solutions.webp"
import img4 from "../src/assets/s-CRM/Analytical-CRM-Solutions.webp"
import img5 from "../src/assets/s-CRM/Collaborative-CRM-Solutions.webp"
import img6 from "../src/assets/s-CRM/Strategic-CRM-Solutions.webp"
import img7 from "../src/assets/s-CRM/Sales-CRM-Solutions.webp"


import {Helmet} from "react-helmet";
import { Link } from "react-router-dom"

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react"


const CRM = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    
    <>
    <Header />
    <Helmet>
      <title>Best Customize CRM Software Service Agency In Coimbatore
      </title>
      <meta name="description"
    content="We specialize in designing customizable CRM software for companies & organizations, offering top solutions to improve business & customer interactions." 
    />
      
    </Helmet>
    
    <section className="serv-banner CRM-Software-page">
        <h1 className="banner-h1">
         CRM Software Service
        </h1>
    </section>
     <section className="serv-point-sec">
         <div className="serv-point-sec-container">
            <div className="servi-point-sec-left-box">

                  <p>
                  We provide top CRM software solutions for businesses of all sizes, specializing in tailored Customer Relationship Management systems (CRM). Our CRM tools are designed to streamline business processes, improve customer engagement, and increase sales growth. With flexible, scalable and customizable platforms, our solutions seamlessly integrate with your existing systems. We focus on improving communication, tracking customer interactions, and automating workflows to boost efficiency and performance. Whether you're a small startup or a large enterprise, our CRM software is the perfect fit for your needs.
                  </p>

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
     Top CRM Solutions Designed For Improved Sales And Customer Relationships
     </h2>

        <div className="srv-detai-sec-contain">
            <div className="left-srv-detai-sec">
            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Simple CRM
            </h4>
            <p>User-friendly and straightforward, perfect for small businesses or startups looking to manage customer relationships efficiently.
            </p>

            </div>

            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Custom CRM
            </h4>
            <p>Tailored solutions designed to fit your specific business requirements, ensuring a personalized and seamless experience.</p>

            </div>

            <div className="service-detai-cont-card">
              
             
              <h4 className="service-detailed-small-tit">
              Mobile CRM
              </h4>
              <p>Access your CRM on-the-go with mobile-friendly platforms, enabling real-time updates and customer management from anywhere.</p>
  
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
            Integrated CRM
            </h4>
            <p>Seamlessly integrates with your existing tools and software, creating a unified system for streamlined operations and improved efficiency.
            </p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Social CRM
            </h4>
            <p>Focuses on managing customer relationships through social media platforms, enabling businesses to engage with customers where they interact online.
            </p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Campaign Management CRM
            </h4>
            <p>Streamline marketing campaigns by organizing, executing, and analyzing marketing efforts for better results.</p>

            </div>
            </div>

            
        </div>
     </section>

     <section className="extra-cont-light">
      
       <div>
        <h3>Operational CRM Solutions</h3>

       <p>We offer advanced Operational CRM solutions designed to automate sales, marketing, and customer service processes. Our software streamlines interactions ensures seamless communication between teams and improves the overall customer experience. By automating routine tasks, your business can focus on building stronger relationships and driving growth. Our Operational CRM is tailored to meet your specific needs, providing you with the necessary tools to optimize efficiency and improve productivity. Experience the benefits of a well-integrated Operational CRM with Atelier Creation.</p>
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
        <h3>Analytical CRM Solutions</h3>
        <p>Analytical CRM helps analyze customer data and behavior to inform business decisions and strategies. By leveraging insights from customer interactions, purchase history and preferences, organizations can shape their marketing efforts, Improve customer satisfaction, and improve overall performance. Our Analytical CRM solutions empower businesses to identify trends, measure campaign effectiveness, and make data-driven decisions, ensuring you stay ahead of the competition while maximizing customer engagement and loyalty. Experience the power of informed decision-making with our tailored Analytical CRM offerings.</p>
       </div>

       
     </section>

     <section className="extra-cont-light">
       <div>
        <h3>Collaborative CRM Solutions</h3>
        <p>Collaborative CRM improve communication and data sharing across departments, ensuring a unified customer experience. By centralizing customer information, this CRM allows your sales, marketing, and support teams to work together seamlessly, improving collaboration and delivering consistent service. It ensures that everyone is on the same page, providing customers with a smoother more cohesive journey. Our Collaborative CRM solutions help break down silos, boost teamwork, and ultimately drive better customer satisfaction and business results.</p>
       </div>

       <div className="extra-cont-light-img">
        <img src={img5} alt="" />
       </div>
     </section>

     <section className="extra-cont-dark">

  <div className="extra-cont-light-img">
   <img src={img6} alt="" />
  </div>
   <div>
    <h3>Strategic CRM Solutions</h3>
    <p>Strategic CRM aligns customer-focused strategies with your business goals to foster long-term growth. By understanding customer needs and preferences, this CRM helps develop strategies that improve customer relationships, drive retention and boost profitability. Our Strategic CRM solutions empower businesses to tailor marketing, sales and service efforts to meet both customer expectations and business objectives. With a focus on long-term success, it ensures that your customer relationships are nurtured to drive sustainable growth and competitive advantage.</p>
   </div>
    </section> 

    <section className="extra-cont-light">
       <div>
        <h3>Sales CRM Solutions</h3>
        <p>Sales CRM optimizes sales pipelines and tracking, helping businesses boost performance and close deals faster. By streamlining the sales process, it provides real-time insights into lead management, deal progress and customer interactions. Our Sales CRM solutions enable sales teams to prioritize tasks, track opportunities and automate follow-ups, ensuring no potential lead is missed. With powerful reporting and analytics, businesses can make data-driven decisions to improve efficiency, increase conversion rates and accelerate growth. Experience faster, smarter sales with our Sales CRM solutions.</p>
       </div>

       <div className="extra-cont-light-img">
        <img src={img7} alt="" />
       </div>
     </section>

    <section className="service-carosoul-sec">
      <h3 className="service-carosoul-tit">
      Why Choose Atelier for Your Firm's CRM Software Needs ?
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
           Enhanced Customer Management
           </h4>
           <p>
           Keep track of all customer interactions in one centralized system, enabling better customer service, improving retention and fostering stronger relationships with streamlined communication and support.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Automated Workflows
           </h4>
           <p>
           Streamline repetitive tasks like follow-ups and email campaigns using automation features, allowing your team to focus on building relationships and improving overall productivity.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Improved Sales Tracking
           </h4>
           <p>
           Gain real-time visibility into your sales pipeline with our CRM solutions, enabling data-driven decisions that improve efficiency, optimize processes and drive sales growth for your business.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Seamless Integration
           </h4>
           <p>
           Our CRM software seamlessly integrates with your existing systems, boosting productivity and facilitating better communication across departments, ensuring smoother workflows and more efficient business operations.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Customizable Solutions
           </h4>
           <p>
           Customize the CRM platform to align with your business’s specific needs and goals, ensuring optimal performance, improve customer relationships and streamlined processes tailored for success.
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
      Frequently Asked Questions About CRM Software
      </h3>
      <div className="faq-container">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is CRM software?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        CRM software helps businesses manage customer relationships, track interactions, and automate processes to improve efficiency and customer satisfaction.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How can CRM software benefit my business?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        CRM software boosts productivity, improves customer engagement, enhances communication, and provides valuable insights into sales and customer behavior.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Can your CRM solutions be customized?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Yes, our CRM software is fully customizable to meet the specific needs of your business and industry.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Is the CRM system scalable for growing businesses?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Absolutely! Our CRM solutions are scalable, allowing you to add new features and users as your business grows.

        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Does your CRM integrate with other software systems?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Yes, our CRM software integrates seamlessly with a wide range of existing tools such as email, accounting, and marketing platforms.

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
        Get in touch and <span>start</span><br />
        <span>growing</span> your startup today
        </h3>

        <Link className="contact-card-btn" to="/contact" >
        Launch
        </Link>
       </div>
       
     </section>
             
    <Footer />
    </>
  )
}

export default CRM
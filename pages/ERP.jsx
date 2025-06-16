import Header from "../componets/header"
import Footer from "../componets/footer"
import ServiceFirstImg from "../src/assets/services/service-first-img.webp"
import ServiceDetailedImg from "../src/assets/services/seamless-financial.svg"
import ServiceDetailedMainImg from "../src/assets/services/service-detailed-main.webp"
import ImageContainer from "../src/assets/services/image-container.png"
import { Link } from "react-router-dom"
import img1 from "../src/assets/s-ERP/erp-software.webp"
import img2 from "../src/assets/s-ERP/software-solutions.webp"
import img3 from "../src/assets/s-ERP/Cloud-Based-ERP.webp"
import img4 from "../src/assets/s-ERP/On-Premise-ERP.webp"
import img5 from "../src/assets/s-ERP/Industry-Specific-ERP.webp"
import img6 from "../src/assets/s-ERP/Hybrid-ERP.webp"


import {Helmet} from "react-helmet";


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react"


const ERP = () => {

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    
    <>
    <Header />
    <Helmet>
      <title>Best ERP Software Service Company For Business in India
      </title>
      <meta name="description"
    content="The best Enterprise Resource Planning (ERP) software services with a fast and user-friendly online system that keeps your business updated & optimized." 
    />
      
    </Helmet>
    
    <section className="serv-banner ERP-service-page">
        <h1 className="banner-h1">
        ERP software
        </h1>
    </section>
     <section className="serv-point-sec">
         <div className="serv-point-sec-container">
            <div className="servi-point-sec-left-box">

                  <p>
                  Atelier provides cutting-edge ERP (Enterprise Resource Planning) solutions tailored to improve business operations and boost productivity. Our ERP systems seamlessly integrate core functions, delivering a unified view of your operations for improved efficiency and control. As a top ERP provider, we offer cloud services and industry-leading products suitable for small, medium, and large organizations. With our innovative technology, we empower businesses to make informed decisions and streamline their processes, ensuring you stay competitive in today’s dynamic market.</p>

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
     Top Custom Service Company for ERP (Enterprise Resource Planning) Software Solutions
     </h2>

        <div className="srv-detai-sec-contain">
            <div className="left-srv-detai-sec">
            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Simplified Data Access
            </h4>
            <p>ERP software enables businesses to easily access and manage data through a centralized system, streamlining information retrieval.
            </p>

            </div>

            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Improves Team Collaboration
            </h4>
            <p>With ERP solutions, businesses gain real-time visibility into production processes, enabling better decision-making and resource allocation.</p>

            </div>

            <div className="service-detai-cont-card">
              
             
              <h4 className="service-detailed-small-tit">
              Reducing Material Waste
              </h4>
              <p>ERP fosters team collaboration by offering a unified platform for communication and project management, boosting productivity.</p>
  
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
            Elevated Business Insights
            </h4>
            <p>ERP software provides advanced analytics, allowing businesses to gain insights and make informed decisions for growth.
            </p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Compliance Made Simple
            </h4>
            <p>ERP software simplifies compliance with industry regulations by automating processes and maintaining accurate records efficiently.</p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Optimized Customer Support
            </h4>
            <p>ERP centralizes customer data, automating service processes for timely, accurate responses and improved customer service.</p>

            </div>
            </div>

            
        </div>
     </section>

     <section className="extra-cont-light">
      
       <div>
        <h3>Cloud-Based ERP</h3>

       <p>We offer the best cloud ERP solutions, providing a flexible and scalable platform that enables businesses to manage operations from anywhere, eliminating the need for on-premise infrastructure. Designed for companies aiming to reduce IT costs and enhance accessibility, our cloud ERP software ensures seamless integration of all business functions. With real-time data access and powerful tools, you can streamline processes, improve collaboration, and make informed decisions. Experience the best in cloud ERP solutions and empower your business to thrive in a dynamic environment.</p>
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
        <h3>On-Premise ERP</h3>

        <p>We offer the best on-premise ERP solutions hosted on your company’s servers, ensuring you have complete control over your system. This approach is ideal for businesses with specific security or compliance needs that prefer to manage their data internally. Our on-premise ERP software provides tailored functionality while allowing you to maintain stringent security protocols. By leveraging this solution, you can effectively manage your operations while ensuring that your sensitive data remains secure and compliant with industry regulations.</p>
       </div>

       
     </section>

     <section className="extra-cont-light">
       <div>
        <h3>Industry-Specific ERP
        </h3>

        <p>We provide top industry-specific ERP solutions tailored to meet the unique needs of various sectors, including manufacturing, retail, healthcare, and more. Our ERP systems come equipped with specialized modules and features designed to tackle industry-specific challenges effectively. By focusing on the distinct requirements of each industry, we ensure that our solutions enhance operational efficiency and drive growth. Experience the benefits of a customized ERP system that supports your business's goals and helps you stay competitive in your field.</p>
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
    <h3>Hybrid ERP</h3>
    <p>We offer premier hybrid ERP software that combines on-premise and cloud-based systems, providing businesses with flexibility and control. Our hybrid ERP solutions enable organizations to balance their operational needs effectively by utilizing both on-site and cloud resources. This approach allows for enhanced scalability and customization, ensuring that you can adapt to changing business requirements while maintaining data security and accessibility. Experience the advantages of a hybrid ERP system designed to streamline operations and optimize performance across your organization.</p>
   </div>

  
    </section> 

    <section className="service-carosoul-sec">
      <h3 className="service-carosoul-tit">
      Reasons to Choose ERP Solutions from Atelier for Your Business Needs
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
           Improved Efficiency
           </h4>
           <p>
           ERP automates and integrates essential business processes, minimizing manual tasks and errors, and enabling teams to concentrate on strategic activities that drive growth and improve overall organizational efficiency.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Enhanced Data Accuracy
           </h4>
           <p>
           Centralized data management ensures a single source of truth, Improving accuracy and minimizing data discrepancies across departments, which leads to more informed decision-making and streamlined operations throughout the organization.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Better Decision-Making
           </h4>
           <p>
           ERP provides real-time insights into business performance through advanced analytics and reporting tools, empowering organizations to make informed, data-driven decisions that enhance operational efficiency and strategic planning.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Cost Savings
           </h4>
           <p>
           ERP systems improve business processes and improve resource allocation, leading to reduced operational costs and increased profitability over time, enabling organizations to achieve long-term financial success.

           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Scalability
           </h4>
           <p>
           ERP systems are designed to grow with your business, enabling you to seamlessly add new users, departments, or functionalities as needed, ensuring minimal disruptions to your operations.

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
      Frequently Asked Questions About ERP Solutions
      </h3>
      <div className="faq-container">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What is ERP software?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        ERP software integrates core business processes to improve efficiency and streamline operations across various departments.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How can ERP benefit my business?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        ERP enhances productivity, provides real-time data access, and improves decision-making by unifying business functions.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Is cloud ERP secure?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Yes, cloud ERP solutions utilize advanced security measures, including encryption and regular backups, to protect your data.
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Can ERP systems be customized?
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Absolutely! ERP systems can be tailored to meet your specific business needs and industry requirements.

        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      How long does ERP implementation take?
      </button>
    </h2>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Implementation time varies based on the complexity of the system and your organization, typically ranging from a few weeks to several months
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

export default ERP
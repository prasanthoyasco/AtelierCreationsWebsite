import Header from "../componets/header"
import Footer from "../componets/footer"
import ServiceFirstImg from "../src/assets/services/service-first-img.webp"
import ServiceDetailedImg from "../src/assets/services/seamless-financial.svg"
import ServiceDetailedMainImg from "../src/assets/services/service-detailed-main.webp"
import ImageContainer from "../src/assets/services/image-container.png"
import { Link } from "react-router-dom"
import img1 from "../src/assets/s-graphic-design/graphic-design.webp"
import img2 from "../src/assets/s-graphic-design/brand-identity-design.webp"
import img3 from "../src/assets/s-graphic-design/Client-Collaboration.webp"
import img4 from "../src/assets/s-graphic-design/creative-concept-development.webp"
import img5 from "../src/assets/s-graphic-design/our-mobile-app-development.webp"
import img6 from "../src/assets/s-graphic-design/quality-assurance-delivery.webp"

import { Helmet } from "react-helmet";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react"


const GraphicDesign = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <Header />
    <Helmet>
      <title>2D/3D Graphics Designing Service
      </title>
      <meta name="description"
    content="At Atelier, we provide premier graphic design services, specializing in UI/UX, logo design, branding, and social media poster design at affordable rates." 
    />
      
    </Helmet>
    
    <section className="serv-banner Graphic-Design-service">
        <h1 className="banner-h1">
        Graphic Design & 2D,3D Design Service
        </h1>
    </section>
     <section className="serv-point-sec">
         <div className="serv-point-sec-container">
            <div className="servi-point-sec-left-box">

                  <p>
                  At Atelier Creations, our graphic design strategy is centered around creating impactful visuals that not only captivate but also Improve usability. We tailor each design to meet the specific needs and expectations of your target audience, ensuring your brand stands out in a competitive market. Our expert team combines creativity with functionality, delivering designs that are visually appealing and user-friendly. Whether it’s for digital or print media, we craft designs that effectively communicate your brand's message and values. </p>

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

        <div className="srv-detai-sec-contain">
            <div className="left-srv-detai-sec">
            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Brand Identity Design
            </h4>
            <p>Our Brand Identity Design services create a unique visual representation of your brand, ensuring consistency and recognition across all platforms.
            </p>

            </div>

            <div className="service-detai-cont-card">
              
             
            <h4 className="service-detailed-small-tit">
            Marketing Materials
            </h4>
            <p>Our marketing materials are designed to effectively communicate your brand’s message, helping you engage your target audience and drive results through visually compelling designs.
            </p>

            </div>

            <div className="service-detai-cont-card">
              
             
              <h4 className="service-detailed-small-tit">
              Packaging Design
              </h4>
              <p>Our packaging design services create visually compelling and functional packaging that reflects your brand identity, improves product appeal, and ensures a memorable customer experience.</p>
  
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
            Social Media Poster Design Services
            </h4>
            <p>Our social media poster design services deliver trendy, customized designs that enhance brand presence and foster audience growth across platforms.</p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            2D and 3D Design
            </h4>
            <p>Our 2D and 3D design services bring your concepts to life with stunning visuals, enhancing user engagement through creative and detailed design solutions.</p>

            </div>

            <div className="service-detai-cont-card">
            <h4 className="service-detailed-small-tit">
            Print and Digital Advertising Design
            </h4>
            <p>Our Print and Digital Advertising Design services deliver impactful visuals tailored to engage audiences, driving brand awareness and conversions across both print and digital platforms.
            </p>

            </div>
            </div>

            
        </div>
     </section>

     <section className="extra-cont-light">

      <div>
        <h4>Client Collaboration</h4>
       <p>we believe in the power of collaboration. We prioritize close communication with our clients to thoroughly understand their goals, vision, and brand identity. This partnership allows us to create designs that not only reflect your unique needs but also resonate with your target audience. By involving you in the design process, we ensure that every visual element aligns with your expectations, resulting in a final product that truly embodies your brand and engages your customers effectively.</p>
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
        <h4>Creative Concept Development</h4>
       <p>Our team works together to brainstorm and craft innovative concepts that align seamlessly with your brand strategy. We prioritize the creation of visually compelling designs that not only capture attention but also effectively convey your message. By focusing on engaging your audience, we ensure that every design element serves a purpose and strengthens your brand identity. Trust our collaborative approach to deliver unique, impactful designs that resonate with your target market and elevate your brand's presence.
       </p>
       </div>
       
     </section>

     <section className="extra-cont-light">
       <div>
        <h4>Our Mobile App Development Services</h4>
        <p>We embrace an iterative design approach that prioritizes continuous improvement through feedback cycles. This collaborative process allows us to refine designs based on your input, ensuring the final product not only meets your expectations but also aligns perfectly with your vision. By actively involving you at each stage, we create user-centric solutions that resonate with your target audience. Our commitment to open communication and flexibility ensures a design outcome that truly reflects your brand's identity and goals.</p>
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
        <h4>Quality Assurance and Delivery </h4>
       <p>we prioritize quality in every project we undertake. Before finalizing any design, our team conducts thorough quality checks to ensure that each piece meets our high standards of excellence. This meticulous process guarantees that your design aligns perfectly with your vision. Once approved, we provide the final assets in all the necessary formats for your convenience, making it easy for you to implement and utilize them across various platforms. Your satisfaction is our commitment
       </p>
       </div>
       
     </section>





    <section className="service-carosoul-sec">
      <h3 className="service-carosoul-tit">
      Why Choose Atelier for Graphic Design & 2D, 3D Design Services
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
           Creative Expertise
           </h4>
           <p>
           Our skilled team delivers innovative and visually striking 2D and 3D designs that bring your ideas to life, tailored to your brand’s unique identity.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Customized Solutions
           </h4>
           <p>
           We offer personalized graphic design services, ensuring each project aligns with your business objectives and resonates with your target audience.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards">
          <h4 className="service-carosoul-cards-tit">
          Comprehensive Services
           </h4>
           <p>
           From print to digital design, and 2D to 3D modeling, Atelier provides a full suite of design services for all your creative needs.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards"> 
          <h4 className="service-carosoul-cards-tit">
          High-Quality Outputs
           </h4>
           <p>
           Our designs are crafted with precision, ensuring high-quality visuals that stand out across multiple platforms, whether for branding, advertising, or product presentation.
           </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="service-carosoul-cards"> 
          <h4 className="service-carosoul-cards-tit">
          Client-Centric Approach
           </h4>
           <p>
           At Atelier, we prioritize your satisfaction, working closely with you throughout the design process to deliver results that exceed expectations.
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
      FAQs for Atelier Graphic Design & 2D/3D Design Services
      </h3>
      <div className="faq-container">
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What types of design services does Atelier offer?
      </button>
    </h3>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Atelier provides a wide range of design services, including graphic design, 2D and 3D modeling, print and digital advertising, branding, and more. We cater to various industries and project needs.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How does Atelier approach 2D and 3D design projects?
      </button>
    </h3>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        We begin with a thorough consultation to understand your vision and goals. Our expert designers then create custom 2D or 3D models, ensuring that every detail aligns with your business requirements and aesthetic preferences.
        </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h3 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What industries does Atelier serve for graphic design and 3D modeling?
      </button>
    </h3>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        We work with a diverse range of industries, including advertising, real estate, product design, e-commerce, and more. Our tailored solutions cater to the specific needs of each sector.
        </p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h3 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      How long does a typical design project take?
      </button>
    </h3>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        The timeline for each project depends on its complexity and scope. After our initial consultation, we provide a detailed project plan with clear milestones to ensure timely delivery.
        </p>
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h3 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Can I request revisions after the design is completed?
      </button>
    </h3>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>
        Yes, we offer revision rounds as part of our design process to ensure the final product meets your expectations. We work closely with you until you're completely satisfied with the results.
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

        <Link className="contact-card-btn" to="/contact" >
        Launch
        </Link>
       </div>
       
     </section>
             
    <Footer />
    </>
  )
}

export default GraphicDesign
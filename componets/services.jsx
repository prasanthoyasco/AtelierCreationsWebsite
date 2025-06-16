import serviceCardIcon from "../src/assets/services/service-card-icon.svg";

import SEO from "../src/assets/services/SEO.svg";
import FunnelOptimization from "../src/assets/services/funnel-optimization.svg";
import AdvancedAnalytics from "../src/assets/services/advanced-analytics.svg";
import PaidAdvertising from "../src/assets/services/paid-advertising.svg";
import UiUx from "../src/assets/services/ui-ux.svg";
import SoftwareDevelopment from "../src/assets/services/software-development.svg"
import SocialMediaMarketing from "../src/assets/services/Social-Media-Marketing.svg"
import GraphicDesigning from "../src/assets/services/Graphic-Design-3D-2D.svg"
import Branding from "../src/assets/services/branding.png"


import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <section id="services" className="services-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="our-container">
              <div className="tit-wraper">
                <span className="tit-sub">
                  <div>//</div> Services
                </span>
                <h2 className="secondry-title1">
                Best Digital Marketing & Creative Designing Company/Agency 
                </h2>
              </div>
              {/* <a className="service-btn" href="#">
                Our Services
              </a> */}
            </div>
            <div className="our-container-1">
              <div className="row">
                {/* Service Card 1 */}
                <div className="col-md-4 ">
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000">
                    <div className="srv-card-icon">
                      <img src={UiUx} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    UI UX
                    </h3>
                    <p className="sev-card-cont">
                    We offer creative UI/UX design services, crafting intuitive interfaces for web and mobile applications using modern technologies.
                    </p>
                    <Link className="service-card-btn" to="/best-creative-ui-ux-design-service-company">
                      Read More
                      </Link>
                  </div>
                </div>
                
                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={SoftwareDevelopment} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Development
                    </h3>
                    <p className="sev-card-cont">
                    We provide customized software solutions for medium and large businesses, including applications, API development, and maintenance.
                    </p>
                    <Link className="service-card-btn" to="/development">
                      Read More
                      </Link>
                  </div>
                </div>

                <div className="col-md-4 " >
                  <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" >
                    <div className="srv-card-icon">
                      <img src={SEO} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    SEO
                    </h3>
                    <p className="sev-card-cont">
                    We offer result-driven SEO services, including Local, Regional, and International SEO, to achieve top Google rankings.
                    </p>
                    <Link className="service-card-btn" to="/top-seo-ranking-specialist">
                      Read More
                      </Link>
                  </div>
                </div>

                {/* Service Card 4 */}
                <div className="col-md-4 " >
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000">
                    <div className="srv-card-icon">
                      <img src={SocialMediaMarketing} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Digital Marketing
                    </h3>
                    <p className="sev-card-cont">
                    We provide top app development services, creating user-friendly, high-performance, customized apps to improve your digital presence

                    </p>
                    <Link className="service-card-btn" to="/digitalMarketing">
                      Read More
                      </Link>
                  </div>
                </div>

                {/* Service Card 5 */}
                <div className="col-md-4 " >
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="srv-card-icon">
                      <img src={SocialMediaMarketing} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Business Software
                    </h3>
                    <p className="sev-card-cont">
                    We provide expert social media marketing services, managing platforms to engage and grow your target audience
                    </p>
                    {/* <a href="#" className="service-card-btn">
                      Read More
                    </a> */}
                    <Link className="service-card-btn" to="/BusinessSoftware">
                      Read More
                      </Link>
                  </div>
                </div>

                {/* Service Card 6 */}
                <div className="col-md-4" >
                  <div className="service-card " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    <div className="srv-card-icon">
                      <img src={Branding} alt="" height="" width="" loading="lazy" title="" />
                    </div>
                    <h3 className="service-card-tit">
                    Branding
                    </h3>
                    <p className="sev-card-cont">
                    Visual branding elements play a crucial role in branding. We design visually appealing logos, packaging, and marketing materials that reflect your brand’s identity. 
                    </p>
                    <Link className="service-card-btn" to="/branding">
                      Read More
                      </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;

import vector from "../src/assets/feelancers-hub/Vector.png"
import freelancersImage from "../src/assets/feelancers-hub/freelancersImage.png"

function FreelancerHub() {
    return (
      <>
        <section id = "freelancers-hub"className="freelancer-hub-sec">
          <div className="freelancer-hub">
            <div className="freelancers-hub-imageDiv">

            <img src={freelancersImage} alt="img" className="freealncers-hub-image"  loading="lazy" title="" />
            </div>
          

            <div className="freelancer-hub-content">
           <p className="freelean-hub-cont">
           Join The <span className="freelancers-hub-content-highlight">Team 
             </span>
            More than a job 
           </p>
            <a className="freelancers-hub-button" target="_blank" href="https://forms.gle/Z93DK6jRqdWmGGxZ9">Freelancer Hub
            <img src={vector} alt="img" className="freelancers-hub-vector" width="7px" height="7px" loading="lazy" title="" />
            </a>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default FreelancerHub;
  
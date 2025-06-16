
import BlogAutherImg from "../src/assets/blogs/blog-auther-img.png"
import BlogAutherImg1 from "../src/assets/blogs/blog-author-praga.jpg"
import LinkedIn from "../src/assets/blogs/linkedin.svg"

import { Link } from "react-router-dom";

const BlogSideBar = () => {
  return (
    <>
    <div className="blog-side-bar">
          <div className="blog-author-card">
            <div className="blog-auther-img">
              <img className="blogautherimg" src={BlogAutherImg1} alt="" />

              <div className="blog-auther-linkedin">
              <a href="#">
               <img src={LinkedIn} alt="" />
              </a>
            </div>
            </div>
            
            <h4 className="blog-auther-name">Pragadeeswaran</h4>
            <p className="blog-side-bar-para-1">Founder of The Atelier Creation</p>

            <p className="blog-side-bar-para">Honored to reflect on my journey and accomplishments at Atelier Creations. Proud to have collaborated with incredible clients, delivering innovative digital solutions that drive growth and elevate brands.</p>
          </div>

          <div className="side-bar-artical-liks">
            <h3 className="artical-tit">
            In this article
            </h3>

            <ul className="artical-links-checks">
              <li>
              <Link to="/the-role-ai-modern-design">The Role of AI in Modern Design</Link>
              </li>
              <li>
              <Link to="/Helpful-Content-King">Search Generative Experience (SGE)</Link>
               </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default BlogSideBar
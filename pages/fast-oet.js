import Link from "next/dist/client/link";
import { VideoImage } from "../src/components/VideoContent";
import ProjectLayout from "../src/layout/ProjectLayout";

const ProjectDetails = () => {
  return (
    <ProjectLayout
      btnCustomHover="btn btn-skyblue tra-grey-hover last-link"
      singlePage
    >
      <section
        id="project-1"
        className="bg-snow wide-60 inner-page-hero single-project division"
      >
        <div className="container">
          <div className="row">
            {/* PROJECT DISCRIPTION */}
            <div className="col-lg-10 offset-lg-1">
              <div className="project-description">
                {/* PROJECT TITLE */}
                <div className="project-title">
                  {/* Title */}
                  <h2 className="h2-xl">
                    FAST OET , Teaching OET Globally
                  </h2>
                  {/* Project Data */}
                  <p className="p-xl project-data">
                    <span>FAST OET</span>
                    <span>2021-10-08</span>
                    <span>Website Development</span>
                    <span>
                      <a href="#" className="pink-color">
                       www.fastoet.com
                      </a>
                    </span>
                  </p>
                </div>
                {/* PROJECT TEXT */}
                <div className="project-txt">
                  {/* Image */}
                  <div className="project-inner-img mb-50">
                    <img
                      className="img-fluid"
                      src="/images/projects/fast-3.png"
                      alt="project-preview"
                      style={{width:'60%', border:'1px solid white', borderRadius :'20px', display:'block', margin:'auto'}}
                    />
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  Fast OET has been serving as an online platform of OET exam preparation for students all over
the world. Their highly skilled and experienced instructors make sure that their students ace their
next official OET exam with flying colours. Their services range from professional letter
checking to individual analysis of every student according to the existing trends of the
professional OET examination system.

                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">
                    Overview &amp; Challenge
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                  In today's world, the majority of consumers agree that a website helps you grow your business
far better than having social media profiles. Fast OET is one of our clients who wanted to grow
their network through a website to show off their professional capabilities. 
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                  Using social media applications alone wasn't enough to generate more leads. FAST OET wanted
us to create a website for them to showcase their services and achievements. To boost their
success, they needed to generate more leads, and the best way of doing so was to make
themselves visible on Google. A website gives you access to many tools and strategies of Search
Engine Optimisation (SEO). 
                  </p>
                  {/* PROJECT IMAGES */}
                  <div className="row d-flex align-items-center project-inner-img">
                    {/* IMAGE #1 */}
                    <div className="col-md-6">
                      <div className="project-image top-img">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/fast.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/fast.png"
                              alt="p_image"
                            />
                            <div className="item-overlay" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* IMAGE #2 */}
                    <div className="col-md-6">
                      <div className="project-image">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/fast2.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/fast2.png"
                              alt="p_image"
                            />
                            <div className="item-overlay" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END PROJECT IMAGES */}
                  {/* Small Title */}
                  <h5 className="h5-md mb-20">Project Summary</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-md">
                        <span className="txt-500">Website Development</span> and designing on the web was part of a project to generate more
leads for FAST OET by the implementation of different plug-ins. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Digital Marketing </span>  strategy was the part of the project that leveraged the power of
popular social media networks to achieve the branding and marketing of FAST OET. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Software Development</span>  was done for FAST OET to automatically check grammatical
and English punctuation mistakes.  
                      </p>
                    </li>
                  </ul>
                  {/* IMAGE */}
                  {/* <div className="project-image project-inner-img video-preview">
                    <VideoImage extraClass="video-btn video-btn-xl bg-pink ico-90" />
                  </div> */}
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">Solution &amp; Results</h5>
                  {/* Text */}
                  <p className="p-lg">
                  For FAST OET a fully responsive and interactive website was made to help them increase their
sales. Along with website development and designing, software development and social media marketing was also done to ensure that they will be able to increase their business and save time
and money. 
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                       Using their website FAST OET was able to generate more leads. 

                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                       The website allows them to increase their online traffic which consequently increases their online revenue. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                       Using a website for their business growth helps FAST OET to increase their ROI. 
                      </p>
                    </li>
                  </ul>
                </div>{" "}
                {/* END PROJECT TEXT */}
                {/* MORE PROJECTS BUTTON */}
                <div className="more-projects text-end">
                  <Link href="/projects">
                    <a>
                      <h3 className="h3-md txt-400">More Projects</h3>
                    </a>
                  </Link>
                </div>
              </div>
            </div>{" "}
            {/* END PROJECT DISCRIPTION */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </ProjectLayout>
  );
};

export default ProjectDetails;

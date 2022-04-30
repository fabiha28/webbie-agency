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
                  The Lahore Diagnostics 
                  </h2>
                  {/* Project Data */}
                  <p className="p-xl project-data">
                    <span>Lahore Diagnostics</span>
                    <span> 2022-01-26 </span>
                    <span>Software Development</span>
                    <span>
                      <a href="#" className="pink-color">
                      www.thelahorediagnostics.com
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
                      src="/images/projects/lhr-3.png"
                      alt="project-preview"
                      style={{width:'60%', border:'1px solid white', borderRadius :'20px', display:'block', margin:'auto'}}
                    />
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  Lahore Diagnostics was founded with the goal of providing expert diagnostic services for
accurate illness interpretation. They think that accurate diagnosis is the first and most important
step in treating any disease. They are committed to providing this service to all of their patients
and referring medical professionals. They provide the best services by the top members of the
team to reach their objectives.

                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">
                    Overview &amp; Challenge
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                  Websites and social media for the promotion of a business is no longer optional. It is now
considered as an essential way to reach your customers, gain access to their valuable insights and
grow your business. 
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                  Our client The Lahore Diagnostics asked us to create a business website for them as they knew
that with billions of people using social media on a daily basis, social media platforms and
websites give a huge audience for your business to engage with customers, raise brand
awareness, and generate more leads. 
                  </p>
                  {/* PROJECT IMAGES */}
                  <div className="row d-flex align-items-center project-inner-img">
                    {/* IMAGE #1 */}
                    <div className="col-md-6">
                      <div className="project-image top-img">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/lhr.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/lhr.png"
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
                            href="images/projects/lhr-2.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/lhr-2.png"
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
                        <span className="txt-500">SEO & PPC Advertising</span> was the part of the project to provide on-page and off-page
SEO services. It helps to bring The Lahore Diagnostics on top in Google search engines. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Website Development and Designing</span>  was done by our experts to provide The Lahore
Diagnostics a fully functional website.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Digital Marketing</span>  was provided to them by our company to ensure that the popularity of
social media is used to leverage their business. 
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">The Royalty Programme</span>  was initiated for our client to enhance the intercommunications between doctors and to provide cost-effective and reasonable medical
services to its valued patients. 
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
                  After choosing website and social media for the promotion of their business, The Lahore
Diagnostics experienced a massive increase in their business growth. SEO services helped them
to reach top place in Google search engines. 
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Our services helped The Lahore Diagnostics to boost their business productivity when
used for public relations, marketing, and advertising purposes.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      We provided them with a website embedded in creativity and professionalism. 
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

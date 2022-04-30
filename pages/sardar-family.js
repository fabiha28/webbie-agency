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
                  Sardar Family Packages, Leaders of Pakistan’s Packaging Industry
                  </h2>
                  {/* Project Data */}
                  <p className="p-xl project-data">
                    <span>Sardar Family Packages</span>
                    <span>2022-01-17 </span>
                    <span>Software
Development</span>
                    <span>
                      <a href="#" className="pink-color">
                      www.Sfpackages.com
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
                      src="/images/projects/sardar-3.png"
                      alt="project-preview"
                      style={{width:'60%', border:'1px solid white', borderRadius :'20px', display:'block', margin:'auto'}}
                    />
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  Sardar Family Packages (Pvt.) Ltd. has built a reputation in the industry as a provider of rigid
corrugated box packaging solutions to broaden the horizons of business clients. Their firm's
objective is to provide their clients with exceptional branding services that will help them present
their products and business in a professional manner. Sardar Family Packages provide each of
their clients with individualised attention in order to ensure high quality. 
                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">
                    Overview &amp; Challenge
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                  Sardar Family Packages is one of our clients who used to run their business without any social
media platforms or website. To enhance their business growth they wanted us to make a website
for them. 
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                  Without having any social media platforms or a Website their business was unknown to the
world. They produce less revenue and generate little or no leads. So, they decided to give a
strong boost to their business by choosing us to make a business website and do social media
marketing for them.
                  </p>
                  {/* PROJECT IMAGES */}
                  <div className="row d-flex align-items-center project-inner-img">
                    {/* IMAGE #1 */}
                    <div className="col-md-6">
                      <div className="project-image top-img">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/sardar.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/sardar.png"
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
                            href="images/projects/sardar-2.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/sardar-2.png"
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
                        <span className="txt-500">Website Development and designing</span> was done in this project to make Sardar Family
Packages visible on Google. Different add ons and plugins make their website user
friendly. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Social Media Marketing</span> approach was integrated into the project to ensure that more
people know about the services provided by Sardar Family Packages. 
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Business Automation </span>  strategy of the project helps to lessen the workload. It replace
manual labor with technology. It helps in saving time and money. System solved the key
tasks and allowed workers to focus on the important one's.
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
                  A fully interactive and functional website was made for Sardar Family Packages to make them
look more professional in the industry. Social Media Marketing campaigns were done to let people know about their services. Business automation was used to ease their workload and to
handle the tasks more efficiently. 
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Developing a website helped Sardar Family Packages to grow their network globally. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      Social media platforms help them generate more online revenue for their valuable
services. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      Our services helped them to increase their marketing and branding. 
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

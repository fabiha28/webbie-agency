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
                  J Storez, Wholesale B2B Marketplace 
                  </h2>
                  {/* Project Data */}
                  <p className="p-xl project-data">
                    <span>J Storez</span>
                    <span>2021-12-17</span>
                    <span>ECommerce </span>
                    <span>
                      <a href="#" className="pink-color">
                      www.jstorez.com
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
                      src="/images/projects/js3.png"
                      alt="project-preview"
                      style={{width:'60%', border:'1px solid white', borderRadius :'20px', display:'block', margin:'auto'}}
                    />
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  J Storez a wholesale B2B marketplace brings together many B2B buyers and sellers on their
website so that they can perform transactions. B2B (business-to-business) denotes transactions
between businesses, so the shopping experience of B2B marketplaces must meet the supply and
purchasing needs of businesses. It's an eCommerce website that sells products and services to
other businesses only.

                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">
                    Overview &amp; Challenge
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                  In today's society, the majority of businesses feel that having a website helps you expand your
business far more than having social media profiles. J Storez was one of our clients that wanted
to expand their network by displaying their goods and services on a website.
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                  Using social media apps alone wasn't enough to increase lead generation. J Storez reached us to
design a website for them that would highlight their business products and accomplishments.
They needed to create more leads to boost their success, so they decided to give their business a
boost by promoting themselves on Google and other social media platforms.
                  </p>
                  {/* PROJECT IMAGES */}
                  <div className="row d-flex align-items-center project-inner-img">
                    {/* IMAGE #1 */}
                    <div className="col-md-6">
                      <div className="project-image top-img">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/js.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/js.png"
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
                            href="images/projects/js2.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/js2.png"
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
                        <span className="txt-500">Website Development</span> was done for them to showcase their services and achievements
in the industry of B2B marketplace.
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">SEO & PPC ADVERTISING</span>  was provided to them in order to bring their website to
the top searches of Google.
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Networking and IT Infrastructure </span>  was initiated for J Storez ranging from network
installations to upgrading speed, security or cloud migration. 
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Digital Marketing</span> g campaigns were done to let people know about the products provided
by J Storez. 
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Software Development</span>  was initiated for our client to enhance the use of innovative
approaches and custom software.

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
                  After opting SEO & PPC Advertising, website and digital marketing for the promotion of their
business, J Storez experienced a massive increase in their business growth. 
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                       SEO services helped them to reach top place in Google search engines. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      Our services helped J Storez to increase their business productivity. 
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

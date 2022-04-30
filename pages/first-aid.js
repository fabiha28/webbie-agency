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
                  FIRST AID MADE EASY, Pakistan's first Medical Ed-Tech Platform
                  </h2>
                  {/* Project Data */}
                  <p className="p-xl project-data">
                    <span>First Aid Made Easy</span>
                    <span> (2021-01-22) </span>
                    <span>Website Development</span>
                    <span>
                      <a href="#" className="pink-color">
                    www.FirstAidMadeEasy.com.pk
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
                      src="/images/projects/first-3.png"
                      alt="project-preview"
                      style={{width:'60%', border:'1px solid white', borderRadius :'20px', display:'block', margin:'auto'}}
                    />
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  FIRST AID MADE EASY by Dr. Hafiz Atif, is the platform for students to prepare for FCPS,
NLE, MD/MS, HAAD, MOH, USMLE, PLAB, NEET in an easy and comprehensive way.
It has a fully integrated online E-Learning platform that allows students to prepare for the related
courses with full ease and flexibility. Chief instructor Dr. Hafiz Atif of FIRST AID MADE EASY
has tons of experience in teaching STEP-1 & Step-2 students preparing for respective exams. 
                  </p>
                  {/* Small Title */}
                  <h5 className="h5-md mt-25 mb-20">
                    Overview &amp; Challenge
                  </h5>
                  {/* Text */}
                  <p className="p-lg">
                  FIRST AID MADE EASY by Dr. Hafiz Atif is our client that used to run their business only
with the help of social media platforms. Social media platforms weren't enough for their business
to produce desired outcomes. 
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                  Using social media apps alone wasn't enough to increase lead generation. FIRST AID MADE
EASY by Dr. Hafiz Atif requested that we design a website for them that would highlight their
courses and accomplishments. They needed to create more leads to increase their success, and the
most convenient method to do so was to make themselves prominent on Google. Establishing
social proof by prominently displaying their finest reviews or testimonials on their website is an
amazing approach to do so. 
                  </p>
                  {/* PROJECT IMAGES */}
                  <div className="row d-flex align-items-center project-inner-img">
                    {/* IMAGE #1 */}
                    <div className="col-md-6">
                      <div className="project-image top-img">
                        <div className="hover-overlay">
                          <a
                            className="image-link"
                            href="images/projects/first.png"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/first.png"
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
                            href="images/projects/first-2.jpg"
                            title
                          >
                            <img
                              className="img-fluid"
                              src="/images/projects/first-2.png"
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
                        <span className="txt-500">Website Development</span> was done for them to attract more clients and testimonials were
displayed on the website serves as a permanent archive. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Software Development</span>  was initiated for our client with innovative and custom approaches
to ensure the success of the project. 
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Mobile App Development</span>  was done to help them grow their business, we started
developing unique, high-performing, and feature-rich mobile apps
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Video Content Security and Delivery</span>  was provided to them so that they can interact with
the students in a secure way. 
                      </p>
                    </li>


                    <li className="list-item">
                      <p className="p-lg">
                        <span className="txt-500">Social media marketing</span>  was part of the project to encourage customers to contact them
more often to enquire about their services. 
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
                  A responsive and user-friendly website was created for them to establish their place in the ELearning industry and to ensure their long-term success. Social media campaigns were used to
reach the targeted audience more frequently. 
                  </p>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Using Google our client was able to get more registrations in their E-Learning institute. 
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      The annual revenue of the institute increased two times more than the previous year. 
                      </p>
                    </li>

                    <li className="list-item">
                      <p className="p-lg">
                      The development of software and mobile app made sure that the success of the project is
100%.
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

import Link from "next/dist/client/link";
const Faq = () => {
  return (
    <section id="faqs-2" className="wide-60 faqs-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-80">
              {/* Title */}
              <h2 className="h2-md">Got Questions? Look Here</h2>
              {/* Text */}
             
            </div>
          </div>
        </div>
        {/* FAQs-2 QUESTIONS */}
        <div className="faqs-2-questions">
          <div className="row row-cols-1 row-cols-lg-2">
            {/* QUESTIONS HOLDER */}
            <div className="col">
              <div className="questions-holder pr-15">
                {/* QUESTION #1 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  What are the different types of apps you can develop?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Android Apps
                  <br/>
iOS Apps
<br/>
Cross-Platforms Apps
                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  What is Android app development?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  The Android application development process involves creating mobile apps for Android-based devices. The Android Software Development Kit (SDK) allows Android apps to be coded in Java, Kotlin, and C++.


                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  What is iOS app development?
                  </h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      iOS applications development involves creating software for Apple hardware, including iPhones, iPads, and iPod Touches.


                      </p>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* END QUESTIONS HOLDER */}
            {/* QUESTIONS HOLDER */}
            <div className="col">
              <div className="questions-holder pl-15">
                {/* QUESTION #4 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">What is cross-platform app development?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  The Development of cross-platform apps involves making one application that runs across different platforms instead of creating different app versions.




                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">What is the approximate time frame to develop an app?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Apps take an average of two weeks and even eight months, depending on how complex the app is and how well organized it is. Many factors contribute to the time frame to develop and successfully launch a mobile app.




                  </p>
                  {/* Answer */}
                 
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">I want to keep my app development idea confidential. Do you sign an NDA with clients?</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Indeed, we do. Webbie will keep your idea safe and confidential. We will hand you the code and the app once the project is complete.




                      </p>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* END QUESTIONS HOLDER */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* END FAQs-2 QUESTIONS */}
        {/* MORE QUESTIONS BUTTON */}
        <div className="row">
          <div className="col">
            <div className="more-questions">
              <h5 className="h5-sm">
                Have more questions?{" "}
                <Link href="/contacts">
                  <a>Ask your question here</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Faq;

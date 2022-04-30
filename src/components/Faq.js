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
                  What is software development?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  An area of computer science that deals with developing computer software using one or more specialized programming languages.
                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  How long does it take to develop enterprise software?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  As a matter of course, it depends on your requirements. A small project can be completed in just a couple of months. We aim for six months on average for larger projects and resource the team accordingly to achieve this goal. 
                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  How Webbie assures privacy and confidentiality?
                  </h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      We ensure that all of your intellectual property is protected to the fullest extent possible when we sign a contract with you.
                      </p>
                    </li>
                    <li className="list-item">
                     
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
                  <h5 className="h5-md">How do you ensure the security and risk management of the project?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  All aspects of security and compliance are handled by our company when you assign us your projects.


                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Do you update your clients regularly during the software development process?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Every week, we keep you updated on how things are going and how real progress compares to the project plan. We will hold a demo every two to four weeks. 


                  </p>
                  {/* Answer */}
                 
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Do Webbie offer any support after the completion of the project?</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      After your project has been launched, our support team will be there 24/7 if any issues arise.  


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

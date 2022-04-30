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
                  How does social media marketing work?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Social media marketing entails creating your posts and paying to place ads on social networking sites so you can connect with your market and build your brand.


                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  What does a social media marketing agency do?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Social media marketing agencies use existing content like blog posts, videos, and events to create social media content. Their duties include captioning videos, uploading links, and deciding if their content will be boosted by advertising or other means.




                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  Why should I advertise my business on social media?
                  </h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      With social media, you can interact with customers instantly. A business can also respond to its customers right away. Social media also has two primary functions: backlinks generation and customer engagement.




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
                  <h5 className="h5-md">How much should I spend on social media?
</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  The amount of budget you can allocate for social media advertising is entirely up to you. Although this is not a particularly expensive advertising route, you get more value for your money, and the more results you get.






                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">What benefits can I get using your social media marketing services?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Webbie attracts and retains an impressive 90 percent of clients in need of social media marketing services. We provide unmatched client experiences and results through our competitive campaigns and industry-leading technology. 






                  </p>
                  {/* Answer */}
                 
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Why Webbie for social media marketing services?

</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Utilizing social media for marketing is a professional task since accessing social media for entertainment is simple. Our team has many well-trained professionals who are adept at social media marketing and can create web presences for you on any social network you know. Our strategists will closely monitor you as it is run according to a well-planned strategy. If you work with us, your social media marketing campaign will surely be a success.






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

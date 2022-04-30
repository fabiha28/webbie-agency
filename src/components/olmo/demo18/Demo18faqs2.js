import Link from "next/dist/client/link";
const Demo18faqs2 = () => {
  return (
    <section id="faqs-2" className="bg-snow wide-60 faqs-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-75">
              {/* Section ID */}
              <span className="section-id txt-upcase">
                Frequently Asked Questions
              </span>
              {/* Title */}
              <h3 className="h3-lg">
                Everything you need to know before getting started
              </h3>
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
                  <h5 className="h5-sm">
                  What is Search Engine Optimization?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  In the world of online marketing, SEO refers to the process of enhancing your website’s visibility in search results found on search engines like Google.


                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-sm">
                  What is On-Page SEO?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  On-page SEO (or on-site SEO) involves optimizing a web page for specific keywords to ensure greater visibility in search results. Changes are made to elements such as title tags, headings, content, etc.


                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-sm">
                  What is Off-Page SEO?
                  </h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Off-page SEO involves everything that happens outside of your website to raise the ranking of your website. Links, social media strategies, influencer marketing, etc., are examples of off-SEO tips.


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
                  <h5 className="h5-sm">How does SEO work?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Search engines consider three factors (which we work on most) when analyzing all websites in their index: authority, relevance, and crawlability. 


                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-sm">Why does my business need professional SEO services?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Your company can benefit from every change in search engine optimization by utilizing our professional SEO services. 

    
                  </p>
                  {/* Answer */}
                 
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-sm">How long will my site take to get top rankings in SERPs from your SEO services?</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Usually, a website at least a year or two old will begin showing improved search rankings within two to three weeks of getting optimized. 


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

export default Demo18faqs2;

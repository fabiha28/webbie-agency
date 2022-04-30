import Link from "next/link";
const Demo3faqs2 = () => {
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
                  I own a small business. Do I need custom web application development services?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  That depends on the type and scale of the web solution you plan to build and how small your business really is. If you lead a small team that does not exceed 20 experts in total and you need a simple website, there are enough website builders that may cover your needs. If you need a web solution with sophisticated and stunning visuals, custom animations, and advanced functionality, custom web development services is your option. If you plan to grow your ecommerce business and add new functionality and new Magento modules often, custom web application development services are the answer as well.

                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  How to find a web development services company?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  You can find a partner for your web solution with B2B research and ratings firms. Clutch is one of the best, they have a comprehensive, review-driven rating system and concise profiling, so you can find a web development services company quickly. As every business faced the challenge of creating a web solution at some point, you can also ask fellow business managers to recommend a reliable web development services company. This way, you will get a plain, unexaggerated feedback on a company and know what to expect from the partnership when it comes to both downsides and upsides.

                  </p>
                </div>
                {/* QUESTION #3 */}
               
              </div>
            </div>
            {/* END QUESTIONS HOLDER */}
            {/* QUESTIONS HOLDER */}
            <div className="col">
              <div className="questions-holder pl-15">
                {/* QUESTION #4 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">I need professional web development services, no less. How can I find a reliable company with sufficient experience?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  First and foremost, professional web development services are backed up by many years of experience (look out for companies with at least 8 years in web development) and expertise in a wide range of technologies that are required to build a reliable and long-lasting solution. When you are selecting a partner, see what companies they worked with and explore their case studies. Making a detailed tour of your potential partner's website is a great way to gauge what they can build for you. Is their site visually appealing and comfortable? From a standpoint of a regular user, are there any evident hurdles in the user experience that should have been eliminated? Is sending the form intuitive? And so on. On top of that, pair this option with the previous one and see what ratings say.

                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">Web software development services often include progressive web apps. What are those?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  This web app type is a combination of a website and a mobile app. It can be accessed by typing in the URL, but has the functionality of an app, for example enabling users to receive notifications or use it offline. In other words, a progressive web app is a native application, but in a browser. This app type will allow you to cut costs and reach a wider audience — not all of your users might have all-powerful smartphones to access the features of the native app, but a progressive web app can deliver a solid, albeit cut experience still. It can be used alongside a native app, or as a standalone application. Creating progressive web apps has lately become one of the popular web software development services.

                  </p>
                  {/* Answer */}
                 
                </div>
                {/* QUESTION #6 */}
               
              </div>
            </div>
            {/* END QUESTIONS HOLDER */}
          </div>
          {/* End row */}
        </div>
        {/* END FAQs-2 QUESTIONS */}
        {/* MORE QUESTIONS BUTTON */}
        <div className="row">
          <div className="col">
            <div className="more-questions">
              <h5 className="h5-sm">
                Have more questions?
                <Link href="/contacts">
                  <a>Ask your question here</a>
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo3faqs2;

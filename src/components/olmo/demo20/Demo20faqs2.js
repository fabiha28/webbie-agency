import Link from "next/dist/client/link";
const Demo20faqs2 = () => {
  return (
    <section id="faqs-2" className="pb-60 faqs-section division">
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
                  What other services do you provide ?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  We provide project management services and implementation services to build IT infrastructure suited for your business needs.


                  </p>
                </div>
                {/* QUESTION #2 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  Who uses your services ?
                  </h5>
                  {/* Answer */}
                  <p className="p-lg">
                  Our clients range from SMEs to MNCs, from fields extending from manufacturing to finance to technology and service providers.


                  </p>

                  <p className="p-lg">
                  You may confidently use our IT infrastructure and services to support your electronic transaction systems, ERP systems, CRM systems, email/productivity systems etc.




                  </p>
                </div>
                {/* QUESTION #3 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">
                  What do you do for service monitoring ?
                  </h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      24×7, we proactively monitor the up-down status of your IT system to ensure it is operating.


                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      We have monitoring tools in place and duty personnel to analyse all alerts received and take appropriate rectification actions when necessary. 
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
                  <h5 className="h5-md">How much your service cost?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  There’s no such thing as “standardized pricing” for managed IT services,
                  To find the right MSP at the right price for your needs, your best bet is to find the rare MSP that offers all-in, fixed-fee pricing with no hidden costs.
                  </p>
                </div>
                {/* QUESTION #5 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">How do I contact you for service support ?</h5>
                  {/* Answer */}
                  <p className="p-lg">
                  We have a 24×7 helpdesk team whom you can call anytime to log an incident for investigation or a service request.


                  </p>
                  {/* Answer */}
                  <p className="p-lg">
                  All incidents/service request will be assigned a priority level and responded to accordingly.


                  </p>
                </div>
                {/* QUESTION #6 */}
                <div className="question wow fadeInUp">
                  {/* Question */}
                  <h5 className="h5-md">How can I be assured of your services quality ?</h5>
                  {/* Answer */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                      Our team has multiple years of experiences serving MNCs clients with stringent service expectations. 
                       We serve customers running critical electronic trading systems and SMEs using time-critical manufacturing systems.  
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                      So start a small project with us.  We can conduct a POC.


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

export default Demo20faqs2;

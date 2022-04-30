import Link from "next/dist/client/link";
import FAQ from "../src/layout/Faq_layout";

const faqs = () => {
  return (
    <FAQ
      navLight
      whiteLogo
      btnCustomHover="btn btn-skyblue tra-white-hover last-link"
      singlePage
    >
      <div id="faqs-page" className="page-hero-section division">
        <div className="page-hero-overlay division">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="hero-txt text-center white-color">
                  {/* Title */}
                  <h2 className="h2-xs" style={{color:'black!important'}}>Frequently Asked Questions</h2>
                  {/* Text */}
                  <p className="p-xl" style={{color:'black!important'}}>
                    Aliquam a augue suscipit, luctus neque purus ipsum neque at
                    dolor primis libero tempus, blandit and cursus varius
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </div>{" "}
        {/* End hero-overlay */}
        {/* WAVE SHAPE BOTTOM */}
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
            <path
              fill="#ffffff"
              fillOpacity={1}
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </div>{" "}
      {/* END PAGE HERO */}
      {/* FAQs-2
			============================================= */}
      <section id="faqs-2" className="wide-60 faqs-section division">
        <div className="container">
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
                      Can I see olmo in action before purchasing?
                    </h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Etiam amet mauris suscipit in odio integer congue metus
                      vitae arcu mollis blandit ultrice ligula egestas and magna
                      suscipit lectus magna suscipit luctus blandit vitae
                    </p>
                  </div>
                  {/* QUESTION #2 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">
                      What are the requirements for using olmo?
                    </h5>
                    {/* Answer */}
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida a donec ipsum enim an
                      porta justo integer at velna vitae auctor integer congue
                      undo magna at pretium purus pretium
                    </p>
                  </div>
                  {/* QUESTION #3 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">
                      Can I use olmo on different devices?
                    </h5>
                    {/* Answer */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                          ligula euismod pretium purus pretium rutrum tempor
                          sapien
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium a purus
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
                    <h5 className="h5-md">Do you have a free trial?</h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Cubilia laoreet augue egestas and luctus donec curabite
                      diam vitae dapibus libero and quisque gravida donec and
                      neque. Blandit justo aliquam molestie nunc sapien
                    </p>
                  </div>
                  {/* QUESTION #5 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">How does olmo handle my privacy?</h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                    {/* Answer */}
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida donec congue leo
                      metus. Vitae arcu mollis blandit integer at velna
                    </p>
                  </div>
                  {/* QUESTION #6 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">I have an issue with my account</h5>
                    {/* Answer */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Quaerat sodales sapien euismod blandit purus and ipsum
                          primis in cubilia laoreet augue luctus
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
      {/* END FAQs-2 */}
      {/* CALL TO ACTION-7
			============================================= */}



{/* <section
        id="contacts-2"
        className="bg-snow wide-50 inner-page-hero contacts-section division"
      > */}
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-80">
                {/* Title */}
                <h2 className="h2-xs">
                  {`Have a question? Need help? Don't hesitate, drop us a line`}
                </h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque at
                  dolor primis libero tempus, blandit and cursus varius and
                  magnis sapien
                </p>
              </div>
            </div>
          </div>
          {/* CONTACT FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="form-holder">
                <form
                  name="contactform"
                  className="row contact-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  {/* Form Select */}
                  <div className="col-md-12 input-subject">
                    <p className="p-lg">This question is about: </p>
                    <span>
                      Choose a topic, so we know who to send your request to:{" "}
                    </span>
                    <select
                      className="form-select subject"
                      aria-label="Default select example"
                    >
                      <option selected>This question is about...</option>
                      <option>Registering/Authorising</option>
                      <option>Using Application</option>
                      <option>Troubleshooting</option>
                      <option>Backup/Restore</option>
                      <option>Other</option>
                    </select>
                  </div>
                  {/* Contact Form Input */}
                  <div className="col-md-12">
                    <p className="p-lg">Your Name: </p>
                    <span>Please enter your real name: </span>
                    <input
                      type="text"
                      name="name"
                      className="form-control name"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Your Email Address: </p>
                    <span>
                      Please carefully check your email address for accuracy
                    </span>
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div className="col-md-12">
                    <p className="p-lg">Explain your question in details: </p>
                    <span>
                      Your OS version, olmo version &amp; build, steps you did.
                      Be VERY precise!
                    </span>
                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="I have a problem with..."
                      defaultValue={""}
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-md-12 mt-15 form-btn text-right">
                    <button
                      type="submit"
                      className="btn btn-skyblue tra-grey-hover submit"
                    >
                      Submit Request
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
          {/* END CONTACT FORM */}
        </div>{" "}
        {/* End container */}
      {/* </section> */}
      {/* END CONTACTS-2 */}
      {/* DIVIDER LINE */}
      <hr className="divider" />
      {/* CALL TO ACTION-8
			============================================= */}
      <section id="cta-8" className="bg-snow wide-100 cta-section division">
        <div className="container">
          <div className="cta-8-wrapper pc-25">
            <div className="row row-cols-1 row-cols-md-2">
              {/* BOX #1 */}
              <div className="col">
                <Link href="/pricing">
                  <a>
                    <div className="cta-box cta-top-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-wallet" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        <h5 className="h5-md">View Pricing</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus at auctor tempus
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #1 */}
              {/* BOX #2 */}
              <div className="col">
                <Link href="/faqs">
                  <a>
                    <div className="cta-box bg-white wow fadeInUp">
                      {/* Icon */}
                      <div className="cta-ico">
                        <div className="ico-60">
                          <span className="flaticon-help" />
                        </div>
                      </div>
                      {/* Text */}
                      <div className="cta-txt">
                        {/* Title */}
                        <h5 className="h5-md">Read the FAQs</h5>
                        {/* Text */}
                        <p className="p-lg">
                          Porta semper lacus cursus feugiat primis ultrice
                          ligula risus at auctor tempus
                        </p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>{" "}
              {/* END BOX #2 */}
            </div>{" "}
            {/* End cta-8-wrapper */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      
      {/* <div id="cta-7" className="cta-section division">
        <div className="container">
          <div className="cta-7-wrapper bg-snow">
            <div className="row d-flex align-items-center">
              {/* TEXT */}
              {/* <div className="col-lg-9">
                <div className="cta-7-txt">
                  <p className="p-xl">
                    {`Still have a question? Don't worry, our customer care team
                    is ready to help you with any questions or problems`}
                  </p>
                </div>
              </div> */}
              {/* BUTTON */}
              {/* <div className="col-lg-3 text-end">
                <div className="cta-7-btn">
                  <Link href="/contacts">
                    <a className="btn btn-skyblue tra-grey-hover">Contact Us</a>
                  </Link>
                </div>
              </div>
            </div>{" "} */}
            {/* End row */}
          {/* </div>{" "} */}
          {/* End cta-7-wrapper */}
        {/* </div>{" "} */}
        {/* End container */}
      {/* </div> */}
       {/* */} 
    </FAQ>
  );
};

export default faqs;

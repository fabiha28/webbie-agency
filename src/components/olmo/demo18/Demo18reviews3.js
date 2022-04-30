const Demo18reviews3 = () => {
  return (
    <section
      id="reviews-3"
      className="bg-snow wide-70 reviews-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TESTIMONIALS COLUMN */}
          <div className="col-lg-6 order-last order-lg-2">
            <div className="reviews-3-column left-column pc-20 mb-40">
              {/* TESTIMONIAL #1 */}
              <div id="rw-3-1" className="review-3 wow fadeInUp">
                {/* Testimonial Avatar */}
                <div className="review-3-avatar">
                  <img src="/images/review-author-3.jpg" alt="review-avatar" />
                </div>
                {/* Testimonial Text */}
                <div className="review-3-txt">
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <h6 className="h6-lg">
                      Joel Peterson
                      <span className="text-secondary">
                        <a href="#">Marketing Manager</a>
                      </span>
                    </h6>
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  My new site is doing very well and is on page one for most of the Google search terms we want already. 
                  </p>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #1 */}
              {/* TESTIMONIAL #2 */}
              <div id="rw-3-2" className="review-3 wow fadeInUp">
                {/* Testimonial Avatar */}
                <div className="review-3-avatar">
                  <img src="/images/review-author-2.jpg" alt="review-avatar" />
                </div>
                {/* Testimonial Text */}
                <div className="review-3-txt">
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <h6 className="h6-lg">
                      Joel Peterson
                      <span className="text-secondary">
                        <a href="#">Internet Surfer</a>
                      </span>
                    </h6>
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  Nothing this cool has ever been created before in such a short time. I appreciate the hard work and keeping it on schedule.
                  </p>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #2 */}
              {/* TESTIMONIAL #3 */}
              <div id="rw-3-3" className="review-3 wow fadeInUp">
                {/* Testimonial Avatar */}
                <div className="review-3-avatar">
                  <img src="/images/review-author-5.jpg" alt="review-avatar" />
                </div>
                {/* Testimonial Text */}
                <div className="review-3-txt">
                  {/* Testimonial Author */}
                  <div className="review-author">
                    <h6 className="h6-lg">
                      Jennifer Harper
                      <span className="text-secondary">
                        <a href="#">App Developer</a>
                      </span>
                    </h6>
                  </div>
                  {/* Text */}
                  <p className="p-lg">
                  Webbie has an  a brilliant online marketer.
                  They are driven by a real passion for understanding and mastering design, search and social marketing.
                  </p>
                </div>
              </div>{" "}
              {/* END TESTIMONIAL #3 */}
            </div>
          </div>{" "}
          {/* END TESTIMONIALS COLUMN */}
          {/* TEXT BLOCK */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="txt-block left-column pl-30 mb-40 wow fadeInRight">
              {/* Section ID */}
              <span className="section-id txt-upcase">What People Say</span>
              {/* Title */}
              <h3 className="h3-lg">
                {`You're in good hands. See what our clients say about olmo.`}
              </h3>
              {/* Text */}
              <p className="p-lg">
              I just wanted to take a moment to tell you how absolutely
               AMAZING Webbie has been through our process 
               with very little understanding of how everything works,
                but they are incredibly patient and helpful. I would recommend 
                Webiee, to everyone I know, and couldn’t possibly say
                 enough about how positive she has made our experience. 
              </p>
              {/* Button */}
              <a href="#" className="btn btn-tra-grey skyblue-hover">
                Read All Reviews
              </a>
            </div>
          </div>{" "}
          {/* END TEXT BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo18reviews3;

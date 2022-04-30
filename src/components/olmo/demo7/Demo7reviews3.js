const Demo7reviews3 = () => {
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
                  Throughout the entire process, Webbie demonstrated high 
                  professionalism, subject matter expertise and exceeded our 
                  expectations in every way.
                  </p>
                </div>
              </div>
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
                  I love these folks! Their support is the best and I always get solutions to any questions or problems I might have. 
                  </p>
                </div>
              </div>
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
                  I just wanted to take a moment to say how pleased I am with your company,
                  </p>
                </div>
              </div>
              {/* END TESTIMONIAL #3 */}
            </div>
          </div>
          {/* END TESTIMONIALS COLUMN */}
          {/* TEXT BLOCK */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="txt-block left-column pl-30 mb-40 wow fadeInRight">
              {/* Section ID */}
              <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                What People Say
              </span>
              {/* Title */}
              <h2 className="h2-xs">
                {` You're in good hands. See what our clients say about Webbie.`}
              </h2>
              {/* Text */}
              <p className="p-lg">
              I purchased this company's Developer Pro pack
               (the "all-you-can-eat-and-then-some" package,
                containing all current and future themes). I am very
                 satisfied with this purchase for more than one reason.
                  The themes themselves are very attractive and, while built
                   on modern standards and technology, not overly
                    "hip" or "edgy" or "hyper-dog techno". 
              </p>
              {/* Button */}
              <a href="#" className="btn btn-tra-grey pink-hover">
                Read All Reviews
              </a>
            </div>
          </div>
          {/* END TEXT BLOCK */}
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo7reviews3;

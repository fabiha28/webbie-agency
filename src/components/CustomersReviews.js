import Slider from "react-slick";

const CustomersReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoPlay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <section
      id="reviews-1"
      className="bg-whitesmoke-gradient wide-100 reviews-section division slickmargin"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Stories From Our Customers</h2>
              {/* Text */}
              <p className="p-xl">
              I am very happy with my website. It looks very professional! I did not tell him that exactly what I wanted, but they said don't worry about anything. We will make it amazing, so they did. Very very happy. Decently use you again soon for my other projects! Thank you very much for every thing!
              </p>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col">
            <div className="owl-carousel owl-theme reviews-1-wrapper">
              <Slider {...settings}>
                {/* TESTIMONIAL #1 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    Many thanks for your wonderful team and yourself to help on this project. By far, this is the best web development team I have worked with. I'm so glade to have your team and yourself to handle this project and I look forward to future collaborations.

                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-1.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Scott Boxer</h6>
                        <p className="p-md">@scott_boxer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    Webbie truly delivers on web development. Design caliber is top notch, but the integration of good SEO is really what separates her from all others.
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-2.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Joel Peterson</h6>
                        <p className="p-md">Internet Surfer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                    We decided to partner with the Webbie team based on their professional approach. The team is always ready to go the extra mile for us,                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-3.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Marisol19</h6>
                        <p className="p-md">@marisol19</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Mauris donec a magnis sapien etiam sapien congue augue
                      pretium ligula lectus aenean a magna undo mauris lectus
                      laoreet tempor egestas
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-4.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Leslie D.</h6>
                        <p className="p-md">Web Developer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      An augue cubilia laoreet magna suscipit egestas and ipsum
                      a lectus purus ipsum primis and augue ultrice ligula and
                      egestas a suscipit lectus gestas undo auctor tempus
                      feugiat impedit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-5.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Jennifer Harper</h6>
                        <p className="p-md">App Developer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      An augue cubilia laoreet undo magna ipsum semper suscipit
                      egestas magna ipsum ligula a vitae purus and ipsum primis
                      cubilia magna suscipit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-6.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Jonathan Barnes</h6>
                        <p className="p-md">jQuery Programmer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #6 */}
                {/* TESTIMONIAL #7 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Augue egestas diam tempus volutpat egestas augue in
                      cubilia laoreet magna suscipit luctus dolor and blandit
                      vitae purus diam tempus an aliquet porta rutrum gestas
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-7.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Mike Harris</h6>
                        <p className="p-md">Graphic Designer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #7 */}
                {/* TESTIMONIAL #8 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Augue at vitae purus tempus egestas volutpat augue undo
                      cubilia laoreet magna suscipit luctus dolor blandit at
                      purus tempus feugiat impedit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/images/review-author-8.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Evelyn Martinez</h6>
                        <p className="p-md">WordPress Consultant</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>
                    {/* End Testimonial Author */}
                  </div>
                  {/* End Text */}
                </div>
                {/* END TESTIMONIAL #8 */}
              </Slider>
            </div>
          </div>
        </div>
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default CustomersReviews;

import Link from "next/dist/client/link";
import { useEffect } from "react";
import { scroll } from "../src/utils/utils";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
// import Lote from '/demo/images/lote.gif';
import Lottie from '../public/demo/images/logo.png';
import { VideoImage } from "../src/components/VideoContent";
// import VideoImage from '../src/components/VideoContent';
import HomeHeader from "../src/layout/HomeHeader";
import Counter from "../src/components/Counter";
const Index = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  }, []);
  return (
    <div id="page" className="page-wrapper demo">
      {/* HEADER
			============================================= */}
    <HomeHeader/>
      
      {" "}
      {/* END HEADER */}
      {/* HERO
			============================================= */}
      <section id="hero" className="bg-scroll hero-section division">
        <div className="container white-color">
          <div className="row d-flex align-items-center">
         
            <div className="col-lg-4">
              <div className="hero-txt">
                <span className="section-id">One-stop solution</span>
                <h2>Revolutionary Digital Development Services</h2>
                <p className="p-lg">
                Providing modern day digital services to all sorts of clients including startups, small-to-midsize (SMB), and enterprise businesses.

                </p>
                <a
                  href="#select"
                  className="btn btn-theme tra-white-hover"
                  title
                >
                  Check Demos
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="hero-img">
                <img
                  className="img-fluid"
                  src="/demo/images/hero-img.png"
                  alt="hero-image"
                />
              </div>
            </div>
            <h2 className="tra-title">Flexible</h2>
          </div>
        </div>{" "}
        {/* End container */}
        {/* WAVE SHAPE BOTTOM */}
        <div className="wave-shape-bottom">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 260">
            <path
              fill="#f4f4f9"
              fillOpacity={1}
              d="M0,224L120,224C240,224,480,224,720,197.3C960,171,1200,117,1320,90.7L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            />
          </svg>
        </div>
      </section>
      {/* END HERO */}
      {/* FEATURES
			============================================= */}

      
<section id="features-8" className="wide-60 features-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">


           

              {/* Title */}
              <h2 className="h2-md">Our Featured Services</h2>
              {/* Text */}
              <p className="p-xl">
              {/* We at olmo are on a Mission to help Small & 
              Medium Size business to have an online presence by which they 
              become visible to their target audience and execute your business idea to reality, */}
            {/* We provide world class digital solution for Startup,<br/> Small to Medium Business & Enterprise Business across
            the Globe.  */}
            We provide a range of digital solutions to a wide variety of industries such as
  E-Commerce | IT Industry | Education | Logistics | Manufacturing | Retail | Healthcare | Food & Beverages | 
Finance | Transportation | Government  etc.

              </p>
            </div>
          </div>
     
        </div>
        {/* FEATURES-8 WRAPPER */}
        <div className="fbox-8-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                 
                <Player
  autoplay
  loop
  src="https://assets2.lottiefiles.com/packages/lf20_hi95bvmx/WebdesignBg.json"
  className="lotie_file_250"
  
                                                   >
</Player>

                </div>
                {/* Title */}
                <h5 className="h5-md" style={{marginTop:'-5em'}}>Website Development</h5>
                {/* Text */}
                <p className="p-lg">
               
                  
                Our Experts Will help you in web development embedded in professionalism, 
                creativity, and with technical expertise.






                </p>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                 
                 
                      <Player
  autoplay
  loop
  
  src="https://assets9.lottiefiles.com/packages/lf20_tsdnk8ut.json"
  className="lotie_file_250"
  
                                                   >
</Player>

                </div>
                {/* Title */}
                <h5 className="h5-md" style={{marginTop:'-5em'}}>Software Development</h5>
                {/* Text */}
                <p className="p-lg">
                We use innovative approaches and custom software development know-hows to make your project succeed..


                </p>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  
                <Player
  autoplay
  loop
  
  
  
  //src="https://assets7.lottiefiles.com/packages/lf20_li9krdlx.json"
  src="https://assets6.lottiefiles.com/packages/lf20_glgarzql.json"
  className="lotie_file_250"
  
  
                          >
</Player>

{/* <img src={Lottie} width="300" height="300"></img> */}

                </div>
                {/* Title */}
                <h5 className="h5-md" style={{marginTop:'-5em'}}>Mobile App Development</h5>
                {/* Text */}
                <p className="p-lg">
                 
                We create innovative, high performing, and feature-packed mobile applications
                 that satisfy your business needs.





                </p>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* END FEATURES-8 WRAPPER */}
      </div>
      {/* End container */}




    </section>


      
    <section style={{marginTop:'-5em'}} id="features-8" className="wide-60 features-section division">
      <div className="container">
       {/* FEATURES-8 WRAPPER */}
       <div className="fbox-8-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                  
                <Player
  autoplay
  loop
  src="https://assets7.lottiefiles.com/packages/lf20_xevbijrw.json"
  className="lotie_file_250"
                                                   >
</Player>
                </div>
                {/* Title */}
                <h5 className="h5-md" style={{marginTop:'-4.8em'}} >Digital Marketing</h5>
                {/* Text */}
                <p className="p-lg">
                olmo providing cost-effective marketing tools and campaigns,
                 We offer SEO, digital marketing, 
                Social media marketing and AdWords management on Facebook, Google and other platforms.


                </p>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                 
                 
                      <Player
  autoplay
  loop
  src="https://assets9.lottiefiles.com/private_files/lf30_7n7lhyly.json"
  className="lotie_file_260"
  
                                                   >
</Player>

                </div>
                {/* Title */}
                <h5 className="h5-md" style={{marginTop:'-5em'}} >S.E.O & PPC Advertising</h5>
                {/* Text */}
                <p className="p-lg">
{/*            
                To become prominent and most desirable in the flow of enormous traffic
                 isn't easy . We at olmo are accepting the challenge to put your business 
                 in the top position of Google search. Take a chance to highlight your 
                 website, product  towards the top, within a suitable period. */}

                 We provide all types of SEO services including on-page and off-page SEO.
                  Our experts, use both automated and manual research  to improve your services and bring your website on top in search results.




                </p>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-8 mb-40 wow fadeInUp">
                {/* Image */}
                <div className="fbox-img bg-whitesmoke-gradient">
                 
                <Player
  autoplay
  loop
  src="https://assets2.lottiefiles.com/packages/lf20_t0lgow.json"
  className="lotie_file_260"
                                                   >
</Player>

                </div>
                {/* Title */}
                <h5 className="h5-md"style={{marginTop:'-5em'}}  >Networking & IT Infrastructure</h5>
                {/* Text */}
                <p className="p-lg">
                From network installations to upgrading speed, security
                 or cloud migration, olmo can help organizations build 
                 the network infrastructure they need.

                </p>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* END FEATURES-8 WRAPPER */}
</div>
</section>


    
      {/* SELECT
			============================================= */}
      
      <section id="select" className="bg-fixed select-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1 section-title">
              <h2>Top Technologies We Deal In</h2>
             
      
        
        {/* End row */}
      </div>
      {/* End container */}
    
            </div>



            
          </div>
          
          {/* END DEMOS WRAPPER */}
        
        {/* End container */}
      </section>
      {/* END SELECT */}
      {/* BANNER-1
			============================================= */}


<section
      id="content-6"
      className="content-6 wide-60 content-section division"
      style={{marginTop:'-7em'}}
    >
      <div className="container">

<div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-6 col-lg-5">
            <div className="txt-block left-column wow fadeInRight">
              {/* TEXT BOX */}
              <div className="txt-box mb-30">
                {/* Title */}
                <h5 className="h5-lg2" style={{marginBottom:'20px'}}>Advanced Analytics Review</h5>
                {/* Text */}
                <p className="p-lg" style={{    fontSize:" 1.1875rem", display:'block', textAlign:'left'}}>
                  Quaerat sodales sapien euismod blandit undo vitae ipsum primis
                  and cubilia a laoreet augue and luctus magna dolor egestas
                  luctus
                </p>
              </div>
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-lg2" style={{marginBottom:'20px'}}>Email Marketing Campaigns</h5>
                
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                  <p className="p-lg" style={{    fontSize:" 1.1875rem", display:'block', textAlign:'left'}}>
                      Fringilla risus, luctus mauris an auctor purus euismod
                      iaculis luctus magna purus pretium ligula and quaerat
                      luctus magna
                    </p>
                  </li>
                  <li className="list-item">
                  <p className="p-lg" style={{    fontSize:" 1.1875rem", display:'block', textAlign:'left'}}>
                      Nemo ipsam egestas volute turpis dolores undo ultrice
                      aliquam quaerat sodales
                    </p>
                  </li>
                </ul>
              </div>
              {/* END TEXT BOX */}
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="col-md-6 col-lg-7">
            <div className="img-block right-column wow fadeInLeft">
              <img
                className="img-fluid, two-img"
                src="/images/img-20.png"
                alt="content-image"
               
               
              />
            </div>
          </div>
        </div>

</div>
</section>




      <section id="banner-1" className="bg-scroll banner division">
        <div className="container white-color">
          <div className="row2 d-flex align-items-center">
            <div className="col-lg-6">
              <div className="banner-1-txt">
                <h2>Building the next generation of digitalization</h2>
                <p>
                We at Webbie are building digital products for startups & businesses that are 
                well-engineered, beating benchmarks, Focused on the best 
                user experience, Flexible, and Future Ready. Our Team comprises
                 the best developers , designer and engineers creating advance solution In
                 multiple technology stacks.


                </p>
                <Link href="/demo-1">
                  <a
                    className="btn btn-md btn-theme tra-white-hover"
                    target="_blank"
                  >
                    See All Pages In Action
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-1-img">
                <img
                  className="img-fluid"
                  src="/demo/images/banner-1-img.png"
                  alt="banner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END BANNER-1 */}
      {/* INNER PAGES
			============================================= */}
     
     
     
     
     
     
     
     <section id="tabs-2" className="wide-60 tabs-section division">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
          {/* TABS NAVIGATION */}
          <div className="col">
            <div className="tabs-nav clearfix">
              <ul className="tabs-1">
                {/* TAB-1 LINK */}
                <li className="tab-link current" data-tab="tab-1">
                  {/* Title */}
                  <h5 className="h5-md">Need to design & develop a product?</h5>
                  {/* Text */}
                  <p className="p-lg">
                  We are able to deliver your digital product in as
                   little as 4-6 weeks employing the lean startup approach and 
                   agile software development. 

                  </p>
                </li>
                {/* TAB-2 LINK */}
                <li className="tab-link" data-tab="tab-2">
                  {/* Title */}
                  <h5 className="h5-md">Need a cross-functional development team?</h5>
                  {/* Text */}
                  <p className="p-lg">
                  Our software engineers collaborate 
                   in agile teams, to 
                   fulfill your business goals. The development 
                   team will advise you along the way - from choosing
                    a solution, responding to changing circumstances,
                     to passing on their know-how so you can grow independently.


                  </p>
                </li>
                {/* TAB-3 LINK */}
                
              </ul>
            </div>
          </div>{" "}
          {/* END TABS NAVIGATION */}
          {/* IMAGE BLOCK */}
          <div className="col">
            <div className="img-block right-column wow fadeInLeft">
              <div className="tabs-content">
                {/* TAB #1 IMAGE */}
                <div id="tab-1" className="tab-content current">
                  <img
                    className="img-fluid"
                    src="/images/img-06.png"
                    alt="tab-image"
                  />
                </div>
                {/* TAB #2 IMAGE */}
                <div id="tab-2" className="tab-content">
                  <img
                    className="img-fluid"
                    src="/images/img-10.png"
                    alt="tab-preview"
                  />
                </div>
                {/* TAB #3 IMAGE */}
                <div id="tab-3" className="tab-content">
                  <img
                    className="img-fluid"
                    src="/images/img-14.png"
                    alt="tab-image"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END IMAGE BLOCK */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
      <section
      id="features-4"
      className="wide-60 bg-snow features-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <div className="section-title title-01 mb-70">
              {/* Title */}
              <h2 className="h2-md">Services we are offering</h2>
              {/* Text */}
              
            </div>
          </div>
        </div>
        {/* FEATURES-4 WRAPPER */}
        <div className="fbox-4-wrapper fbox-4-wide">
          <div className="row row-cols-1 row-cols-md-2">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65">
                    <span className="flaticon-line-graph-1" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Mobile App Development</h5>
                  {/* Text */}
                 
                </div>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65">
                    <span className="flaticon-cloud-computing" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Software Development</h5>
                  {/* Text */}
                  
                </div>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col" style={{marginTop:'2em'}}>
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65">
                    <span className="flaticon-algorithm" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Web Development</h5>
                  {/* Text */}
                  
                </div>
              </div>
            </div>
            {/* FEATURE BOX #4 */}
            <div className="col"  style={{marginTop:'2em'}}>
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65">
                    <span className="flaticon-increase-1" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Digital Marketing</h5>
                  {/* Text */}
                  
                </div>
              </div>
            </div>
            {/* FEATURE BOX #5 */}
            <div className="col"  style={{marginTop:'2em'}}>
              <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65">
                    <span className="flaticon-server" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">Networking & IT Infrastructure</h5>
                  {/* Text */}
                 
                </div>
              </div>
            </div>
            {/* FEATURE BOX #6 */}
            <div className="col"  style={{marginTop:'2em'}}>
              <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="fbox-ico">
                  <div className="ico-65">
                    <span className="flaticon-seo" />
                  </div>
                </div>
                {/* Text */}
                <div className="fbox-txt">
                  {/* Title */}
                  <h5 className="h5-md">SEO &amp; PPC</h5>
                  {/* Text */}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END FEATURES-4 WRAPPER */}
      </div>
      {/* End container */}
    </section>
      {/* END INNER PAGES */}
      {/* BANNER-2
			============================================= */}







<section
      id="content-10"
      className="content-10 pb-100 content-section division"
      style={{marginTop:'5em'}}
    >
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="section-title title-02 mb-60">
              {/* Section ID */}
              <span className="section-id txt-upcase">
                Your road to success
              </span>
              {/* Title */}
              <h2 className="h2-xs">
                Marketing solutions that fuel your business growth
              </h2>
              {/* Text */}
             
            </div>
          </div>
        </div>
        {/* IMAGE BLOCK */}
        <div className="row">
          <div className="col">
            <div className="img-block text-center video-preview">
              <VideoImage
                id="SZEflIVnhH8"
                img="images/seo-07.png"
                extraClass="video-btn video-btn-xl bg-green ico-90"
              />
            </div>
          </div>
        </div>
        {/* ADVANTAGES LIST */}
        <div className="row">
          <div className="col">
            <div className="content-10-btn">
              <ul className="advantages mt-25 clearfix">
                <li className="first-li">
                  <p>Free 30 days trial</p>
                </li>
                <li>
                  <p>Exclusive Support</p>
                </li>
                <li className="last-li">
                  <p>No Fees</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End container */}
    </section>












    <div id="statistic-4" className="pt-70 pb-70 statistic-section division">
      <div className="container">
        {/* STATISTIC-4 WRAPPER */}
        <div className="statistic-4-wrapper">
          <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
            {/* STATISTIC BLOCK #1 */}
            <div id="sb-4-1" className="col">
              <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                {/* Digit */}
                <div className="statistic-block-digit">
                  <h2 className="h2-lg statistic-number">
                    <span className="count-element">
                      <Counter end={1} />
                    </span>
                    K
                  </h2>
                </div>
                {/* Text */}
                <div className="statistic-block-txt grey-color">
                  <h6 className="h6-md">
                    Happy Customers
                  </h6>
                </div>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div id="sb-4-2" className="col">
              <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                {/* Digit */}
                <div className="statistic-block-digit">
                  <h2 className="h2-lg statistic-number">
                    <span className="count-element">
                      <Counter end={97} />
                    </span>
                    %
                  </h2>
                </div>
                {/* Text */}
                <div className="statistic-block-txt grey-color">
                  <h6 className="h6-md">
                    Client Satisfaction
                  </h6>
                </div>
              </div>
            </div>
            {/* STATISTIC BLOCK #3 */}
            <div id="sb-4-3" className="col">
              <div className="statistic-block pr-15 d-flex align-items-center wow fadeInUp">
                {/* Digit */}
                <div className="statistic-block-digit">
                  <h2 className="h2-lg statistic-number">
                    <Counter end={4.86} decimals={2} />
                  </h2>
                </div>
                {/* Text */}
                <div className="statistic-block-txt grey-color">
                  <h6 className="h6-md">
                    Rating
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END STATISTIC-4 WRAPPER */}
      </div>
      {/* End container */}
    </div>










      <section id="banner-2" className="bg-scroll banner-1 division">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="banner-2-txt text-center">
                <h2>Create your amazing website with Webbie</h2>
                {/* <p>
                  Mix and match from over 70 exclusive section UI blocks. Create
                  something unique and beautifully tailored to your needs in
                  only a few minutes
                </p> */}
                <h2 className="tra-title">Creative</h2>
                <a href="#" className="btn btn-md btn-theme tra-theme-hover">
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
      {/* END BANNER-2 */}
      {/* FOOTER
			============================================= */}
      <footer id="footer" className="footer division">
        <div className="container">
          <div className="row">
            <div className="col-md-12 footer-copyright text-center">
              <p>Designed by Webbie</p>
              <p>
                © 2022 <span>Webbie.</span> All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

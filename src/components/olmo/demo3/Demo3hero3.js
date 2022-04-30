import { VideoWithBtn } from "../../VideoContent";

const Demo3hero3 = () => {
  return (
    <section id="hero-3" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-lg-6">
            <div className="hero-3-txt white-color">
              {/* Title */}
              <h2 className="h2-lg wow fadeInUp">
                Web Development
              </h2>
              {/* Text */}
              <p className="p-xl wow fadeInUp">
              Webbie a forward looking company managed by professionals in their respective 
              fields, We continuously strives to provide cutting edge
               solutions, through out of box thinking, for our valued clients.
               {/* Our 
               commitment is to provide very contemporary solutions to web site development.
                So if you are looking for a dedicated, thorough, and multi-disciplined web
                development company give us a call. */}


              </p>
              {/* Buttons Group */}
              <div className="btns-group mb-30 wow fadeInUp">
                <a
                  href="#content-2"
                  className="btn btn-green tra-white-hover mr-15"
                >
                  Get Started
                </a>
                <VideoWithBtn defText="See how it works" id="7e90gBu4pas" />
              </div>
              {/* Advantages List */}
              <ul className="advantages clearfix wow fadeInUp">
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
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-lg-6">
            <div className="hero-3-img wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/tablet-01.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
      {/* WAVE SHAPE BOTTOM */}
      <div className="wave-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 195">
          <path
            fill="#ffffff"
            fillOpacity={1}
            d="M0,192L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Demo3hero3;

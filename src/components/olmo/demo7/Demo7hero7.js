import { VideoWithBtn } from "../../VideoContent";

const Demo7hero7 = () => {
  return (
    <section id="hero-7" className="bg-scroll hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-lg-6">
            <div className="hero-7-txt white-color wow fadeInLeft">
              {/* Rounded Logo */}
              {/* <div className="hero-logo-rounded bg-tra-white mb-40">
                <img
                  className="img-fluid"
                  src="/images/logo-white-sm.png"
                  alt="hero-logo"
                />
                <span>olmo.DESIGN</span>
              </div> */}
              {/* Title */}
              <h2 className="h2-xl"> SOFTWARE CONSULTING AND DEVELOPMENT</h2>
              {/* List */}
              <ul className="simple-list">
                {/* <li className="list-item">
                  <p className="p-lg">
                    Fringilla risus, luctus mauris orci auctor purus ligula undo
                    euismod pretium purus pretium rutrum
                  </p>
                </li> */}
                <li className="list-item">
                  <p className="p-lg">
                   We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.

                  </p>
                </li>
              </ul>
              {/* Buttons Group */}
              <div className="btns-group mt-35">
                <a
                  href="#content-3"
                  className="btn btn-pink tra-white-hover mr-15"
                >
                  Learn More
                </a>
                <VideoWithBtn
                  defText="See how it works"
                  extraClass="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                  id="7e90gBu4pas"
                />
              </div>
            </div>
          </div>
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-lg-6">
            <div className="hero-7-img text-center wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/dashboard-06.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo7hero7;

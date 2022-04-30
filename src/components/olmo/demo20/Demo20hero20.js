import { VideoWithBtn } from "../../VideoContent";

const Demo20hero20 = () => {
  return (
    <section id="hero-20" className="bg-fixed hero-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* HERO TEXT */}
          <div className="col-md-8 col-lg-6">
            <div className="hero-20-txt white-color">
              {/* Title */}
              <h2 className="h2-md">
              Network Infrastructure Services
              </h2>
              {/* Text */}
              <p className="p-xl">
              At Webbie we provide end-to-end IT infrastructure consultancy services that
               include planning, designing and implementing local area and wide area 
               networks for small, medium and large organizations.
              </p>
              {/* Buttons Group */}
              <div className="btns-group">
                <a
                  href="#cta-3"
                  className="btn btn-violet-red tra-white-hover mr-15"
                >
                  Get Started
                </a>
                <VideoWithBtn
                  defText="See olmo in Action"
                  extraClass="video-popup2 btn btn-md btn-transparent ico-20 ico-left"
                />
              </div>
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo20hero20;

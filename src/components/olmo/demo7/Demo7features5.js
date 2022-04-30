const Demo7features5 = () => {
  return (
    <section id="features-5" className="wide-60 features-section division">
      <div className="container">
        {/* FEATURES-5 WRAPPER */}
        <div className="fbox-5-wrapper text-center">
          <div className="row row-cols-1 row-cols-md-3">
            {/* FEATURE BOX #1 */}
            <div className="col">
              <div className="fbox-5 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="ico-rounded-lg ico-45 bg-tra-green green-color">
                  <span className="flaticon-web-browser" />
                </div>
                {/* Title */}
                <h5 className="h5-md">Software Consulting Services</h5>
                {/* Text */}
                <p className="p-lg">
                Software consulting services help assess and raise the efficiency of
                 technology-enabled business processes.
                </p>
              </div>
            </div>
            {/* FEATURE BOX #2 */}
            <div className="col">
              <div className="fbox-5 bg-white mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="ico-rounded-lg ico-45 bg-tra-purple purple-color">
                  <span className="flaticon-arrow" />
                </div>
                {/* Title */}
                <h5 className="h5-md">Custom Software Development</h5>
                {/* Text */}
                <p className="p-lg">
                Custom software development is a way to get a competitive advantage in the market 
                due to the superior functionality a custom solution provides.
                </p>
              </div>
            </div>
            {/* FEATURE BOX #3 */}
            <div className="col">
              <div className="fbox-5 mb-40 wow fadeInUp">
                {/* Icon */}
                <div className="ico-rounded-lg ico-45 bg-tra-orange orange-color">
                  <span className="flaticon-web-programming" />
                </div>
                {/* Title */}
                <h5 className="h5-md">Software Product Development</h5>
                {/* Text */}
                <p className="p-lg">
                Software product development is creating commercial software for business users or individual consumers.
                </p>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* END FEATURES-5 WRAPPER */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo7features5;

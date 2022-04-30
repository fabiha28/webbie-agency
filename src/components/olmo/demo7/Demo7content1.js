const Demo7content1 = () => {
  return (
    <section
      id="content-1"
      className="content-1 bg-04 wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6 order-last order-md-2">
            <div className="txt-block left-column white-color wow fadeInRight">
              {/* Section ID */}
              <span className="section-id rounded-id bg-tra-white white-color txt-upcase">
                PM
              </span>
              {/* Title */}
              <h2 className="h2-xs">Great Project Management</h2>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">
                  <p className="p-lg">
                  Approve an SOW (statement of work). Every decision we make will be a reflection of goals that are set.

                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  Prioritize – make sure our vision aligns with what is most important to you and your business.

                  </p>
                </li>
                <li className="list-item">
                  <p className="p-lg">
                  Conduct cost-benefit analyses and/or market research, at your discretion.

                  </p>
                </li>

                <li className="list-item">
                  <p className="p-lg">
                  Approve benchmarks for performance, security and safety.


                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* END TEXT BLOCK */}
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6 order-first order-md-2">
            <div className="rel img-block right-column wow fadeInLeft">
              <img
                className="img-fluid"
                src="/images/img-08.png"
                alt="content-image"
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

export default Demo7content1;

import { VideoImage } from "../../VideoContent";

const Demo7content2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 bg-whitesmoke-gradient wide-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column video-preview wow fadeInRight">
              <VideoImage
                img="images/img-09.png"
                extraClass="video-btn video-btn-xl bg-pink ico-90"
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* TEXT BOX */}
              <div className="txt-box mb-20">
                {/* Title */}
                <h5 className="h5-lg">Top Notch Requirement Analysis Team</h5>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                    Every project needs a way of measuring progress. That’s why we determine
                     your project’s requirement milestones early in the project. 
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                    These milestones serve as measuring posts for key parts of the project so
                     that we can keep track of our progress and you 
                    can ensure that our work aligns with your expectations.
                    </p>
                  </li>
                </ul>
              </div>
              {/* TEXT BOX */}
              <div className="txt-box">
                {/* Title */}
                <h5 className="h5-lg">Consultation</h5>
                {/* Text */}
                <p className="p-lg">
                Step one in every client relationship is an initial consultation. We’re big believers in building strong relationships, so we love when clients meet up to talk shop. 
                </p>
                {/* Tools List */}
               
              </div>
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

export default Demo7content2;

import { VideoImage2 } from "../../VideoContent";

const Demo2content3 = () => {
  return (
    <section
      id="content-3"
      className="content-3 wide-60 content-section division"
    >
      <div className="container">
        {/* SECTION TITLE */}
       
        {/* TOP ROW */}
        
        {/* END TOP ROW */}
        {/* BOTTOM ROW */}
        <div className="bottom-row">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="img-block left-column video-preview wow fadeInRight">
                <VideoImage2 id="SZEflIVnhH8" />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id rounded-id bg-tra-purple purple-color txt-upcase">
                  Handling With Ease
                </span>
                {/* Title */}
                <h2 className="h2-xs">Custom Android Mobile Solutions
</h2>
                {/* Text */}
                <p className="p-lg">
                Mobile applications are the keystone for many businesses in the digital age. Apps running on smart devices give customers greater access to company-related resources and gives companies the chance to acquire more business opportunities. 
                </p>
                {/* Text */}
                <p className="p-lg">
                Devices that rely on apps, like smartphones, have become ubiquitous across all industries and markets. By developing its own offering, your company can tap into this seemingly infinite market and expand to reach its long-term growth goals in a much shorter time frame.
                </p>
                {/* CONTENT BOX #1 */}
                <div className="cbox-2 mt-20">
                  {/* Icon */}
                  <div className="cbox-2-ico">
                    <div className="ico-40 shape-ico violet-red-color">
                      <img
                        className="ico-bkg"
                        src="/images/ico-bkg.png"
                        alt="ico-bkg"
                      />
                      <span className="flaticon-smartphone-1" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="h5-xs">IOS Development</h5>
                    
                  </div>
                </div>



                <div className="cbox-2 mt-20">
                  {/* Icon */}
                  <div className="cbox-2-ico">
                    <div className="ico-40 shape-ico violet-red-color">
                      <img
                        className="ico-bkg"
                        src="/images/ico-bkg.png"
                        alt="ico-bkg"
                      />
                      <span className="flaticon-smartphone-1" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="cbox-2-txt">
                    <h5 className="h5-xs">Android Development</h5>
                    
                  </div>
                </div>



                
              </div>
            </div>
            {/* END TEXT BLOCK */}
          </div>
        </div>
        {/* END BOTTOM ROW */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo2content3;

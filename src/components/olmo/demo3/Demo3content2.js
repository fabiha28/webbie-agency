const Demo3content2 = () => {
  return (
    <section
      id="content-2"
      className="content-2 pb-60 content-section division"
    >
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* IMAGE BLOCK */}
          <div className="col-md-5 col-lg-6">
            <div className="rel img-block left-column wow fadeInRight">
              <img
                className="img-fluid"
                src="/images/web.png"
                alt="content-image"
                style={{border:'2px solid transparent', borderRadius:'10px',boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}
              />
            </div>
          </div>
          {/* TEXT BLOCK */}
          <div className="col-md-7 col-lg-6">
            <div className="txt-block right-column wow fadeInLeft">
              {/* Section ID */}
              <span className="section-id txt-upcase">Digital Strategy</span>
              {/* Title */}
              <h2 className="h2-xs">Start your online business with Webbie</h2>
              {/* Text */}
              <p className="p-lg">
              Webbie A Digital Company , providing unique and creative digital services to businesses that want to grow online. 

              </p>
              {/* Text */}
              <p className="p-lg">
              We focus on results and use technical skills to help different businesses progress.
               Our customized website development services in Australia expertise in sustainable, 
               adaptable technologies and platforms. We partner with our clients to understand their
                unique business taste and context which turns their business into an enhanced 
                competitive edge.

              </p>
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

export default Demo3content2;

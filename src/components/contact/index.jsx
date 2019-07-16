import React from 'react';

const index = () => {
  return (
    <>
      <section className="section">
        <div className="section-content">
          <div className="container wow fadeInUp" data-wow-delay=".2s" style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInUp" }}>
            <h4 className="fs36 mb120">Get In Touch</h4>
            <form action="#" className="text-left">
              <div className="row">
                <div className="col-sm-4 mb30">
                  <label className="label-custom">Name</label>
                  <input type="text" className="form-control form-control-custom" placeholder="Your name" value="Daniel Frankton|" />
                </div>
                <div className="col-sm-4 mb30">
                  <label className="label-custom">Email</label>
                  <input type="text" className="form-control form-control-custom" placeholder="Your Email Address" />
                </div>
                <div className="col-sm-4 mb30">
                  <label className="label-custom">subject (obtional)</label>
                  <input type="text" className="form-control form-control-custom" placeholder="Title of email" />
                </div>
                <div className="col-sm-12 mb30">
                  <label className="label-custom">message</label>
                  <textarea rows="9" cols="30" className="form-control form-control-custom" placeholder="Write your message here"></textarea>
                </div>
              </div>
              <div className="mt40 text-center"><button className="btn btn-link fs18 text-black text-underline">send message</button></div>
            </form>
          </div>
        </div>
      </section>    
    <style jsx>
      {`
      
      
      `}
    </style>
    </>
  );
}

export default index;
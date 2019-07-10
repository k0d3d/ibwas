import React from 'react'


export const NewsletterSection = () => {

  return (
    <>
        <style jsx>
            {`
                .section  {
                    background-image: url('./cool-background.svg')
                }
            `}
        </style>
        <section className="section contact-area pt-135 pb-125"> 
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="contact-info-h3">
                            <div className="section-title-2 contact-sec-title">
                                <h2>Contact</h2>
                                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elituis.</p>
                            </div>
                            <div className="cont-infoh3-wrap">
                                <div className="single-cont-infoh3">
                                    <div className="cont-infoh3-icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <div className="cont-infoh3-content">
                                        <p>5th Ave &amp; W 115th St, New York th St, New York</p>
                                    </div>
                                </div>
                                <div className="single-cont-infoh3">
                                    <div className="cont-infoh3-icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <div className="cont-infoh3-content">
                                        <p>+1 35 776 859 000  /  +1 35 776 859 011</p>
                                    </div>
                                </div>
                                <div className="single-cont-infoh3">
                                    <div className="cont-infoh3-icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <div className="cont-infoh3-content">
                                        <p><a href="#">supportvital@.com </a> / <a href="#"> vitalinfo@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="contact-form-h3">
                            <form id="contact-form" action="assets/mail.php" method="post">
                                <div className="row">
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="contact-form-style mb-15">
                                            <input name="name" placeholder="Name" type="text" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-6">
                                        <div className="contact-form-style mb-15">
                                            <input name="email" placeholder="Email" type="email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact-form-style">
                                            <textarea name="message" placeholder="Add a Message"></textarea>
                                            <button className="btn-hover submit" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>    
    
    </>
  )

}
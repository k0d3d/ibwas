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
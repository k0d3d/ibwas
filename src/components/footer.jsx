import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => (

<footer className="footer-area gray-bg footer-hm3 pt-90 pb-90">
  <style jsx>{`

      .root.gray-bg {
          background: #e9eaea;
      }
      .footer-social-h3 li {
          display: inline-block;
          margin: 0 12px;
      }

    `}
  </style>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="copyright copyright-hm3">
                            <p>
                                © 2019 &nbsp;
                                <a href="#">IBWAS Nigeria Limited</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="footer-social-h3 text-center">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faPaperPlane} /></a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="made-in f-right">
                            <p className="text-right">
                                <a href="">Report an Issue</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

)
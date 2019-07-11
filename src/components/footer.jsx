import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

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
                                <Link to="/">IBWAS Nigeria Limited</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="footer-social-h3 text-center">
                            <ul>
                                <li><Link to="/"><FontAwesomeIcon icon={faFacebook} /></Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faInstagram} /></Link></li>
                                <li><Link to="/"><FontAwesomeIcon icon={faPaperPlane} /></Link></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="made-in f-right">
                            <p className="text-right">
                                <Link to="/">Report an Issue</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

)
import React from 'react'

import logoWhite from '../../images/logo-trans.png'

export const NewsletterSection = () => {

  return (
    <>
      <div className="section section-footer">
        <div className="container footer-top">
          <div className="col flow">
            <div className="heading-beta margin-bottom">Let&#39;s Talk</div><a href="mailto:hello@gresk.ninja" className="email-address">hello@gresk.ninja</a></div>
          <div className="col sm-12"><img src={logoWhite} alt="" style={{
            maxWidth: "50px",
            float: "right",
            opacity: "0.5"
          }
          } /></div>
        </div>
        <div className="container">
          <div className="col flow">
            <div>3552 Murphy Court, Building 77<br />Surabaya, East Java 60217</div>
          </div>
          <div className="col flex flex-width-700">
            <div className="footer-nav-block flex xs-12">
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Contact Us</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Term of Use</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Privacy</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Environmental Policy</a></div>
            </div>
            <div className="footer-nav-block flex xs-12">
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Industry</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Consulting Services</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Insight</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Resources</a></div>
            </div>
            <div className="footer-nav-block flex xs-12">
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Facebook</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Twitter</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Instagram</a></div>
              <div className="footer-menu-list"><a href="#" className="footer-link-item">Youtube</a></div>
            </div>
          </div>
        </div>
      </div>

        <style jsx>
            {`
            .container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}

.container.footer-top {
  margin-bottom: 160px;
}

.col {
  margin-bottom: 32px;
  padding-right: 16px;
  padding-left: 16px;
}


.col.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.col.flex.flex-width-700 {
  -webkit-flex-basis: 700px;
  -ms-flex-preferred-size: 700px;
  flex-basis: 700px;
}

.col.flow {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.heading-beta {
  font-family: 'Gothic A1', sans-serif;
  color: #333;
  font-size: 74px;
  line-height: 1.15;
  font-weight: 900;
}

.heading-beta.margin-bottom {
  display: block;
}

.margin-bottom {
  display: inline-block;
  margin-bottom: 32px;
}

.section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.section.section-footer {
  padding-top: 160px;
  background-color: rgb(128, 166, 252);
}

.email-address {
  border-bottom-color: rgba(0, 0, 0, 0.33);
  color: #333;
  font-size: 23px;
  text-decoration: none;
}

.footer-nav-block.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-left: 16px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-flex: 0;
  -webkit-flex: 0 50%;
  -ms-flex: 0 50%;
  flex: 0 50%;
}

.footer-link-item {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  border-bottom-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.26);
  color: #333;
  text-decoration: none;
}

.footer-menu-list {
  padding-top: 8px;
  padding-bottom: 8px;
  text-align: left;
}

@media (max-width: 991px) {
  .container {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .col.flow {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }
}

@media (max-width: 767px) {
  .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .container.footer-top {
    margin-bottom: 80px;
  }
  .col.flex {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .col.flow {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }
  .col.sm-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .footer-nav-block.flex.xs-12 {
    margin-bottom: 32px;
  }
}

@media (max-width: 479px) {
  .container.footer-top {
    margin-bottom: 40px;
  }
  .col.flex {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .col.flex.flex-width-700 {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  .heading-beta {
    font-size: 52px;
  }
  .footer-nav-block.flex.xs-12 {
    margin-bottom: 24px;
    padding-left: 0px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
}

            
            
            `}
        </style>
    </>
  )

}
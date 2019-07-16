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
            .w-layout-grid {
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
}


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

.container.navigation-bar {
  position: static;
  top: 0px;
  z-index: 1000;
  background-color: #fff;
}

.container.flex-v {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.container.justify-right {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.container.margin-bottom {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.container.extended {
  max-width: 1360px;
  padding-right: 0px;
  padding-left: 0px;
}

.container.extended.bg-accent {
  background-color: #f0f3f2;
}

.container.extended.bg-accent.padding-top {
  padding-top: 32px;
}

.container.extended.bg-accent.vertical-padding-large {
  padding-top: 80px;
  padding-bottom: 80px;
}

.container.extended.bg-accent.vertical-padding-large.position-relative {
  position: relative;
}

.container.extended.bg-accent.vertical-padding-xtra-large {
  padding-top: 120px;
  padding-bottom: 120px;
}

.container.padding-v40 {
  padding-top: 40px;
  padding-bottom: 0px;
}

.container.container-inner {
  margin-right: 0px;
  margin-left: 0px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.container.container-narrow {
  max-width: 800px;
}

.container.footer-top {
  margin-bottom: 160px;
}

.container.padding-top-80 {
  padding-top: 80px;
}

.container.header-container {
  margin-top: 80px;
  padding-bottom: 40px;
}

.container.main-blog-top {
  margin-top: 0px;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
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

.col.flex.margin-top-large {
  margin-top: 120px;
}

.col.flex.align-right {
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.col.flex.flex-width-700 {
  -webkit-flex-basis: 700px;
  -ms-flex-preferred-size: 700px;
  flex-basis: 700px;
}

.col.flex.align-bottom {
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.col.flex.align-bottom.margin-bottom-large {
  margin-bottom: 120px;
}

.col.flex.margin-bottom-large {
  margin-bottom: 160px;
}

.col.bg-accent {
  padding: 32px;
  background-color: #f0f3f2;
}

.col.lg-8 {
  -webkit-flex-basis: 66.66%;
  -ms-flex-preferred-size: 66.66%;
  flex-basis: 66.66%;
}

.col.one-fifth {
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
}

.col.flow {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.col.flow.flex.align-middle {
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.col.grow {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.col.grow.flex.align-right {
  overflow: hidden;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.col.grow.flex.align-right.no-margin-bottom {
  margin-bottom: 0px;
}

.col.lg-10 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 83.33%;
  -ms-flex: 0 83.33%;
  flex: 0 83.33%;
}

.col.lg-9 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 75%;
  -ms-flex: 0 75%;
  flex: 0 75%;
}

.col.flex-width-300 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 300px;
  -ms-flex: 0 300px;
  flex: 0 300px;
}

.col.main-blog-top {
  -webkit-box-flex: 0;
  -webkit-flex: 0 80%;
  -ms-flex: 0 80%;
  flex: 0 80%;
}

.col.main-blog-title {
  -webkit-box-flex: 0;
  -webkit-flex: 0 87%;
  -ms-flex: 0 87%;
  flex: 0 87%;
}

.heading-alpha {
  font-family: 'Gothic A1', sans-serif;
  color: #333;
  font-size: 105px;
  line-height: 1;
  font-weight: 900;
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

.margin-bottom.services-title {
  display: inline-block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  color: #333;
  font-size: 16px;
  font-weight: 700;
}

.margin-bottom.display-block {
  display: block;
}

.heading-omega {
  font-family: 'Gothic A1', sans-serif;
  color: #333;
  font-size: 46px;
  line-height: 1.15;
  font-weight: 900;
}

.heading-omega.top-aligned.margin-bottom {
  -webkit-box-flex: 0;
  -webkit-flex: 0 80%;
  -ms-flex: 0 80%;
  flex: 0 80%;
}

.heading {
  color: #333;
  font-size: 52px;
  line-height: 1.15;
}

.heading-2 {
  font-size: 36px;
  line-height: 1.15;
}

.heading-3 {
  font-family: Montserrat, sans-serif;
}


.hero-title {
  position: relative;
  max-width: 760px;
  margin-bottom: -88px;
  padding-right: 16px;
  padding-left: 16px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  -webkit-box-flex: 0;
  -webkit-flex: 0 80%;
  -ms-flex: 0 80%;
  flex: 0 80%;
  font-family: 'Gothic A1', sans-serif;
  font-size: 67px;
  line-height: 1.2;
  font-weight: 900;
}

.section {
  padding-top: 80px;
  padding-bottom: 80px;
}

.section.section-footer {
  padding-top: 160px;
  background-color: rgb(128, 166, 252);
}

.section.padding-bottom-double {
  padding-bottom: 160px;
}

.section.padding-bottom-double.padding-top-double {
  padding-top: 160px;
}

.section.padding-top-large {
  padding-top: 160px;
}

.section.padding-bottom-large.padding-top-double {
  padding-top: 160px;
}

.section.no-padding-bottom {
  padding-bottom: 0px;
}

.section.no-padding-top {
  padding-top: 0px;
}

.section.vertical-padding-large {
  padding-top: 160px;
  padding-bottom: 160px;
}

.section.padding-top-double {
  padding-top: 160px;
}

.ultra-big-fat-paragraph {
  margin-bottom: 16px;
  color: #333;
  font-size: 32px;
  line-height: 1.3;
}

.short-paragraph {
  max-width: 400px;
  color: #585858;
  font-size: 20px;
  line-height: 1.4;
}

.short-paragraph.margin-bottom {
  max-width: 430px;
}

.parallax1 {
  position: relative;
  display: block;
  overflow: hidden;
  margin-right: -70px;
  padding-bottom: 0px;
  border-style: none;
  border-width: 1px;
  border-color: red;
}

.parallax2 {
  position: relative;
  left: 0px;
  top: -120px;
  display: block;
  overflow: hidden;
}



.title-2 {
  font-size: 23px;
  font-weight: 900;
}

.title-2.border-bottom {
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px none rgba(0, 0, 0, 0.08);
}

.title-2.border-bottom.margin-bottom-80 {
  margin-bottom: 80px;
}

.service-grid-item.margin-bottom-large {
  margin-bottom: 45px;
}

.service-description {
  font-size: 16px;
}

.more-link {
  font-size: 16px;
  text-decoration: none;
}

.image {
  text-align: left;
}

.text-block {
  font-size: 23px;
}

.big-fat-paragraph {
  margin-left: 0px;
  font-size: 24px;
}

.big-fat-paragraph.low-contrast {
  color: #333;
  font-size: 18px;
}

.max-200 {
  max-width: 450px;
}

.grid-item.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.grid {
  grid-column-gap: 80px;
}

.grid.gap-120 {
  grid-column-gap: 120px;
}

.image-2 {
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.top-aligned {
  margin-top: 8px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.top-aligned.margin-right {
  margin-right: 32px;
}

.partner-logo {
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
}

.testimonial-footer {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.text-span {
  font-size: 15px;
  font-weight: 900;
}

.testimonial-position {
  font-size: 14px;
}

.testimonial-logo {
  max-width: 64px;
  margin-right: 16px;
}

.testimonial-meta {
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  line-height: 1.2;
}

.testimonial-slider {
  height: auto;
  background-color: transparent;
}

.slide-nav {
  display: none;
}

.testimonial-quote {
  margin-bottom: 40px;
  font-family: 'Gothic A1', sans-serif;
  color: #4b4b4b;
  font-size: 23px;
  line-height: 1.4;
  font-weight: 400;
}

.left-arrow {
  display: none;
}

.right-arrow {
  display: none;
}

.front-blog-item-date {
  margin-top: 11px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  -webkit-box-flex: 0;
  -webkit-flex: 0 150px;
  -ms-flex: 0 150px;
  flex: 0 150px;
  color: #92a8c2;
}

.front-blog-item-title {
  display: inline;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-style: none none solid;
  border-width: 1px;
  border-color: #000 #000 #c1e5e9;
  color: #333;
  font-size: 36px;
  text-decoration: none;
}

.front-blog-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.link-block {
  display: inline-block;
  margin-right: auto;
  margin-left: auto;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  border-bottom-style: none;
  text-decoration: none;
}

.zero-padding-top {
  padding-top: 0px;
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

.menu-container {
  position: relative;
  height: 60px;
}

.quote-mark {
  position: absolute;
  left: 6%;
  top: 0%;
  right: auto;
  bottom: auto;
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
  color: #b2c7df;
  font-size: 200px;
  line-height: 0.6;
  font-weight: 700;
}

.header-section {
  margin-top: -60px;
  padding-top: 120px;
  padding-bottom: 120px;
  background-color: #80effc;
}

.team-text {
  padding-left: 32px;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.team-text.align-right {
  padding-right: 32px;
}

.team-name {
  font-weight: 900;
}

.short-description {
  max-width: 70%;
}

.services-list {
  font-size: 16px;
  line-height: 1.8;
}

.services-list.margin-bottom-double {
  margin-bottom: 64px;
}

.margin-bottom-large {
  margin-bottom: 80px;
}

.fact-numbers {
  font-family: 'Gothic A1', sans-serif;
  color: #333;
  font-size: 36px;
}

.padding-bottom-large {
  padding-bottom: 160px;
}

.testimonial-photo {
  -webkit-box-flex: 0;
  -webkit-flex: 0 auto;
  -ms-flex: 0 auto;
  flex: 0 auto;
}

.margin-right {
  margin-right: 64px;
}

.grid-2 {
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}

.team-grid {
  grid-column-gap: 80px;
  grid-row-gap: 80px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}

.blog-item-top {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0px;
  padding-top: 160px;
  padding-bottom: 80px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.meta-date {
  margin-top: 7px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  -webkit-box-flex: 0;
  -webkit-flex: 0 200px;
  -ms-flex: 0 200px;
  flex: 0 200px;
  color: #92a8c2;
}

.front-blog-item-date-2 {
  margin-top: 11px;
  -webkit-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
  -webkit-box-flex: 0;
  -webkit-flex: 0 150px;
  -ms-flex: 0 150px;
  flex: 0 150px;
  color: #92a8c2;
}

.blog-item-date {
  -webkit-box-flex: 0;
  -webkit-flex: 0 140px;
  -ms-flex: 0 140px;
  flex: 0 140px;
  color: #92a8c2;
}

.blog-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.blog-text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.read-more {
  text-decoration: none;
}

.paging {
  margin-bottom: 160px;
  padding-top: 40px;
  padding-bottom: 80px;
}

.paging-container {
  padding-left: 16px;
}

.paging-arrow {
  display: inline-block;
  margin-right: 4px;
  margin-left: 4px;
  padding: 7px 11px 1px;
  border-radius: 3px;
  background-color: rgba(146, 168, 194, 0.16);
  color: #333;
}

.paging-number {
  display: inline-block;
  margin-right: 3px;
  margin-left: 3px;
  padding: 11px 11px 5px;
  border-radius: 3px;
  background-color: rgba(128, 239, 252, 0);
  color: #333;
  line-height: 1.1;
}

.paging-number.current {
  background-color: #92a8c2;
  color: #fff;
}

.blog-single-post {
  padding-top: 120px;
  padding-bottom: 160px;
}

.blog-rich-text h3 {
  margin-top: 40px;
  font-size: 32px;
}

.blog-rich-text h4 {
  font-size: 23px;
}

.blog-rich-text p {
  margin-bottom: 24px;
}

.blog-rich-text ol {
  margin-bottom: 24px;
}

.blog-rich-text ul {
  margin-bottom: 24px;
}

.blog-rich-text img {
  margin-top: 32px;
  margin-bottom: 16px;
}

.blog-rich-text figcaption {
  margin-bottom: 40px;
  color: #92a8c2;
}

.author-container {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 40px;
}

.author-text {
  margin-left: 32px;
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;
}

.author-image {
  border-radius: 50%;
}

.author-text-name {
  font-weight: 900;
}

.textarea {
  height: 100px;
}

.contact-message {
  min-height: 300px;
}

.contact-section-title {
  font-size: 23px;
}

.contact-field-label {
  color: #92a8c2;
  font-size: 16px;
  font-weight: 400;
}

.contact-field {
  height: 60px;
  margin-bottom: 32px;
  padding-right: 0px;
  padding-left: 0px;
  border-style: none none solid;
  border-width: 1px 1px 3px;
  border-color: #000 #000 #92a8c2;
  border-radius: 0px;
}

.contact-field:focus {
  border-bottom-color: #80effc;
}

.contact-field.select-field {
  border-bottom-style: none;
  background-color: rgba(146, 168, 194, 0.13);
}

.form {
  padding-right: 16px;
  padding-left: 16px;
}

.submit-button {
  padding-top: 16px;
  padding-right: 32px;
  padding-left: 32px;
  border-radius: 5px;
  background-color: #80effc;
  color: #333;
  font-size: 15px;
  font-weight: 700;
  text-transform: none;
}

.title-3 {
  margin-top: -9px;
  font-size: 36px;
}

.nav-wrapper {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  z-index: 99999;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #fff;
}

.services-title {
  display: inline-block;
  border-bottom: 1px solid rgba(0, 0, 0, 0.13);
  font-size: 16px;
}

.logo-block {
  border-bottom-style: none;
  text-decoration: none;
}

.grid-3 {
  -ms-grid-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

.logo-grid {
  padding-right: 16px;
  padding-left: 16px;
  -ms-grid-row-align: center;
  align-self: center;
  grid-column-gap: 80px;
  grid-row-gap: 80px;
  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  -ms-grid-rows: auto;
  grid-template-rows: auto;
}

@media (max-width: 991px) {
  .container {
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .container.flex-v.overflow-hidden {
    overflow: hidden;
  }
  .container.container-inner {
    margin-right: 0px;
    margin-left: 0px;
  }
  .col.lg-4 {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }
  .col.lg-6.align-middle.padding-bottom.sm-12 {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-6.sm-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-1-5.md-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
  }
  .col.lg-1-5.md-4 {
    -webkit-flex-basis: 33.33%;
    -ms-flex-preferred-size: 33.33%;
    flex-basis: 33.33%;
  }
  .col.lg-2.md-4 {
    -webkit-flex-basis: 33.33%;
    -ms-flex-preferred-size: 33.33%;
    flex-basis: 33.33%;
  }
  .col.flex.align-bottom.margin-bottom-large {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .col.flex.margin-bottom-large {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .col.flow {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }
  .col.grow.flex.align-right.no-margin-bottom {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
  .service-grid {
    grid-column-gap: 32px;
    grid-row-gap: 10px;
  }
  .partner-logo {
    margin-bottom: 32px;
  }
  .testimonial-quote {
    font-size: 18px;
  }
  .team-text {
    width: 100%;
  }
  .team-text.align-right {
    width: 100%;
    text-align: left;
  }
  .short-description {
    max-width: 100%;
  }
  .testimonial-photo {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .team-grid {
    grid-column-gap: 24px;
  }
  .paging-container {
    padding-right: 16px;
    padding-left: 16px;
  }
  .leadership-photo {
    margin-bottom: 24px;
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }
  .image-4 {
    margin-bottom: 24px;
  }
  .logo-grid {
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
  }
}

@media (max-width: 767px) {
  .container {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .container.extended.bg-accent.vertical-padding-large.position-relative.container-slider-fix {
    display: block;
  }
  .container.container-inner {
    margin-left: 0px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .container.footer-top {
    margin-bottom: 80px;
  }
  .container.container-fix {
    display: block;
    width: auto;
    max-width: none;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .col.lg-3.sm-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
  }
  .col.lg-4.xs-12.md-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .col.lg-4.xs-12.md-12.magin-bottom-large {
    margin-bottom: 80px;
  }
  .col.lg-6.align-middle.padding-bottom.xs-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .col.lg-6.align-middle.padding-bottom.sm-12 {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-6.sm-12 {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-12.no-margin-bottom {
    padding-right: 0px;
    padding-left: 0px;
  }
  .col.flex {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .col.flex.margin-top-large {
    margin-top: 40px;
  }
  .col.flex.align-bottom.margin-bottom-large {
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
  .col.grow.flex.align-right {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .col.grow.flex.align-right.no-margin-bottom.sm-12 {
    margin-bottom: 32px;
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .col.sm-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .hero-image {
    min-height: auto;
  }
  .hero-title {
    margin-bottom: 32px;
    font-size: 52px;
  }
  .parallax1 {
    margin-right: 0px;
  }
  .parallax2 {
    top: 32px;
  }
  .parallax-img1 {
    margin-right: auto;
    margin-left: auto;
  }
  .parallax-img2 {
    margin-right: auto;
    margin-left: auto;
  }
  .service-grid {
    grid-column-gap: 40px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  .grid.gap-120 {
    grid-column-gap: 40px;
  }
  .testimonial-slide {
    overflow: visible;
  }
  .footer-nav-block.flex.xs-12 {
    margin-bottom: 32px;
  }
  .team-text {
    width: 100%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .team-text.align-right {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
    text-align: left;
  }
  .testimonial-photo {
    -webkit-align-self: flex-start;
    -ms-flex-item-align: start;
    align-self: flex-start;
    -webkit-box-ordinal-group: 1;
    -webkit-order: 0;
    -ms-flex-order: 0;
    order: 0;
    -webkit-flex-basis: auto;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
  }
  .blog-item-date {
    margin-bottom: 32px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .mask {
    border-style: none;
    border-width: 1px;
    border-color: red;
  }
  .leadership-photo {
    margin-bottom: 16px;
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }
  .logo-grid {
    grid-row-gap: 40px;
  }
}

@media (max-width: 479px) {
  .container.padding-v40 {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  }
  .container.padding-v40.display-block {
    display: block;
  }
  .container.footer-top {
    margin-bottom: 40px;
  }
  .col.lg-3.sm-6.xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-4.xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-6.xs-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .col.lg-1-5.md-6.xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-1-5.md-4.xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .col.lg-2.md-4.xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
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
  .col.lg-8.xs-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .col.flow.xs-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .col.grow.flex.align-right.no-margin-bottom.sm-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 100%;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
  .col.grow.flex.align-right.xs-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .col.main-blog-title {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .col.main-blog-title.xs-12 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .heading-beta {
    font-size: 52px;
  }
  .heading-omega {
    font-size: 36px;
  }
  .heading-2 {
    font-size: 32px;
  }
  .logo {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .simple-nav-link-holder {
    width: 200px;
    padding-left: 24px;
  }
  .simple-nav {
    width: 180px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .hero-image {
    display: none;
  }
  .hero-title {
    font-size: 36px;
  }
  .section.padding-bottom-double.padding-top-double {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .parallax1 {
    margin-right: 0px;
  }
  .parallax2 {
    position: static;
  }
  .parallax-img1 {
    margin-bottom: 32px;
  }
  .title-1 {
    font-size: 32px;
  }
  .fat-paragraph.margin-top {
    margin-top: 0px;
  }
  .service-grid {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
  .grid.gap-120 {
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
  .partner-logo {
    max-width: 70%;
    margin-right: auto;
    margin-left: auto;
  }
  .front-blog-item-date {
    margin-bottom: 16px;
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .front-blog-item.margin-bottom {
    margin-bottom: 80px;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .link-block {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
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
  .testimonial-photo {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .team-grid {
    grid-row-gap: 24px;
    -ms-grid-columns: 1fr;
    grid-template-columns: 1fr;
  }
  .blog-item-date {
    margin-bottom: 24px;
  }
  .blog-item-date.xs-12 {
    margin-bottom: 24px;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .blog-text.xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
  }
  .paging-number {
    margin-right: 1px;
    margin-left: 1px;
  }
  .blog-rich-text h3 {
    font-size: 24px;
  }
  .blog-rich-text h4 {
    font-size: 20px;
  }
  .image-3 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
  }
  .heading-5 {
    font-size: 36px;
  }
  .title-3 {
    font-size: 32px;
  }
  .logo-grid {
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto auto;
    grid-template-rows: auto auto auto;
  }
}

@media screen and (max-width: 767px) {
  #w-node-661b41d1bced-06e77130 {
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 3;
    grid-column-start: span 3;
    -ms-grid-column-span: 3;
    grid-column-end: span 3;
  }
}

@media screen and (max-width: 479px) {
  #w-node-661b41d1bced-06e77130 {
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 1;
    grid-column-start: span 1;
    -ms-grid-column-span: 1;
    grid-column-end: span 1;
  }
}

            
            
            `}
        </style>
    </>
  )

}
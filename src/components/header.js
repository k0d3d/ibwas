import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import MenuBtn from './menu-btn'


import logo from '../images/logo.png'

const Header = () => (
<div className="container">
  <style jsx>{`
    
      .nav-link.active::before {
        width: 150px;
        height: 50px;
        background-color: #f48383;
        position: relative;
      }
  `}
  </style>
  <nav className="navbar navbar-expand-lg navbar-light" >
    <Link className="navbar-brand" to="/">
      <span>
        <img src={logo} className="d-inline-block align-top" alt="" />
      </span>
    </Link>

    <MenuBtn className="navbar-toggler" />

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">

      </ul>
      <ul className="navbar-nav float-right">
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">About Us</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/products" activeClassName="active">
              Order Products <span className="sr-only">(current)</span>
            </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link" activeClassName="active">
            Stories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>

</div>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

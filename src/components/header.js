import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'


import logo from '../images/logo.png'

const style = {
  logo: {
    height: "70px"
  },
  smallText: {
    fontSize: "15px"
  },
  redText: {
    color: "#ff0000",
  }
}

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

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faEllipsisV} />

    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link main-color" to="/products" activeClassName="active">
            Order Products <span className="sr-only">(current)</span>

          </Link>
        </li>
      </ul>
      <ul className="navbar-nav float-right">
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">About Us</Link>
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

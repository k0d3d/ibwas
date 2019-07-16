import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'


import logo from '../images/logo.png'

const style = {
  nav: {
    height: "75px"
  },
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

const Header = ({ siteTitle }) => (
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light" style={style.nav}>
    <Link className="navbar-brand" to="/">
      <img style={style.logo} src={logo} className="d-inline-block align-top" alt="" />
    </Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faEllipsisV} />

    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/products" style={style.redText}>
            Order Products <span className="sr-only">(current)</span>

          </Link>
        </li>
      </ul>
      <ul className="navbar-nav float-right">
        <li className="nav-item">
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Stories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Lets Talk
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

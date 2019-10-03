import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

import MenuBtn, { menuItems } from './menu-btn'


import logo from '../images/logo.png'

const Header = () => (
<div className="container">

  <nav className="navbar navbar-expand-lg navbar-light" >
    <Link className="navbar-brand" to="/">
      <span>
        <img src={logo} className="d-inline-block align-top" alt="" />
      </span>
    </Link>

    <MenuBtn className="navbar-toggler" />

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto"></ul>
      <ul className="navbar-nav float-right">
      <style jsx>{`
    
        .navbar-light .nav-link.active {
            color: blue;

          }
      `}
      </style>
        {
          menuItems.map(item => (            
            <li className="nav-item" key={item.uri}>
                <Link className="nav-link" to={item.uri} activeClassName="active" exact="true">
                  {item.label} 
                </Link>
            </li>
          ))
        }
      </ul>
    </div>
  </nav>

</div>

)


export default Header

import React, { useState } from 'react'
import {Link} from 'gatsby'

import menuOpen from '../images/menu.svg';
import menuClose from '../images/cancel.svg';

export const menuItems = [
  {
    uri: '/',
    label: 'Home'
  },
  {
    uri: '/about',
    label: 'About'
  },
  {
    uri: '/products',
    label: 'Order Products'
  },
  {
    uri: '/posts',
    label: 'Stories'
  },
  {
    uri: '/contact',
    label: 'Contact '
  }
]

const MenuBtn = () => {
  const [menuState, setMenuState] = useState(false)

  const toggleMenu = () => {
    setMenuState(!menuState)
  }
  return (
    <>
      <style jsx>
        {`
          .menu-box {
            width: 100vw;
            height: 100vh;
            margin-left: -15px;
            margin-right: -15px;
            position: absolute;
            top: 0;
            background: white;
          }
          .menu-toggle {
            width: 40px;
            height:40px;
            display: inline-block;
            float: right;
            position: relative;
            z-index: 100;
            img {
              width: 40px;
            }
          }
          ul {
            width: 90vw;
            height: 300px;
            margin: 150px auto;
            li {
              list-style: none;
              font-size: 1.5em;
              margin: 1em auto;
            }
          }
          .scale-in-tr {
            animation: scale-in-tr 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          }
          .scale-in-tr-back {
            animation: scale-in-tr-back 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          }

          @keyframes scale-in-tr-back {
            100% {
              -webkit-transform: scale(0);
                      transform: scale(0);
              -webkit-transform-origin: 100% 0%;
                      transform-origin: 100% 0%;
              opacity: 1;
              display: none;
            }
            0% {
              -webkit-transform: scale(1);
                      transform: scale(1);
              -webkit-transform-origin: 100% 0%;
                      transform-origin: 100% 0%;
              opacity: 1;
            }
          }
          @keyframes scale-in-tr {
            0% {
              -webkit-transform: scale(0);
                      transform: scale(0);
              -webkit-transform-origin: 100% 0%;
                      transform-origin: 100% 0%;
              opacity: 1;
              display: block;
            }
            100% {
              -webkit-transform: scale(1);
                      transform: scale(1);
              -webkit-transform-origin: 100% 0%;
                      transform-origin: 100% 0%;
              opacity: 1;
            }
          }

        `}
      </style>
      <span className="menu-toggle d-md-none d-sm-block" onClick={toggleMenu}>
        {
      
          menuState ? <img src={menuClose} className="menu-close"  alt="close"/> 
          : <img src={menuOpen} className="menu-open" alt="open"/>
      
        }
      </span>
      <div className={`menu-box d-md-none d-sm-flex flex-column justify-content-center align-items-center ${menuState ? 'scale-in-tr' : 'scale-in-tr-back'} `}>
        <ul className="align-self-center">
          {
            menuItems.map(item => (
              <li key={item.uri}>
                <Link to={item.uri} activeClassName="active">
                  {item.label}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

export default MenuBtn;
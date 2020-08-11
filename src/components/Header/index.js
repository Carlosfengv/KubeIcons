import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../../images/logo.svg"
import '../Header/style.scss'
import Icon from '../Icon/index'

const Header = ({}) => (
  <div className="container">
    <div className="nav">
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          <img src={Logo} height="48" width="200"/>
        </a>
        {/* <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a> */}
      </div>

      <div className="navbar-menu">
        {/* <div className="navbar-start">
          <a className="navbar-item">
            图标库
          </a>

          <a className="navbar-item">
            参与贡献
          </a>
        </div> */}

        <div className="navbar-end">
            <div className="navbar-item">
              <img alt="GitHub stars" src="https://img.shields.io/github/stars/Carlosfengv/kube-icons?style=social"></img>
            </div>
            <div className="navbar-item getstart">
              <Link to='https://github.com/Carlosfengv/kube-Icons'><Icon name="github" size="20" type="light"></Icon>Get Started</Link>             
            <div/>
        </div>
        </div>
      </div>
      </nav>
  </div>
  </div>
)

export default Header

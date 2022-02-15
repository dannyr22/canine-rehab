import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import logo from "../images/k-nine-logo.png"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
    style={{
      // background: `#7CB778`,
      marginBottom: `1rem`,
    }}
  >
    <div
      className={styles.headerContent}
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.95rem 1.0875rem`,
      }}
    >
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
      </div>
      <h1 style={{ margin: 0 }} className={styles.headerTitle}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link activeStyle={{ borderBottom: "2px solid white" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeStyle={{ borderBottom: "2px solid white" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link activeStyle={{ borderBottom: "2px solid white" }} to="/stories">
            Stories
          </Link>
        </li>
        <li>
          <Link
            activeStyle={{ borderBottom: "2px solid white" }}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link activeStyle={{ borderBottom: "2px solid white" }} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

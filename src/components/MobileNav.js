import React from "react"
import { Link } from "gatsby"
import * as styles from "./MobileNav.module.css"

const MobileNav = ({ siteTitle, toggleMobileNav }) => {
  return (
    <div className={styles.mobileNavContainer}>
      <span className={styles.closeButton} onClick={toggleMobileNav}>
        X
      </span>
      <h2>{siteTitle}</h2>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stories">Stories</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MobileNav

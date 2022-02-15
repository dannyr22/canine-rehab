import React from "react"
import { Link } from "gatsby"
import * as styles from "./footer.module.css"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerInformation}>
          <p>K-9 Rehabilitation</p>
          <p>123 Farm Road</p>
          <p>Chipstead</p>
          <p>Surrey</p>
          <p>&copy; K-9 Rehabilitation 2015 </p>
        </div>
        <div className={styles.socialIcons}>
          <Link to="https://facebook.com">
            <img src={facebook} alt="facebook link" />
          </Link>
          <Link to="https://instagram.com">
            <img src={instagram} alt="instagram link" />
          </Link>
          <Link to="https://twitter.com">
            <img src={twitter} alt="twitter link" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

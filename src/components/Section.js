import React from "react"
import * as styles from "./Section.module.css"

const Section = ({ title, body }) => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionTitle}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Section

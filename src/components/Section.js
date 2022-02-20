import React from "react"
import * as styles from "./Section.module.css"

const Section = ({ title, body }) => {
  return (
    <div style={styles.sectionContainer}>
      <div style={styles.sectionTitle}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default Section

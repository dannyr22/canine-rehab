import React from "react"
import * as styles from "./ContactForm.module.css"

const ContactForm = () => {
  return (
    <form
      className={styles.contactForm}
      name="Contact Form"
      method="POST"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="Contact Form" />
      <input type="text" name="name" placeholder="name" />
      <input type="email" name="email" placeholder="email@example.com" />
      <div>
        <textarea
          name="message"
          placeholder="type your message here"
          rows="5"
          style={{ width: "100%", textAlign: "center" }}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm

import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"

const contact = () => {
  return (
    <Layout>
      <div className="pageContent contact-page">
        <h2 className="services-header">Get in touch</h2>
        <div className="main">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}

export default contact

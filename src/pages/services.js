import React from "react"
import Layout from "../components/layout"
import Section from "../components/Section"
import "../styles/global.css"

const services = () => {
  const daycareInfo = {
    title: "Doggy day-care / boot camp:",
    body: "We run our day-care in Chipstead Surrey, from Monday - FridayOur day-care / boot camp is to help dogs that struggle to socialise with their own kind, and help them rehabilitate to a positive and social mindset. We work with our calm and balanced pack to help influence others in need, to help build their confidence and gain reassurance within the pack.We also run a standard doggy day-care for your dogs to come, run around and have fun day out with their friends! We have a basic agility set up to help mentally and physically stimulate your dogs throughout the day.",
  }

  const consultation = {
    title: "1-1 Consultation",
    body: "I do 1-1 consultations at clients homes, to help with issues within the household and also out on walks if necessary. This is to help owners with their dogs, and create a level of respect from k9 to owner. ",
  }
  return (
    <Layout>
      <div className="pageContent services-page">
        <h2 className="services-header">Our Services</h2>
        <div className="main">
          <Section title={daycareInfo.title} body={daycareInfo.body} />
          <Section title={consultation.title} body={consultation.body} />
        </div>
      </div>
    </Layout>
  )
}

export default services

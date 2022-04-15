/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"
import MobileNav from "./MobileNav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [showMobileNav, setShowMobileNav] = React.useState(false)

  const toggleMobileNav = () => {
    setShowMobileNav(prevState => !prevState)
  }

  return (
    <>
      {showMobileNav && (
        <MobileNav
          siteTitle={data.site.siteMetadata?.title || `Title`}
          toggleMobileNav={toggleMobileNav}
        />
      )}
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        toggleMobileNav={toggleMobileNav}
      />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

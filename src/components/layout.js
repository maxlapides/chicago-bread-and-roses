/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import { Layout as AntLayout, Icon } from "antd"
import Helmet from "react-helmet"

import Logo from "../images/logo.svg"
import Header from "./header"
import Hero from "./hero"
import TopNav from "./top-nav"
import ExternalLink from "./external-link"
import "antd/dist/antd.less"
import "./layout.scss"

const Layout = ({ title, color, children, heroImageName, layoutClassName }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" type="text/css" href="/kelpt.css" />
        </Helmet>
        <Header
          menuLinks={data.site.siteMetadata.menuLinks}
          siteTitle={data.site.siteMetadata.title}
        />
        <AntLayout className={layoutClassName}>
          <div className="social-wrapper">
            <div className="social">
              <ExternalLink href="https://www.facebook.com/breadandrosesdsa/">
                <Icon type="facebook" theme="filled" />
              </ExternalLink>
              <ExternalLink href="https://twitter.com/BreadRosesDSA">
                <Icon type="twitter" />
              </ExternalLink>
            </div>
          </div>
          <div className="logo-container">
            <Link to="/">
              <Logo className="logo" />
              <div className="logo-local">Chicago</div>
            </Link>
          </div>
          <TopNav menuLinks={data.site.siteMetadata.menuLinks} />
          <Hero title={title} color={color} imageName={heroImageName} />
          <AntLayout.Content>{children}</AntLayout.Content>
        </AntLayout>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

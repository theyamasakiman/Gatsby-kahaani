import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  footerBlock,
  logo,
  navLogo,
  greyBar,
  contactBox,
  footDetails,
  mainFoot,
} from './layout.module.css'


const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <div className={greyBar}>
      </div>
      <Link to="/">
        <StaticImage className={navLogo} alt="Kahaani team logo, Centered 'UW Kahaani' over seattle
        skyline" src="../images/compressed.png">
        </StaticImage>
      </Link>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/team">Team</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/events" className={navLinkText}>Events</Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footerBlock}>
        <div className={mainFoot}>
          <span>
            <Link to="/">
              <StaticImage className={logo} alt="Kahaani team logo, Centered 'UW Kahaani' over seattle
              skyline" src="../images/compressed.png">
              </StaticImage>
            </Link>
          </span>
          <section className={contactBox}>
            <span>
              contact
            </span>
            <span>
              kahaani@gmail.com
            </span>
          </section>
        </div>
        <div className={footDetails}>
          <section>
            <p>Copuright © UW Kahaani 2026</p>
          </section>
          <section>
            <p>Site designed and coded by <a href='https://theyamasakiman.github.io/index.html'>
              Chris Yamasaki</a></p>
          </section>
        </div>
      </footer>
    </div>
  )
}
export default Layout
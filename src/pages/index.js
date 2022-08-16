import * as React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'
import "../stylesheet.css"

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle={"Home"}>
      <StaticImage alt="Kahaani team picture in front of the St. Louis Bean" src="./images/icon.png">
      </StaticImage>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/09i-ZbVb-DU"
      title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Welcome to UW Kahaani, UW’s premier Indian Bollywood fusion dance team.  We are always too
        busy to pracitce to hang out and didn't even go to nationals or something idk Gokul knows
        about this shit not me but more of this kind of stuff here</p>
    </Layout>
  )
}

export default IndexPage

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
      <div>
        <p>Willow baskets with plaited rush and wood lath</p>
        <p>Courses, workshops for all ages, demonstrations, exhibitions</p>
      </div>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="baskets"
      />
      <br />
      <div>
        <p>Member of the <a href="https://basketmakersassociation.org.uk/">Basketmakers Association</a></p>
        <p>Yeoman Member of the <a href="https://www.basketmakersco.org/">Worshipful Company Of  Basketmakers</a></p>
      </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "index-page.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `
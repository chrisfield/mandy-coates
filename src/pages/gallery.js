import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import galleryStyles from "./gallery.module.css"


export default ({ data }) => (
  <Layout  className={galleryStyles.album}>
    <section>
    {data.allGalleryYaml.edges[0].node.images.map(image =>
      <div>
        <Img
          className={galleryStyles.image}
          fluid={image.image.childImageSharp.fluid}
          alt={image.alt || image.image.name}
        />
      </div>
    )}
    </section>
  </Layout>
)

export const query = graphql` 
  query MyQuery {
    allGalleryYaml {
      edges {
        node {
          id
          images {
            image {
              id
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`

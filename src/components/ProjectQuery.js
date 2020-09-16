import { graphql } from "gatsby"

export const projectQuery = graphql`
  fragment projectFragment on ContentfulProjects {
    id
    github
    live
    featured
    image {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    tag {
      stack
    }
    desc {
      childMarkdownRemark {
        html
      }
    }
  }
`

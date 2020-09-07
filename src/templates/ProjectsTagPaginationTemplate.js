import React from "react"

const ProjectsTagPagination = ({ data, context }) => {
  console.log(data)
  console.log(context)
  return <div>ProjectsTagPagination</div>
}

export const tagPaginationQuery = graphql`
  query tagPaginationQuery($tag: String!, $limit: Int!, $skip: Int!) {
    projects: allContentfulProjects(
      filter: { tag: { stack: { in: [$tag] } } }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        ...projectFragment
      }
      totalCount
    }
  }
`

export default ProjectsTagPagination

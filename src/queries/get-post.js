import { gql } from "@apollo/client";

const GETDATA = gql`
  query Projects($limit: Int, $skip: Int, $categoryId: Int) {
    projects(limit: $limit, skip: $skip, categoryId: $categoryId) {
      firstItem
      lastItem
      totalItems
      data {
        id
        title
        images
        categories {
          name
          id
        }
           ProjectDemoLink {
        link
        title
      }
        client {
        firstName
        lastName
      }
      ProjectDescription {
        description
        heading
        project {
          technologies {
            name
          }
          title
        }
      }
      }
    }
  }
`;

export default GETDATA;

export const GETBYID = gql`
  query Client($projectId: Int!) {
    projectById(projectId: $projectId) {
      client {
        country
        firstName
        lastName
      }
      description
      images
      title
      videos
      categories {
        name
        id
      }
      ProjectDemoLink {
        id
        link
        title
      }
      technologies {
        id
        name
      }
      ProjectDescription {
        id
        heading
        description
        images
        list
      }
    }
  }
`;

export const GETCATGORY = gql`
  query getcatgory {
    categories {
      id
      name
    }
  }
`;

export const GETALLPROJECT = gql`
query AllProjects {
  allProjects {
    id
  }
}
`

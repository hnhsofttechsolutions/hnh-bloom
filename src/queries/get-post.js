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
      targetAudience
      keyFeatures
      ProjectTimeline {
        duration
        title
        description
      }
      ProjectDetail {
        title
        value
      }
      ProjectStat {
        title
        value
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
  query ProjectDemoLink {
    allProjects {
      id
      title
      targetAudience
      images
      categories {
        id
        name
      }
    }
  }
`;
export const CREATE_CONTACT_MUTATION = gql`
  mutation CreateContact(
    $firstName: String!
    $lastName: String!
    $subject: String!
    $comment: String!
    $email: String
    $phone: String
    $companyName: String
  ) {
    createContact(
      firstName: $firstName
      lastName: $lastName
      subject: $subject
      comment: $comment
      email: $email
      phone: $phone
      companyName: $companyName
    ) {
      id
      firstName
      lastName
      email
      phone
      subject
      comment
      companyName
    }
  }
`;
export const PROJECT_CATEGORIES = gql`
  query Projects {
    categories {
      name
    }
  }
`;
// export const GETBYID: DocumentNode = gql`
//    query ProjectDemoLink($projectId: Int!) {
//     projectById(projectId: $projectId) {
//       client {
//         country
//         firstName
//         lastName
//       }
//       description
//       title
//       videos
//       images
//       id
//       categories {
//         id
//         name
//       }
//       ProjectDemoLink {
//         id
//         link
//         title
//       }
//       technologies {
//         id
//         name
//       }
//       ProjectDescription {
//         id
//         heading
//         description
//         images
//         list
//       }
//       targetAudience
//       keyFeatures
//       ProjectTimeline {
//         duration
//         title
//         description
//       }
//       ProjectDetail {
//         title
//         value
//       }
//       ProjectStat {
//         title
//         value
//       }
//     }
//   }
//   `;

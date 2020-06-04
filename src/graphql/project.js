import gql from 'graphql-tag';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!
    $description: String!
    $type: String!
    $startDate: String!
    $endDate: String!
  ) {
    createProject(
      projectInput: {
        title: $title
        description: $description
        type: $type
        startDate: $startDate
        endDate: $endDate
      }
    ) {
      _id
      title
      description
      type
      startDate
      endDate
      isOpen
      projectPictureUrl
      creator {
        _id
      }
      vacancies {
        _id
      }
    }
  }
`;

export const GET_PROJECT_BY_ID = gql`
  query projectById($projectId: ID!) {
    projectById(projectId: $projectId) {
      _id
      title
      description
      type
      startDate
      endDate
      isOpen
      projectPictureUrl
      updatedAt
      files {
        _id
        name
        url
      }
      vacancies {
        _id
        title
        experience
        skills
        description
        selectedUser {
          _id
        }
        postulatedUsers {
          _id
        }
      }
    }
  }
`;

export const GET_PROJECTS = gql`
  query projects($skill: String!) {
    projects(skill: $skill) {
      _id
      title
      description
      type
      startDate
      endDate
      isOpen
      projectPictureUrl
      skills
      updatedAt
      views
      creator {
        _id
        firstName
        lastName
        profilePictureUrl
        companyName
      }
      vacancies {
        _id
        title
        experience
        description
        skills
        selectedUser {
          _id
        }
        postulatedUsers {
          _id
        }
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID
    $method: String
    $title: String
    $description: String
    $type: String
    $views: Int
    $startDate: String
    $endDate: String
    $isOpen: Boolean
    $files: [FileInput]
    $projectPictureUrl: String
  ) {
    updateProject(
      projectInput: {
        projectId: $projectId
        method: $method
        title: $title
        description: $description
        type: $type
        views: $views
        startDate: $startDate
        endDate: $endDate
        isOpen: $isOpen
        files: $files
        projectPictureUrl: $projectPictureUrl
      }
    ) {
      title
      description
      type
      startDate
      endDate
      isOpen
      projectPictureUrl
      updatedAt
      views
      files {
        _id
        name
        url
      }
      vacancies {
        _id
        title
        experience
        skills
        selectedUser {
          _id
        }
        postulatedUsers {
          _id
        }
      }
    }
  }
`;

export const DELETE_PROJECT_FILE = gql`
  mutation deleteProjectFile($projectId: ID!, $fileId: ID!) {
    deleteProjectFile(projectId: $projectId, fileId: $fileId) {
      title
      description
      type
      startDate
      endDate
      isOpen
      projectPictureUrl
      files {
        _id
        name
        url
      }
      vacancies {
        _id
        title
        experience
        description
        skills
      }
    }
  }
`;

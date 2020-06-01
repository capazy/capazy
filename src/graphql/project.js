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
      vacancies {
        _id
        title
        experience
        skills
        description
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
      skills
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
      }
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: ID
    $title: String
    $description: String
    $type: String
    $startDate: String
    $endDate: String
    $isOpen: Boolean
  ) {
    updateProject(
      projectInput: {
        projectId: $projectId
        title: $title
        description: $description
        type: $type
        startDate: $startDate
        endDate: $endDate
        isOpen: $isOpen
      }
    ) {
      title
      description
      type
      startDate
      endDate
      isOpen
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

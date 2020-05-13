import gql from 'graphql-tag';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!
    $description: String!
    $type: String!
    $deadline: String!
    $published: String!
  ) {
    createProject(
      projectInput: {
        title: $title
        description: $description
        type: $type
        deadline: $deadline
        published: $published
      }
    ) {
      _id
      title
      description
      type
      deadline
      published
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

export const GET_PROJECTS = gql`
  {
    projects {
      _id
      title
      description
      type
      deadline
      published
      isOpen
      creator {
        _id
      }
      vacancies {
        _id
        title
        experience
        skills
      }
    }
  }
`;

export const GET_PROJECTS_BY_SKILL = gql`
  query projectsBySkill($skill: String!) {
    projectsBySkill(skill: $skill) {
      _id
      title
      description
      type
      deadline
      published
      isOpen
      creator {
        _id
      }
      vacancies {
        _id
        title
        experience
        skills
        firstName
        lastName
      }
    }
  }
`;

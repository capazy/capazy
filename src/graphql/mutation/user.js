import gql from 'graphql-tag';

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      userInput: {
        email: $email
        password: $password
        firstName: $firstName
        lastName: $lastName
      }
    ) {
      userId
      token
      tokenExp
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
      userId
      token
      tokenExp
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($skills: [String!]) {
    updateUser(userInput: { skills: $skills }) {
      _id
      skills
    }
  }
`;

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

export const CREATE_VACANCY = gql`
  mutation createVacancy(
    $projectId: ID!
    $title: String!
    $experience: String!
    $skills: [String!]
  ) {
    createVacancy(
      vacancyInput: {
        projectId: $projectId
        title: $title
        experience: $experience
        skills: $skills
      }
    ) {
      _id
      title
      experience
      skills
    }
  }
`;

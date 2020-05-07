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
  mutation updateUser(
    $firstName: String
    $lastName: String
    $description: String
    $skills: [String!]
    $languages: [String!]
    $expertise: String
    $companyName: String
    $companyDepartment: String
    $country: String
  ) {
    updateUser(
      userInput: {
        firstName: $firstName
        lastName: $lastName
        description: $description
        skills: $skills
        languages: $languages
        expertise: $expertise
        companyName: $companyName
        companyDepartment: $companyDepartment
        country: $country
      }
    ) {
      _id
      firstName
      languages
      description
      companyName
      companyDepartment
      country
      skills
      expertise
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

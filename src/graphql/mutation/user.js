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
    $additionalSkills: [String!]
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
        additionalSkills: $additionalSkills
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
      additionalSkills
      expertise
    }
  }
`;

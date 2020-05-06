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

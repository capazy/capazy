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
      token
      tokenExp
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(loginInput: { email: $email, password: $password }) {
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
      lastName
      description
      skills
      languages
      companyName
      companyDepartment
      country
    }
  }
`;

export const GET_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      description
      skills
      languages
      # experience
      companyName
      companyDepartment
      country
    }
  }
`;

export const GET_USERS = gql`
  query users($skill: String!) {
    users(skill: $skill) {
      _id
      firstName
      lastName
      description
      skills
      languages
      # experience
      companyName
      companyDepartment
      country
    }
  }
`;

export const GET_USER_CREATED_PROJECTS = gql`
  {
    user {
      _id
      createdProjects {
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
          postulatedUsers {
            _id
            firstName
            lastName
            skills
          }
        }
      }
    }
  }
`;

export const GET_USER_JOINED_PROJECTS = gql`
  {
    user {
      _id
      joinedProjects {
        title
        experience
        skills
        project {
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
    }
  }
`;

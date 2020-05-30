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
    $profilePictureUrl: String
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
        profilePictureUrl: $profilePictureUrl
      }
    ) {
      _id
      firstName
      lastName
      description
      skills
      expertise
      additionalSkills
      profilePictureUrl
      languages
      companyName
      companyDepartment
      country
      profilePictureUrl
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
      expertise
      companyName
      companyDepartment
      country
      additionalSkills
      profilePictureUrl
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
      expertise
      languages
      companyName
      companyDepartment
      country
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query userById($userId: ID!) {
    userById(userId: $userId) {
      _id
      firstName
      lastName
      description
      skills
      languages
      expertise
      companyName
      companyDepartment
      country
      profilePictureUrl
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
        startDate
        endDate
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
          selectedUser {
            _id
          }
          postulatedUsers {
            _id
            firstName
            lastName
            skills
            joins {
              _id
              vacancy {
                _id
              }
              status
            }
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
        selectedUser {
          _id
        }
        project {
          _id
          title
          description
          type
          startDate
          endDate
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

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
    $workExperience: [ExperienceInput]
    $education: [EducationInput]
    $role: String
    $method: String
    $files: [FileInput]
  ) {
    updateUser(
      userInput: {
        method: $method
        files: $files
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
        workExperience: $workExperience
        education: $education
        role: $role
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
      role
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
      files {
        _id
        name
        url
      }
    }
  }
`;

export const GET_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      description
      skills
      languages
      expertise
      companyName
      companyDepartment
      country
      additionalSkills
      profilePictureUrl
      role
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
      files {
        _id
        name
        url
      }
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
      role
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
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
      role
      additionalSkills
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      files {
        _id
        name
        url
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
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
        projectPictureUrl
        isOpen
        creator {
          _id
        }
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
        _id
        title
        experience
        skills
        description
        postulatedUsers {
          _id
        }
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
          isOpen
          projectPictureUrl
          updatedAt
          creator {
            _id
            firstName
            lastName
          }
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
    }
  }
`;

export const CREATE_EXPERIENCE = gql`
  mutation createExperience(
    $title: String!
    $companyName: String!
    $yearsOfExperience: String!
    $description: String!
    $skills: [String!]
  ) {
    createExperience(
      experienceInput: {
        title: $title
        companyName: $companyName
        yearsOfExperience: $yearsOfExperience
        description: $description
        skills: $skills
      }
    ) {
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
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
    }
  }
`;

export const DELETE_EXPERIENCE = gql`
  mutation deleteExperience($experienceId: ID!) {
    deleteExperience(experienceId: $experienceId) {
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
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
    }
  }
`;

export const CREATE_EDUCATION = gql`
  mutation createEducation(
    $degree: String!
    $school: String!
    $year: String!
    $fieldOfStudy: String!
  ) {
    createEducation(
      educationInput: {
        degree: $degree
        school: $school
        year: $year
        fieldOfStudy: $fieldOfStudy
      }
    ) {
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
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
    }
  }
`;

export const DELETE_EDUCATION = gql`
  mutation deleteExperience($educationId: ID!) {
    deleteEducation(educationId: $educationId) {
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
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
    }
  }
`;

export const SEND_HELP_EMAIL = gql`
  mutation sendEmail($email: String!, $message: String!) {
    sendEmail(email: $email, message: $message) {
      status
    }
  }
`;

export const DELETE_USER_FILE = gql`
  mutation deleteUserFile($fileId: ID!) {
    deleteUserFile(fileId: $fileId) {
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
      role
      education {
        _id
        degree
        school
        year
        fieldOfStudy
      }
      workExperience {
        _id
        title
        companyName
        yearsOfExperience
        description
        skills
      }
      files {
        _id
        name
        url
      }
    }
  }
`;

import gql from 'graphql-tag';

export const CREATE_VACANCY = gql`
  mutation createVacancy(
    $projectId: ID!
    $title: String!
    $experience: String!
    $description: String!
    $skills: [String!]
    $timeCommitment: Float!
    $timeCommitmentUnits: String!
  ) {
    createVacancy(
      vacancyInput: {
        projectId: $projectId
        title: $title
        experience: $experience
        description: $description
        skills: $skills
        timeCommitment: $timeCommitment
        timeCommitmentUnits: $timeCommitmentUnits
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
        title
        experience
        description
        skills
      }
    }
  }
`;

export const JOIN_VACANCY = gql`
  mutation joinVacancy($vacancyId: ID!) {
    joinVacancy(vacancyId: $vacancyId) {
      _id
    }
  }
`;

export const CANCEL_VACANCY = gql`
  mutation cancelVacancy($vacancyId: ID!) {
    cancelVacancy(vacancyId: $vacancyId) {
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

export const SELECT_USER = gql`
  mutation selectUser($selectedUserId: ID!, $vacancyId: ID!) {
    selectUser(selectedUserId: $selectedUserId, vacancyId: $vacancyId) {
      _id
    }
  }
`;

export const GET_VACANCIES = gql`
  {
    vacancies {
      _id
      title
      description
      experience
      skills
      postulatedUsers {
        _id
      }
      project {
        _id
        views
        title
        description
        type
        startDate
        endDate
        projectPictureUrl
        files {
          _id
          name
          url
        }
        creator {
          _id
          firstName
          lastName
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
  }
`;

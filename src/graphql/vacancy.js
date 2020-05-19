import gql from 'graphql-tag';

export const CREATE_VACANCY = gql`
  mutation createVacancy(
    $projectId: ID!
    $title: String!
    $experience: String!
    $skills: [String!]
    $timeCommitment: Float!
    $timeCommitmentUnits: String!
  ) {
    createVacancy(
      vacancyInput: {
        projectId: $projectId
        title: $title
        experience: $experience
        skills: $skills
        timeCommitment: $timeCommitment
        timeCommitmentUnits: $timeCommitmentUnits
      }
    ) {
      _id
      project {
        vacancies {
          _id
        }
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

export const SELECT_USER = gql`
  mutation selectUser($selectedUserId: ID!, $vacancyId: ID!) {
    selectUser(selectedUserId: $selectedUserId, vacancyId: $vacancyId) {
      _id
    }
  }
`;

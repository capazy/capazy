import gql from 'graphql-tag';

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
      project {
        vacancies {
          _id
          firtsName
          lastName
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

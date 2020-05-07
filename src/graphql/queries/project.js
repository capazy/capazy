import gql from 'graphql-tag';

export const GET_PROJECTS = gql`
  {
    projects {
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

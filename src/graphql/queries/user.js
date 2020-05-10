import gql from 'graphql-tag';

export const GET_USER = gql`
  {
    user {
      _id
      firstName
    }
  }
`;

export const GET_USER_CREATED_PROJECTS = gql`
  {
    user {
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

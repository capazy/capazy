import gql from 'graphql-tag';

export const CREATE_PROJECT = gql`
  mutation createProject(
    $title: String!
    $description: String!
    $type: String!
    $deadline: String!
    $published: String!
  ) {
    createProject(
      projectInput: {
        title: $title
        description: $description
        type: $type
        deadline: $deadline
        published: $published
      }
    ) {
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

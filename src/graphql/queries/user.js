import gql from 'graphql-tag';

export const GET_USER = gql`
  query {
    user(id: "5eb5af0ac9bf9e0695b2ca9c") {
      _id
      skills
    }
  }
`;

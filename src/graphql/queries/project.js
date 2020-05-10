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
        title
        experience
        skills
      }
    }
  }
`;

export const GET_PROJECTS_BY_SKILL = gql`
  query projectsBySkill($skill: String!) {
    projectsBySkill(skill: $skill) {
      _id
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
          title
          experience
          skills
        }
      }
    }
  }
`;

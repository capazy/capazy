export const projectReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_PROJECT':
      return {
        ...state,
        project: payload,
      };
    case 'UPDATE_PROJECT':
      return {
        ...state,
        project: payload,
      };
    case 'GET_PROJECT_BY_ID':
      return {
        ...state,
        project: payload,
      };

    case 'RESET_PROJECT':
      return {
        ...state,
        project: null,
      };
    case 'GET_VACANCIES':
      return {
        ...state,
        vacancies: payload,
      };
    default:
      return state;
  }
};

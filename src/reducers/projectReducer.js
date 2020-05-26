export const projectReducer = (state, { type, payload }) => {
  switch (type) {
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
    default:
      return state;
  }
};

export const projectReducer = (state, { type, payload }) => {
  console.log('PAYLOAD', payload);
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
    default:
      return state;
  }
};

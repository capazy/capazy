export const projectReducer = (state, { type, payload }) => {
  console.log('PAYLOAD', payload);
  switch (type) {
    case 'UPDATE_PROJECT':
      return {
        ...state,
        project: payload,
      };

    default:
      return state;
  }
};

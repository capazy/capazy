export const chatReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE':
      return {
        payload,
      };

    default:
      return state;
  }
};

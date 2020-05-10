export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_USER':
      return {
        ...state,
        userId: payload._id,
      };
    default:
      return state;
  }
};

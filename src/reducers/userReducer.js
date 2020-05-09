export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'GET_USER':
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
      };
    default:
      return state;
  }
};

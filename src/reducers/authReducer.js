export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_USER':
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        tokenExp: payload.tokenExp,
        user: payload.userId,
      };
    case 'LOGOUT':
      return { ...state, tokenExp: null, user: null };
    default:
      return state;
  }
};

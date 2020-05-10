export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_USER':
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        user: payload.userId,
        tokenExp: payload.tokenExp,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { ...state, tokenExp: null, user: null };
    default:
      return state;
  }
};

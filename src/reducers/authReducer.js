export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_USER':
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      localStorage.setItem('userId', payload.userId);
      return {
        ...state,
        tokenExp: payload.tokenExp,
        user: payload.userId,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      return { ...state, tokenExp: null, user: null };
    default:
      return state;
  }
};

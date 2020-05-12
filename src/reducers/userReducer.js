export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'CREATE_USER':
    case 'LOGIN':
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        loading: true,
        tokenExp: payload.tokenExp,
      };
    case 'UPDATE_USER':
    case 'LOAD_USER':
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        tokenExp: null,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

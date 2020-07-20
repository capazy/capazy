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
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: payload,
      };
    case 'CREATE_EXPERIENCE':
    case 'GET_ALL_EXPERIENCES':
    case 'DELETE_EXPERIENCE':
      return {
        ...state,
        workExperience: payload,
      };
    case 'CREATE_EDUCATION':
    case 'GET_ALL_EDUCATIONS':
    case 'DELETE_EDUCATION':
      return {
        ...state,
        education: payload,
      };
    default:
      return state;
  }
};

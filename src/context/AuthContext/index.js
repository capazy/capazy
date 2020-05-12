import React, { createContext, useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER, LOGIN } from '../../graphql/user';
import { authReducer } from '../../reducers/authReducer';

const AuthContext = createContext({
  user: null,
  tokenExp: null,
  login: (data) => {},
  logout: () => {},
  signup: (data) => {},
});

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    tokenExp: null,
  });

  // apollo-signup
  const [createUser] = useMutation(CREATE_USER, {
    update(_, { data: { createUser: loginData } }) {
      dispatch({ type: 'CREATE_USER', payload: loginData });
    },
  });

  // apollo-login
  const [loginUser] = useMutation(LOGIN, {
    update(_, { data: { login: loginData } }) {
      dispatch({ type: 'LOGIN', payload: loginData });
    },
  });

  // signup
  const signup = async (data) => {
    await createUser({ variables: data });
  };

  // login
  const login = async (data) => {
    await loginUser({ variables: data });
  };

  // logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.href = '/';
  };

  return (
    <AuthContext.Provider value={{ user: state.user, signup, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

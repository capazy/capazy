import React, { createContext, useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER, LOGIN } from '../../graphql/mutation/user';
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

  // signup
  const [userInput] = useMutation(CREATE_USER, {
    update(_, { data: { createUser: loginData } }) {
      dispatch({ type: 'CREATE_USER', payload: loginData });
    },
  });
  const signup = async (data) => {
    userInput({ variables: data });
  };

  // login
  const [loginInput] = useMutation(LOGIN, {
    update(_, { data: { login: loginData } }) {
      dispatch({ type: 'LOGIN', payload: loginData });
    },
  });
  const login = async (data) => {
    loginInput({ variables: data });
  };

  // logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.href = process.env.REACT_URI;
  };

  return (
    <AuthContext.Provider value={{ user: state.user, signup, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

import React, { createContext, useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER, LOGIN } from '../../graphql/mutation/user';
import { authReducer } from '../../reducers/authReducer';

const AuthContext = createContext({
  tokenExp: null,
  user: null,
  login: (data) => {},
  logout: () => {},
});

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, {
    tokenExp: null,
    user: null,
  });

  // signup
  const signup = async (data) => {
    userInput({ variables: data });
  };
  const [userInput] = useMutation(CREATE_USER, {
    update(_, { data: { createUser: loginData } }) {
      dispatch({ type: 'CREATE_USER', payload: loginData });
    },
  });

  // login
  const login = async (data) => {
    loginInput({ variables: data });
  };
  const [loginInput] = useMutation(LOGIN, {
    update(_, { data: { login: loginData } }) {
      dispatch({ type: 'LOGIN', payload: loginData });
    },
  });

  // logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, signup, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

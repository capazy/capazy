import React, { createContext, useReducer } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from '../../graphql/mutation/user';
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

  // login
  const login = async (data) => {
    userInput({ variables: data });
  };
  const [userInput, { loading }] = useMutation(CREATE_USER, {
    update(_, { data: { createUser: loginData } }) {
      dispatch({ type: 'LOGIN', payload: loginData });
    },
  });

  // logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, loading, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

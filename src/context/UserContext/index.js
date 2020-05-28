import React, { createContext, useReducer } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { CREATE_USER, LOGIN, GET_USER, UPDATE_USER } from '../../graphql/user';
import { userReducer } from '../../reducers/userReducer';

import toggleAlert from '../../utils/toggleAlert';

const UserContext = createContext({
  tokenExp: null,
  user: null,
  loading: false,
  login: (data) => {},
  logout: () => {},
  signup: (data) => {},
});

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, {
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

  //Get User
  const [getCurrentUser, { called, loading }] = useLazyQuery(GET_USER, {
    onCompleted: (data) => {
      dispatch({ type: 'LOAD_USER', payload: data.user });
    },
  });
  const userLoading = called && loading;

  //Update User
  const [updateUser] = useMutation(UPDATE_USER, {
    update(_, { data: { updateUser: user } }) {
      dispatch({ type: 'UPDATE_USER', payload: user });
    },
  });

  // signup
  const signup = async (data) => {
    await createUser({ variables: data });
    await getCurrentUser();
  };

  // login
  const login = async (data) => {
    await loginUser({ variables: data });
    await getCurrentUser();
  };

  const update = async (data) => {
    try {
      await updateUser({ variables: data });
      toggleAlert('Hello', 'success');
    } catch (error) {
      toggleAlert('error', 'error');
    }
  };

  // logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.href = '/';
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        userLoading,
        signup,
        login,
        update,
        logout,
        getCurrentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

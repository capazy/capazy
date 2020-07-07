import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { CREATE_USER, LOGIN, GET_USER, UPDATE_USER } from '../../graphql/user';
import { userReducer } from '../../reducers/userReducer';

// utils
import toggleAlert from '../../utils/toggleAlert';

const UserContext = createContext({
  tokenExp: null,
  user: null,
  loading: false,
  language: 'en',
  login: (data) => {},
  logout: () => {},
  signup: (data) => {},
  passport: (data) => {},
});

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    tokenExp: null,
    language: 'en',
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
    try {
      await createUser({ variables: data });
      await getCurrentUser();
      toggleAlert('Welcome to Capazy!', 'success');
    } catch (error) {
      console.log(error);
    }
  };

  // login
  const login = async (data) => {
    try {
      await loginUser({ variables: data });
      await getCurrentUser();
      toggleAlert('Welcome back!', 'success');
    } catch (error) {
      console.log(error);
    }
  };

  // login with passport
  const passport = async (auth, user) => {
    try {
      await dispatch({ type: 'LOGIN', payload: auth });
      await dispatch({ type: 'LOAD_USER', payload: user });
    } catch (error) {
      console.log(error);
    }
  };

  // update
  const update = async (data) => {
    try {
      await updateUser({ variables: data });
      toggleAlert('Profile updated', 'success');
    } catch (error) {
      toggleAlert('error', 'error');
    }
  };

  // logout
  const logout = async () => {
    await axios.get('/api/logout');
    dispatch({ type: 'LOGOUT' });
    window.location.href = '/';
  };

  // set language
  const setLanguage = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
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
        passport,
        language: state.language,
        setLanguage,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

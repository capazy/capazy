import React, { createContext, useReducer } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import {
  CREATE_USER,
  LOGIN,
  GET_USER,
  UPDATE_USER,
  CREATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  CREATE_EDUCATION,
  DELETE_EDUCATION,
} from '../../graphql/user';
import { userReducer } from '../../reducers/userReducer';

import toggleAlert from '../../utils/toggleAlert';

const UserContext = createContext({
  tokenExp: null,
  user: null,
  loading: false,
  language: 'en',
  login: (data) => {},
  logout: () => {},
  signup: (data) => {},
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

  // create experience
  const [createExperience] = useMutation(CREATE_EXPERIENCE, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_USER', payload: data.createExperience });
    },
  });

  // delete experience
  const [deleteExperience] = useMutation(DELETE_EXPERIENCE, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_USER', payload: data.deleteExperience });
    },
  });

  // create Education
  const [createEducation] = useMutation(CREATE_EDUCATION, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_USER', payload: data.createEducation });
    },
  });

  // delete education
  const [deleteEducation] = useMutation(DELETE_EDUCATION, {
    update(_, { data }) {
      dispatch({ type: 'UPDATE_USER', payload: data.deleteEducation });
    },
  });

  // signup
  const signup = async (data) => {
    await createUser({ variables: data });
    await getCurrentUser();
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

  const update = async (data) => {
    try {
      console.log(data);
      await updateUser({ variables: data });
      toggleAlert('Profile updated', 'success');
    } catch (error) {
      toggleAlert('error', 'error');
    }
  };

  // logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.href = '/';
  };

  // set language
  const setLanguage = (lang) => {
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  };

  const createExp = async (data) => {
    try {
      createExperience({ variables: data });
      toggleAlert('Experience updated', 'success');
    } catch (error) {
      toggleAlert('error', 'error');
    }
  };

  const deleteExp = async (data) => {
    try {
      deleteExperience({ variables: data });
      toggleAlert('Experience deleted', 'success');
    } catch (error) {
      toggleAlert('error', 'error');
    }
  };

  const createEdu = async (data) => {
    try {
      createEducation({ variables: data });
      toggleAlert('Education updated', 'success');
    } catch (error) {
      toggleAlert('error', 'error');
    }
  };

  const deleteEdu = async (data) => {
    try {
      deleteEducation({ variables: data });
      toggleAlert('Education deleted', 'success');
    } catch (error) {
      toggleAlert('error', 'error');
    }
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
        language: state.language,
        setLanguage,
        createExp,
        deleteExp,
        createEdu,
        deleteEdu,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

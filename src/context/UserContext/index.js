import React, { createContext, useReducer } from 'react';
import { useMutation, useLazyQuery } from '@apollo/react-hooks';
import { CREATE_USER, LOGIN, GET_USER, UPDATE_USER } from '../../graphql/user';
import { userReducer } from '../../reducers/userReducer';

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
  const [getCurrentUser] = useLazyQuery(GET_USER, {
    onCompleted: (data) => {
      dispatch({ type: 'LOAD_USER', payload: data.user });
    },
  });

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
    await updateUser({ variables: data });
  };

  // logout
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    window.location.href = '/';
  };

  console.log('STATE', state);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
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

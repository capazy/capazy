import React, { createContext } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/user';

const UserContext = createContext({
  data: null,
});

const UserProvider = (props) => {
  //getCurrentUser
  const [getCurrentUser, { data, loading }] = useLazyQuery(GET_USER);

  return (
    <UserContext.Provider value={{ getCurrentUser, data, loading }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };

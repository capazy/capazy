import React, { createContext } from 'react';

const UserContext = createContext({
  firstName: '',
  lastName: '',
});

export default UserContext;

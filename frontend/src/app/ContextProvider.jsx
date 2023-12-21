import React, { useState, createContext } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState('');
  const [emailLogin, setEmailLogin] = useState('');
  console.log(emailLogin);

  return (
    <Context.Provider value={{ jwt, setJwt, emailLogin, setEmailLogin }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

import React, { useState, createContext } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [jwt, setJwt] = useState('');

  return (
    <Context.Provider value={{ jwt, setJwt }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;

import React, {Children, createContext} from 'react';

export const AuthConText = createContext();

export const AuthProvider = ({Children}) => {
  return (
    <AuthConText.Provider value="Test value">{Children}</AuthConText.Provider>
  );
};

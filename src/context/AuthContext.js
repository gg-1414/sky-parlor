import React from 'react';
import firebase from '../lib/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const login = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

const logout = () => {
  return firebase.auth().signOut();
}

const State = () => {
  const [authUser, loading, error] = useAuthState(firebase.auth());

  return {
    authUser,
    loading,
    error,
    login,
    logout,
  }
}

export const AuthContext = React.createContext({
  authUser: null,
  loading: true,
  error: null,
  login: () => {},
  logout: () => {},
});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={State()}>
      {children}
    </AuthContext.Provider>
  )
}

import React from 'react';
import firebase from '../lib/Firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const State = () => {
  const [collection, loading, error] = useCollection(
    firebase.firestore().collection('playlists'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return {
    collection,
    loading,
    error
  }
}

export const FirestoreContext = React.createContext({
  collection: null,
  loading: true,
  error: null,
})

export function FirestoreProvider({ children }) {
  return (
    <FirestoreContext.Provider value={State()}>
      {children}
    </FirestoreContext.Provider>
  )
}

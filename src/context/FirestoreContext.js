import React, { useState } from 'react';
import firebase from '../lib/Firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const State = () => {
  const [ successMessage, setSuccessMessage ] = useState(null);
  const [collection, loading, error] = useCollection(
    firebase.firestore().collection('playlists'),
    {snapshotListenOptions: { includeMetadataChanges: true}}
  );

  const getPlaylistIdFromIframeScript = (soundcloudUrl) => {
    const playlistsIndex = soundcloudUrl.indexOf('/playlists/');
    const colorIndex = soundcloudUrl.indexOf('&color');
    const sliced = soundcloudUrl.slice(playlistsIndex, colorIndex);
    const playlistId = sliced.slice('/playlists/'.length);
    return playlistId;
  }

  async function addDocument(soundcloudUrl) {
    try {
      const res = await firebase
        .firestore()
        .collection('playlists')
        .add({ soundcloudUrl, timestamp: Date.now() })

      if (res) {
        setSuccessMessage('Success!');
      }
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  }

  return {
    collection,
    loading,
    error,
    successMessage,
    getPlaylistIdFromIframeScript,
    addDocument,
  }
}

export const FirestoreContext = React.createContext({
  collection: null,
  loading: true,
  error: null,
  getPlaylistIdFromIframeScript: () => '',
  addDocument: async () => {},
})

export function FirestoreProvider({ children }) {
  return (
    <FirestoreContext.Provider value={State()}>
      {children}
    </FirestoreContext.Provider>
  )
}

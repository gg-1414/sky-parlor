import React from 'react';
import { FirestoreContext } from '../context/FirestoreContext';
import Soundcloud from './Soundcloud';
import styles from '../styles/components/MusicPlayer.module.scss';

export default function MusicPlayer() {
  return (
    <FirestoreContext.Consumer>
      {({ collection, getPlaylistIdFromIframeScript }) => {

        if (collection) {
          const latestPlaylist = collection.docs.sort((a, b) => {
            if (a.data().timestamp < b.data().timestamp) {
              return 1;
            } else {
              return -1;
            }
          })

          const soundcloudUrl = latestPlaylist[0].data().soundcloudUrl
          const playlistId = getPlaylistIdFromIframeScript(soundcloudUrl);

          if (playlistId) {
            return (
              <div className={`${styles.player_wrapper} fixed bottom-0 left-0 z-20`}>
                <Soundcloud playlist={playlistId} />
              </div>
            );
          } else {
            return (
              <div className="music_player_empty" />
            );
          };

        }
      }}
    </FirestoreContext.Consumer>
  );
};

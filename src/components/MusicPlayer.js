import React from 'react';
import { FirestoreContext } from '../context/FirestoreContext';
// import SoundCloud from 'react-custom-soundcloud';
import Soundcloud from './Soundcloud';
import 'react-custom-soundcloud/dist/style.css';
import styles from '../styles/components/MusicPlayer.module.scss';

export default function MusicPlayer() {
  return (
    <FirestoreContext.Consumer>
      {({ collection }) => {
        if (collection) {
          const soundcloudUrl = collection.docs[0].data().soundcloudUrl
          const playlistsIndex = soundcloudUrl.indexOf('/playlists/')
          const colorIndex = soundcloudUrl.indexOf('&color')
          const sliced = soundcloudUrl.slice(playlistsIndex, colorIndex);
          const playlistId = sliced.slice('/playlists/'.length)

          return (
            <div className={`${styles.player_wrapper} fixed bottom-0 left-0 z-20`}>
              {/* <SoundCloud
                playlist={playlistId}
                mini={true}
              /> */}
              <Soundcloud playlist={playlistId} />
            </div>
          )
        }
      }}
    </FirestoreContext.Consumer>
  )
}

import React from 'react';
import { FirestoreContext } from '../context/FirestoreContext';
import SoundCloud from 'react-custom-soundcloud';
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
            <>
              {/* <div className={"music-player-wrapper"} dangerouslySetInnerHTML={{__html: soundcloudUrl}} /> */}
              <div className={styles.player}>
                <SoundCloud
                  playlist={playlistId}
                  mini={true}
                />
              </div>
              
            </>
          )
        }
      }}
    </FirestoreContext.Consumer>
  )
}

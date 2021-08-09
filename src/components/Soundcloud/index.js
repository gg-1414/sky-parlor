import { useEffect, useState, useRef } from 'react';
import { soundcloudApi } from '../../lib/consts';
import loadScript from '../../lib/loadScript';
import Iframe from './Iframe';
import Title from './Title';
import Buttons from './Buttons';
import styles from '../../styles/components/MusicPlayer.module.scss';

export default function Soundcloud({ playlist }) {
  if (!playlist) {
    throw new Error('Prop playlist required.');
  }

  const [currentTrack, setTrack] = useState(null),
        [soundcloud, setSoundcloud] = useState(null),
        [sounds, setSounds] = useState([]),
        [trackIndex, setTrackIndex] = useState(0),
        [trackPlaying, setTrackPlaying] = useState(false),
        [playProgress, setPlayProgress] = useState({ currentPosition: 0 }),
        [percentPlayed, setPercentPlayed] = useState(0);

  const iframeRef = useRef(null);

  const setCurrentTrack = (track, index) => {
    setTrack({
      artist: track.user.username,
      artistUrl: track.user.permalink_url,
      duration: track.duration,
      permalinkUrl: track.permalink_url,
      title: track.title
    })
    setTrackIndex(index);
  }

  useEffect(() => {
    loadScript(soundcloudApi, () => {
      if (iframeRef.current) {
        const soundcloudIframe = window.SC.Widget(iframeRef.current);
        setSoundcloud(soundcloudIframe);
      }
    })
  }, []);

  useEffect(() => {
    if (!soundcloud) {
      return
    };

    soundcloud.bind(window.SC.Widget.Events.READY, function() {
      soundcloud.getSounds((sounds) => {
        const tracks = sounds.filter(sound => sound.hasOwnProperty('title'));
        setSounds(tracks);
        setCurrentTrack(tracks[0], 0);
      })
    })
    soundcloud.bind(window.SC.Widget.Events.PAUSE, () => {
      setTrackPlaying(false);
    })
    soundcloud.bind(window.SC.Widget.Events.PLAY, () => {
      setTrackPlaying(true);
    })
    soundcloud.bind(window.SC.Widget.Events.PLAY_PROGRESS, (progress) => {
      setPlayProgress(progress);
    })
  }, [soundcloud]);

  useEffect(() => {
    if (!currentTrack) {
      return
    };
    const position = Number(((playProgress.currentPosition / currentTrack.duration) * 100).toFixed(1));
    setPercentPlayed(position);
  }, [currentTrack, playProgress]);

  useEffect(() => {
    if (!soundcloud || !sounds || !currentTrack) {
      return;
    }
    // soundcloud.play();
  }, [soundcloud, sounds, currentTrack])

  return (
    <div className={`${styles.player} py-3 px-4`}>
      {currentTrack && (
        <div className={`${styles.player_current} grid w-full items-center z-20 relative sm:gap-2`}>
          <Title permalink={currentTrack.permalinkUrl} title={currentTrack.title} />
          <Buttons
            setCurrentTrack={setCurrentTrack}
            soundcloud={soundcloud}
            sounds={sounds}
            trackIndex={trackIndex}
            trackPlaying={trackPlaying}
          />
        </div>
      )}

      <Iframe ref={iframeRef} playlist={playlist} />
    </div>
  )
}

// Credit: https://github.com/matswainson/react-custom-soundcloud

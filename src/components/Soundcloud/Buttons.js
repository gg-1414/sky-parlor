import styles from '../../styles/components/MusicPlayer.module.scss';

const PrevButton = ({ setCurrentTrack, soundcloud, sounds, trackIndex }) => {
  const prevTrack = () => {
    soundcloud.isPaused(function(paused) {
      if (paused) soundcloud.prev().pause();
      else soundcloud.prev();
    });
    setCurrentTrack(sounds[trackIndex-1], trackIndex-1);
  }
  return (
    <button
      className={styles.prev}
      onClick={prevTrack}
      type="button"
      aria-label="Previous song"
    />
  );
};

const PlayButton = ({ soundcloud, trackPlaying }) => {
  const playPause = () => {
    soundcloud.isPaused((paused) => {
      if (paused) soundcloud.play();
      else soundcloud.pause();
    })
  }
  return (
    <button
      className={`${styles.play} ${trackPlaying ? styles.pause : null}`}
      onClick={playPause}
      type="button"
      aria-label="Play song"
    />
  );
};

const NextButton = ({ setCurrentTrack, soundcloud, sounds, trackIndex }) => {
  const nextTrack = () => {
    soundcloud.isPaused((paused) => {
      if (paused) soundcloud.next().pause();
      else soundcloud.next();
    });
    setCurrentTrack(sounds[trackIndex+1], trackIndex+1);
  }
  return (
    <button
      className={styles.next}
      onClick={nextTrack}
      type="button"
      aria-label="Next song"
    />
  );
};

const Buttons = ({
  setCurrentTrack, 
  soundcloud, 
  sounds,
  trackIndex,
  trackPlaying,
}) => {
  if (!soundcloud) {
    return null;
  }
  const hasPlaylist = sounds && sounds.length > 1;
  return (
    <div className={`${styles.buttons} flex`}>
      {hasPlaylist && trackIndex !== 0 && (
        <PrevButton
          setCurrentTrack={setCurrentTrack}
          soundcloud={soundcloud}
          sounds={sounds}
          trackIndex={trackIndex}
        />
      )}

      <PlayButton soundcloud={soundcloud} trackPlaying={trackPlaying} />

      {hasPlaylist && trackIndex !== sounds.length-1 && (
        <NextButton
          setCurrentTrack={setCurrentTrack}
          soundcloud={soundcloud}
          sounds={sounds}
          trackIndex={trackIndex}
        />
      )}
    </div>
  )
}

export default Buttons;
import { forwardRef } from "react";

const Iframe = forwardRef((props, ref) => {
  const { playlist } = props;
  
  const playerUrl = () => {
    if (playlist) {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${playlist}&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`
    }
  }

  return <iframe
    allow="autoplay"
    frameBorder="no"
    height="450"
    ref={ref}
    scrolling="no"
    src={playerUrl()}
    title="Soundcloud"
    width="100%"
    className="absolute opacity-0 max-w-xs top-0 z-0"
  />
})

export default Iframe;
import { Link } from 'react-router-dom';
import bgVideo from '../assets/sky-bg-spinning-logo.mp4';
import bgVideoPlaceholder from '../assets/sky-bg-spinning-logo.png';
import styles from '../styles/pages/Landing.module.scss';

export default function Landing() {
  return (
    <div className="relative">
      <Link to="/home">
        <div
          className="object-cover m-0 h-screen w-full"
          dangerouslySetInnerHTML={{
            __html: `
              <video id="landing-video" class="object-cover m-0 h-screen w-full" autoplay loop muted playsinline poster=${bgVideoPlaceholder}>
                <source src=${bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <script>
                document.addEventListener("DOMContentLoaded", function() {
                  const video = document.getElementById("landing-video");
                  video.play();
                })
              </script>`,
          }}
        />
      </Link>
      <div className={`${styles.label} absolute w-full px-4 top-0 right-0 flex items-center justify-between z-20"`}>
        <Link to="/admin" className="underline text-xs">Admin</Link>
        <Link to="/home" className="underline cursor-pointer text-xs md:text-sm">Click anywhere to continue</Link>
      </div>
    </div>
  );
};

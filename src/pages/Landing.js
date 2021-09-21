import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Access from '../components/Access';
import Home from '../pages/Home';
import bgVideo from '../assets/sky-bg-spinning-logo.mp4';
import bgVideoPlaceholder from '../assets/sky-bg-spinning-logo.png';
import styles from '../styles/pages/Landing.module.scss';

export default function Landing() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [access, setAccess] = useState(false);
  const correctPasscode = "DICE";
  const wrapperRef = useRef(null);
  const landingRef = useRef(null);

  const handleClick = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.transform = `rotateY(-90deg)`;
    }
  }

  return (
    <div className={`${styles.wrapper} relative`} ref={wrapperRef}>
      <div className={`${styles.main}`} ref={landingRef}>
        <button onClick={handleClick} className={`w-full`}>
          {isMobile && (
            <div className={`${styles.mobile_img_wrapper} m-0 w-full flex items-center justify-center`}>
            <img src={'/assets/logo.gif'} alt="sky parlor spinning logo" />
            </div>
          )}

          {!isMobile && (
            <div
              className="object-cover m-0 h-screen w-full"
              dangerouslySetInnerHTML={{
                __html: `
                  <video id="landing-video" class="object-cover m-0 h-screen w-full" autoplay loop muted playsinline poster=${bgVideoPlaceholder}>
                    <source src=${bgVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>`,
              }}
            />
          )}
        </button>
        <div className={`${styles.label} absolute w-full px-4 top-0 right-0 flex items-center justify-between z-20"`}>
          <Link to="/admin" className="underline text-xs">Admin</Link>
          <button
            onClick={handleClick}
            className="underline cursor-pointer text-xs md:text-sm"
          >
            Click anywhere to continue
          </button>
        </div>
      </div>
      <div className={styles.access}>
        <Access
          correctPasscode={correctPasscode}
          setAccess={setAccess}
          wrapperRef={wrapperRef}
          landingRef={landingRef}
        />
      </div>
      <div className={styles.home}>
        <Home access={access} />
      </div>
    </div>
  );
};

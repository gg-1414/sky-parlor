import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Access from '../components/Access';
import Home from '../pages/Home';
import LandingVideo from '../components/LandingVideo';
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
              <img
                src={'/assets/sky-bg-mobile.png'}
                alt="sky background"
                className="absolute w-full h-screen cover"
              />
              <img
                src={'/assets/logo.gif'}
                alt="sky parlor spinning logo"
                className={`${styles.logo} absolute z-20`}
              />
            </div>
          )}

          {!isMobile && (
            <LandingVideo/>
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

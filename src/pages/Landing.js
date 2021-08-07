import { Link } from 'react-router-dom';
import bgVideo from '../assets/sky-bg-spinning-logo.mp4';
import styles from '../styles/pages/Landing.module.scss';

export default function Landing() {
  return (
    <div className="relative">
      <Link to="/home">
        <video 
          src={bgVideo} 
          autoPlay 
          muted
          loop
          className="object-cover m-0 h-screen w-full"
        />
      </Link>
      <div className={`${styles.label} absolute w-6/12 px-4 bottom-0 right-0 flex items-center justify-center z-20"`}>
        <Link to="/home" className="underline cursor-pointer text-xs md:text-sm">Click anywhere to continue</Link>
      </div>
    </div>
  );
}

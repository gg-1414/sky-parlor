import { Link } from 'react-router-dom';
import bgVideo from '../assets/sky-bg-spinning-logo.mp4';
import styles from '../styles/pages/Landing.module.scss';

export default function Landing() {
  if (localStorage.getItem('sp_shopify_product')) {
    localStorage.removeItem('sp_shopify_product');
  }
  
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
      <div className={`${styles.label} absolute w-full px-4 top-0 right-0 flex items-center justify-center z-20"`}>
        <Link to="/home" className="underline cursor-pointer text-xs md:text-sm">Click anywhere to continue</Link>
      </div>
    </div>
  );
}

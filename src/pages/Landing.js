import { Link } from 'react-router-dom';
import bgVideo from '../assets/sky-bg-spinning-logo.mp4'

export default function Landing() {
  return (
    <div className="Landing">
      <Link to="/home">
        <video src={bgVideo} autoPlay muted />
      </Link>

      <style jsx>{`
        video {
          height: 100vh;
          object-fit: cover;
          margin: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

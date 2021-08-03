import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="Landing">
      <Link to="/home">
        I am the landing page. Click me.
      </Link>
    </div>
  );
}

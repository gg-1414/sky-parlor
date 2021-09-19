import { Link } from 'react-router-dom';
import Cube from './Cube';
import styles from '../styles/components/Header.module.scss';

const Logo = () => {
  return (
    <Link to="/home">
      <img
        src={'/assets/logo.gif'}
        alt="sky parlor spinning logo"
        className={`${styles.logo} m-auto fixed -right-1 md:right-6 top-1 md:top-0 z-10`}
      />
    </Link>
  );
};

export default function Header({ checkout, handleCartToggle }) {
  if (!checkout) {
    return (
      <Logo />
    )
  }
  else {
    return (
      <>
        <button className="fixed top-2 -left-8 z-20 md:left-0" onClick={handleCartToggle}>
          <Cube />
        </button>
        <Logo />
      </>
    )
  }
}

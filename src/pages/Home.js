import logo from '../assets/logo.gif';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.Home}>
      <img className={styles.logo} src={logo} alt="sky parlor spinning logo" />
    </div>
  )
}

// import { Link } from 'react-router-dom';
import styles from '../styles/pages/Admin.module.scss';
import logoGif from '../assets/logo.gif';

export default function AdminLogin({ login }) {
  async function onSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await login(email, password);
      console.log('res',res)
    } catch (err) {
      console.error("error signing in: ", err)
    }
  }

  return (
    <div className={styles.admin}>
      <img src={logoGif} alt="sky parlor logo" className={`${styles.logo} relative`} />
      <form onSubmit={onSubmit} className={`${styles.form} ${styles.trying_to_login} relative p-6`}>
        <h1 className={`text-2xl`}>Login</h1>
        <input 
          type="text"
          placeholder="Email"
          required
          name="email"
          className={`w-full p-4 mt-4 outline-none`}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          className={`w-full p-4 mt-4 outline-none`}
        />
        <button type="submit" className="mt-4">Submit</button>
      </form>

      <a href="/" className="relative">
        <i class="fa fa-arrow-left pr-4" />
        Back to the main site
      </a>
    </div>
  );
};

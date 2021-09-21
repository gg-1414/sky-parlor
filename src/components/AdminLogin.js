import { useState } from 'react';
import styles from '../styles/pages/Admin.module.scss';

export default function AdminLogin({ login }) {
  const [errorMessage, setErrorMessage] = useState('');

  async function onSubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await login(email, password);
    } catch (err) {
      console.error("Error signing in: ", err)
      setErrorMessage(`*${err.message}`);
    }
  }

  return (
    <div className={styles.admin}>
      <img src={'/assets/logo.gif'} alt="sky parlor logo" className={`${styles.logo} relative`} />
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

      {errorMessage
        ? <div className="transition duration-300 w-full p-2 text-center text-red-500 relative mb-4">{errorMessage}</div> 
        : null
      }

      <a href="/" className="relative">
        <i className="fa fa-arrow-left pr-4" />
        Back to the main site
      </a>
    </div>
  );
};

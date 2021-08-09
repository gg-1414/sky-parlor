import { AuthContext, AuthProvider } from '../context/AuthContext';
import AdminLogin from '../components/AdminLogin';
import SoundcloudForm from '../components/SoundcloudForm';
import styles from '../styles/pages/Admin.module.scss';

export default function Admin() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {({ authUser, loading, error, login, logout }) => {
          console.log('authUser', authUser, 'loading', loading, 'error',error)
          if (!authUser && !loading && !error) {
            return (
              <AdminLogin login={login} />
            )
          } else if (authUser && !loading && !error) {
            return (
              <div className={`${styles.admin} relative`}>
                <button onClick={logout} className={`${styles.logout_btn} mt-14`}>Logout</button>
                <SoundcloudForm />
              </div>
            )
          }
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

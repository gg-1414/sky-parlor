import { AuthContext, AuthProvider } from '../context/AuthContext';
import AdminLogin from '../components/AdminLogin';
import AdminLogout from '../components/AdminLogout';
import SoundcloudForm from '../components/SoundcloudForm';

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
              <div className="">
                <AdminLogout logout={logout} />
                <SoundcloudForm />
              </div>
            )
          }
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  )
}

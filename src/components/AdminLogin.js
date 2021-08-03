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
    <form onSubmit={onSubmit}>
      <h1>Login</h1>
      <input 
        type="text"
        placeholder="Email"
        required
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        required
        name="password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

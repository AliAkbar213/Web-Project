import { useContext, useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from "./AuthContext"


function Login() {

  const navigate = useNavigate()

  const { updateUser } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()
    console.log(data);

    if (!response.ok) {
      setError(data.err)
    } else {
      updateUser(data)
      navigate('/profile')
    }
  }

  return (
    <div className="login">
      <h1 className="login-title">Login in</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <label> email </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label> password </label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        {!loading && <button type="submit" className="login-btn"> Login </button>}
      </form>
      {error && <p className="login-error">{error}</p>}
      <p>Don't have an Account?</p>
      <NavLink to="/Signup" className="login-link">Sign up</NavLink>
    </div>
  )
}

export default Login
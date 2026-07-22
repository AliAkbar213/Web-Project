import { useContext, useState } from "react"
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from "./AuthContext"
import "./styles/Login.css"


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
      console.log("not okay");
      
    } else {
      console.log("okay");
      updateUser(data)
      navigate('/profile')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">

        <h1 className="login-title">Login</h1>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <label className="login-label">Email</label>
          <input
            className="login-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label">Password</label>
          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!loading &&
            <button
              type="submit"
              className="login-submit-btn"
            >
              Login
            </button>
          }

          {error &&
            <p className="login-error">
              {error}
            </p>
          }

        </form>

        <div className="login-footer">
          <p className="login-footer-text">
            Don't have an account?
          </p>

          <NavLink
            to="/signup"
            className="login-signup-link"
          >
            Sign Up
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Login
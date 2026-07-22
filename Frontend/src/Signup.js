import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"
import "./styles/Signup.css"



function Signup() {

  const navigate = useNavigate()
  const { updateUser } = useContext(AuthContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password })
    })

    const data = await response.json()

    if (!response.ok) {
      setError(data.err)
      setLoading(false)
    } else {
      updateUser({ name, email, password })
      navigate('/profile')
    }
  }

  return (
    <div className="signup-container">

      <div className="signup-card">

        <h1 className="signup-title">Create Account</h1>

        <form className="signup-form" onSubmit={handleSubmit}>

          <label className="signup-label">Name</label>
          <input
            className="signup-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="signup-label">Email</label>
          <input
            className="signup-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="signup-label">Password</label>
          <input
            className="signup-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!loading &&
            <button
              type="submit"
              className="signup-submit-btn"
            >
              Sign Up
            </button>
          }

          {error &&
            <p className="signup-error">
              {error}
            </p>
          }

        </form>

      </div>

    </div>
  )
}

export default Signup
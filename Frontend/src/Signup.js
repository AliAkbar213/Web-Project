import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"


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
    <div className="signup">
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label> name </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label> email </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label> password </label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        {!loading && <button type="submit" className="signup-btn"> Sign up </button>}
        {error && <p className="signup-error">{error}</p>}
      </form>
    </div>
  )
}

export default Signup
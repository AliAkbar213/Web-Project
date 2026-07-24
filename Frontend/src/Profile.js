import { useContext } from "react"
import { AuthContext } from "./Contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import "./styles/Profile.css"


function Profile() {

  const navigate = useNavigate()

  const { user, updateUser } = useContext(AuthContext)
  console.log(user);


  const handleLogout = async () => {
    console.log("logging out ");
    await fetch(`${process.env.REACT_APP_API_URL}/api/user/logout`, { credentials: "include" })
    updateUser(null)
    navigate('/login')
  }

  return (
    <div className="profile-container">
      {user &&
        <div className="profile-card">
          <h1 className="profile-title">Profile</h1>

          <div className="profile-info">
            <p className="profile-label">Name</p>
            <p className="profile-value">{user.name}</p>
          </div>

          <div className="profile-info">
            <p className="profile-label">Email</p>
            <p className="profile-value">{user.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="profile-logout-btn"
          >
            Log Out
          </button>
        </div>
      }

      {!user &&
        <div className="profile-guest-card">
          <h2 className="profile-guest-title">Guest Account</h2>
          <p className="profile-guest-text">
            You are currently browsing as a guest.
          </p>
        </div>
      }
    </div>
  )
}

export default Profile
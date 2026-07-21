import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom";


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
    <div className="profile">
      {user &&
        <div className="profile-user">
          <p className="profile-title">profile</p>
          <p className="profile-name-lable">name :</p>
          <p className="profile-name">{user.name}</p>
          <p className="profile-email-lable">email :</p>
          <p className="profile-email">{user.email}</p>
          <button onClick={handleLogout} className="profile-logout">Log out</button>
        </div>}
      {!user &&
        <div className="profile-guest">
          <h2>Guest Account</h2>
        </div>
      }
    </div>
  )
}

export default Profile
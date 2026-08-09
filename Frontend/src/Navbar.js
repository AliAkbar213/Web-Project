import { NavLink } from 'react-router-dom'
import "./styles/Navbar.css"
import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from './Contexts/AuthContext';



function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext)

  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/products?q=${search}`)
    setSearch("")
  }

  return (
    <nav className="navbar">
      <h1 className='heading'>Phonix</h1>
      <form onSubmit={handleSubmit} className="search-bar">
        <label className="search"> Search: </label>
        <input type="text" className="input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." />
      </form>

      <div className="links">
        <NavLink className='link' to="/">Home</NavLink>
        <NavLink className='link' to="/products">Products</NavLink>
        {!user && <NavLink className='link' to="/login">Login</NavLink>}
        {user && <NavLink className='link' to="/profile">Profile</NavLink>}
        <NavLink className='link' to="/cart">Cart</NavLink>
      </div>
      {/* {!isOpen && <button className="cart-btn" onClick={() => { setIsOpen(true) }}><img src={image} alt="Cart" className='cart-icon' /></button>}
      <CartDrawer isOpen={isOpen} closeDrawer={() => { setIsOpen(false) }} /> */}
    </nav>
  );
}

export default Navbar
import { NavLink } from 'react-router-dom'
import "./styles/Navbar.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Navbar(){

    const navigate = useNavigate();
    const [search, setSearch] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/products?q=${search}`)
        setSearch("")
    }

    return (
        <nav className="navbar">
            <h1 className='heading'>Tech Store</h1>

            <form onSubmit={handleSubmit} className="search-bar">
                <label className="search"> Search: </label>
                <input type="text" className="input" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." />
            </form>

            <div className="links">
                <NavLink className='link' to="/">Home</NavLink>
                <NavLink className='link' to="/products">Products</NavLink>
                <NavLink className='link' to="/category">Categories</NavLink>
            </div>
        </nav>
    );
}

export default Navbar
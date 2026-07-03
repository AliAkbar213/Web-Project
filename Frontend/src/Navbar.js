import { NavLink } from 'react-router-dom'
import "./styles/Navbar.css"

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className='heading'>Tech Store</h1>
            <div className="links">
                <NavLink className='link' to="/">Home   </NavLink>
                <NavLink className='link' to="/products">Products</NavLink>
            </div>
        </nav>
    );
}

export default Navbar
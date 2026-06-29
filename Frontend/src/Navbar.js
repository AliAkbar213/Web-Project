import { NavLink } from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className='heading'>Tech Store</h1>
            <div className="links">
                <NavLink className='link' to="/">Home   </NavLink><br />
                <NavLink className='link' to="/products">Products</NavLink>
                {/* <NavLink className='link' to="/create">Add Product</NavLink> */}
            </div>
        </nav>
    );
}

export default Navbar
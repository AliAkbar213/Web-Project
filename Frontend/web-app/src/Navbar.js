import { NavLink } from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar">
            <h1 className='heading'>Groceries</h1>
            <div className="links">
                <NavLink className='link' to="/">Home React</NavLink>
                <NavLink className='link' to="/Products">Products React</NavLink>
            </div>
        </nav>
    );
}

export default Navbar
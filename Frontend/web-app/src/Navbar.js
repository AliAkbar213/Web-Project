import { Link } from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar">
            <h1>Groceries</h1>
            <div className="links">
                <Link to="/">Home React</Link><br />
                <Link to="/Products">Products React</Link>
            </div>
        </nav>
    );
}

export default Navbar
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import "./styles/Products.css"

function Products() {

    const {data, loading, error} = useFetch(`${process.env.REACT_APP_API_URL}/api/products`);
    
    return (
        <div className="container">
            <h2 className="title">products</h2>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            {data.map((item) => (
                <Link to={`/products/${item.id}`} key={item.id} className="product-link">
                <div className="product-card">
                    <h3 className="name">{item.name}</h3>
                    <h5 className="brand">{item.brand}</h5>
                    <h4 className="price">{item.price}</h4>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default Products
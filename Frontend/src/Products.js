import useFetch from "./useFetch";
import { Link, useSearchParams } from "react-router-dom";
import "./styles/Products.css"

function Products() {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("q") || ""
    const url = process.env.REACT_APP_API_URL || "http://localhost:5000"
    const {data, loading, error} = useFetch(`${url}/api/products?q=${query}`);
    
    return (
        <div className="container">
            <h1 className="title">{query && `Showing results for: ${query}`}</h1>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            <div className="products-grid">
                {data.map((item) => (
                    <Link to={`/products/${item.id}`} key={item.id} className="product-link">
                        <div className="product-card">
                            <h2 className="name">{item.name}</h2>
                            <p className="brand">{item.brand}</p>
                            <p className="price">{item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Products
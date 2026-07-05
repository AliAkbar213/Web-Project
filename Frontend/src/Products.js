import useFetch from "./useFetch";
import { Link, redirect, useNavigate, useSearchParams } from "react-router-dom";
import "./styles/Products.css"
import { useState } from "react";

function Products() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()
    const [search, setSearch] = useState("")
    const query = searchParams.get("q") || ""
    const url = process.env.REACT_APP_API_URL || "http://localhost:5000"
    const {data, loading, error} = useFetch(`${url}/api/products?q=${query}`);

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`?q=${search}`)
    }
    
    return (
        <div className="container">
            <h2 className="title">products</h2>
            <form action="" onSubmit={handleSubmit}>
                <label> Search: </label>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
            </form>
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
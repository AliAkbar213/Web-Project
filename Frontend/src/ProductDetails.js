import useFetch from "./useFetch";
import { useParams } from 'react-router-dom'
import "./styles/ProductDetails.css"

function ProductDetails() {

    const { id } = useParams();
    const url = process.env.REACT_APP_API_URL || "http://localhost:5000"
    const { data, loading, error } = useFetch(`${url}/api/products/${id}`);
    const item = data
    console.log(item);


    return (
        <div className="details-container">
            {error && <div className="details-error">{error}</div>}
            {loading && <div className="details-loading">Loading...</div>}
            <div className="details-product" >
                <h2 className="details-name">{item.name}</h2>
                <h2 className="details-brand">{item.brand}</h2>
                <h2 className="details-desc">{item.description}</h2>
                <h2 className="details-price">{item.price}</h2>
                <h2 className="details-stock">In Stock: {item.stock_quantity}</h2>

                <h1 className="details-err">{item.err}</h1>
            </div>
        </div>
    )
}

export default ProductDetails
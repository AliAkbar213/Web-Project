import useFetch from "./useFetch";
import { useParams } from 'react-router-dom'
import "./styles/ProductDetails.css"

require("dotenv").config()

function ProductDetails(){
    
    const {id} = useParams();
    const {data, loading, error} = useFetch(`${process.env.API_URL}/api/products/${id}`);
    const item = data
    console.log(item);
    

    return(
        <div className="container">
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            <div className="product" >
                <h2 className="name">{item.name}</h2>
                <h2 className="brand">{item.brand}</h2>
                <h2 className="desc">{item.description}</h2>
                <h2 className="price">{item.price}</h2>
                <h2 className="stock">In Stock: {item.stock_quantity}</h2>

                <h1 className="err">{item.err}</h1>
            </div>
        </div>
    )
}

export default ProductDetails
import useFetch from "./useFetch";
import { useParams } from 'react-router-dom'

function ProductDetails(){
    
    const {id} = useParams();
    const {data, loading, error} = useFetch(`/products/${id}`);
    const item = data

    return(
        <div className="product-details-container">
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            <div className="product-details" key={item.id}>
                <h3 className='name'> {item.name} </h3>
                <p className='brand'> {item.category} </p>
                <p className='price'> {item.price} </p>
            </div>
        </div>
    )
}

export default ProductDetails
import useFetch from "./useFetch";
import { useParams } from 'react-router-dom'
import "./styles/ProductDetails.css"
import { useContext } from "react";
import { CartContext } from "./Contexts/CartContext";

function ProductDetails() {
  const { IncreaseCart, decreaseCart, itemInCart, cart } = useContext(CartContext)
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
        {!(itemInCart(item.id)) && <button onClick={() => { IncreaseCart(item.id, item.name, item.price); console.log(cart); }} className="products-add-btn">Add To Cart</button>}
        {itemInCart(item.id) &&
          <div className="products-buttons">
            <button onClick={() => { IncreaseCart(item.id); console.log(cart); }} className="products-inc-btn">+</button>
            <p className="products-quantity">In Cart: {cart.find((cartItem) => cartItem.id === item.id).quantity}</p>
            <button onClick={() => { decreaseCart(item.id) }} className="products-dec-btn">-</button>
          </div>}

        <h1 className="details-err">{item.err}</h1>
      </div>
    </div>
  )
}

export default ProductDetails
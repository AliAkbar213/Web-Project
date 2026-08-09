import { useContext} from "react";
import { CartContext } from "./Contexts/CartContext";
import "./styles/Cart.css"

export function Cart() {
  const { cart, IncreaseCart, decreaseCart, removeCart, deleteCart } = useContext(CartContext)

  // const [total, setTotal] = useState(0)

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-container">
        <header className="cart-header">
          <h2 className="cart-title">Shopping Cart</h2>
        </header>
        <p className="cart-empty-msg">Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className='cart-header'>
        <p className="cart-title">Shopping Cart</p>
        <button className="cart-btn-clear" onClick={deleteCart}>Empty Cart</button>
      </div>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <p className="cart-item-title">{item.name}</p>
              <p className='cart-item-price'>{item.price}</p>
            </div>
            <div className="cart-item-controls">
              <div className="cart-item-quantity-group">
                <button onClick={() => { decreaseCart(item.id) }} className="cart-item-btn-dec">-</button>
                <p className="cart-item-quantity">{item.quantity}</p>
                <button onClick={() => { IncreaseCart(item.id) }} className="cart-item-btn-inc">+</button>
              </div>
              <button className="cart-remove-item-btn" onClick={() => removeCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div>
          {/* <h3>Total Price: ${ getTotal() }</h3> */}
        </div>
      </div>
    </div>
  )
}
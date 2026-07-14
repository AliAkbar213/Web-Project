import { useContext } from "react";
import { CartContext } from "./CartContext";
import './styles/CartDrawer.css'

function Cart({ isOpen, closeDrawer }) {
  const { cart, IncreaseCart, decreaseCart, removeCart, deleteCart } = useContext(CartContext)

  return (
    <div className="cart-shopping-cart">
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={closeDrawer}
        />
      )}
      <div className={isOpen ? "cart-open" : "cart-close"}>
        <div className='header'>
          <p>Shopping Cart</p>
          <button className="cart-empty-btn" onClick={deleteCart}>empty</button>
          <button className="cart-close-btn" onClick={closeDrawer}>✕</button>
        </div>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-name">
              <p>{item.name}</p>
            </div>
            <div className="cart-item-details">
              <p className='item-price'>{item.price}</p>
              <p className='item-quantity'>{item.quantity}x</p>
            </div>
            <div className="cart-buttons">
              <button onClick={() => { IncreaseCart(item.id); console.log(cart); }} className="cart-inc-btn">+</button>
              <p className="cart-quantity">{cart.find((cartItem) => cartItem.id === item.id).quantity}</p>
              <button onClick={() => { decreaseCart(item.id) }} className="cart-dec-btn">-</button>
              <button className="cart-remove-item-btn" onClick={() => removeCart(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <button className="cart-link">Go To Cart</button>
      </div>
    </div>
  )
}

export default Cart
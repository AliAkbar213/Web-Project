import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const IncreaseCart = (id, name, price) => {
        setCart(prevCart => {
            const itemExists = prevCart.find(item => item.id === id)
            if (itemExists) {
                return prevCart.map(item => {
                    if (item.id === id) { return { ...item, quantity: item.quantity + 1 } }
                    else { return item }
                })
            } else { return [...prevCart, { id: id,name : name, price : price, quantity: 1 }] }
        })
    }

    const decreaseCart = (id) => {
        setCart(prevCart => {
            const itemExists = prevCart.find(item => item.id === id)
            if (!itemExists) {
                return prevCart
            }
            if (itemExists.quantity === 1) {
                return prevCart.filter(item => item.id !== id)
            } else {
                return prevCart.map(item => {
                    if (item.id === id) { return { ...item, quantity: item.quantity - 1 } }
                    else { return item }
                })
            }
        })
    }

    const itemInCart = id => cart.some(item => item.id === id);

    const removeCart = (id) => {
        setCart(prevCart => {
            return prevCart.filter(item => item.id !== id)
        })
    }

    const deleteCart = () => {
        setCart([])
    }

    // const getTotal =() => {
    //     const sum = 0
    //     for (const i of cart){
    //         i.price += sum
    //     }
    //     return sum
    // }


    return (
        <CartContext.Provider value={{ IncreaseCart, decreaseCart, itemInCart, removeCart, deleteCart, cart }}>
            {children}
        </CartContext.Provider>
    )
}
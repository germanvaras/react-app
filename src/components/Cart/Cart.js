import CartItem from "../CartItems/CartItem"
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext';
import { Link } from "react-router-dom"
import "./Cart.css"

function Cart(id) {
    const { cart, addToCart, removeItem, removeAll, totalPrice } = useContext(cartContext);
    function removeItemCart() {
        removeItem(id)
    }
    if (cart.length === 0) {
        return (
            <div>
                <h2>El Carrito esta Vacio</h2>
                <Link  className="linkCart" to={"/"}>Volver al Inicio</Link>
            </div>
        )

    }
    else {
        return (
            <>
                {cart.map((item) => {
                    return (
                        <CartItem
                            key={item.id + item.name}
                            img={item.img}
                            name={item.name}
                            price={item.price * item.amount}
                            amount={item.amount}
                            removeItemCart={removeItemCart}
                        />

                    )
                })}
                <h2>{totalPrice()}</h2>
                <button onClick={removeAll}> Vaciar Carrito </button>
            </>
        )
    }
}

export default Cart
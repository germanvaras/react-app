import CartItem from "../CartItems/CartItem"
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext';

function Cart(id) {
    const { cart, addToCart, removeItem, removeAll } = useContext(cartContext);
    function removeItemCart(){
        removeItem(id)
    }
    return (
        cart.map((item) => {
            return (
                <>
                    <CartItem
                        key={item.id + item.name }
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        amount={item.amount}
                        removeItemCart= {removeItemCart}
                    />
                </>
            )
        })
    )
}

export default Cart
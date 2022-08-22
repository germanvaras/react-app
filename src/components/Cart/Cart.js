import CartItem from "../CartItems/CartItem"
import ItemData from "../../data/data";
import { useContext } from 'react'
import { cartContext } from '../../store/cartContext';
import { Link } from "react-router-dom"
import "./Cart.css"

function Cart(id) {
    const { cart, removeItem, removeAll, totalPrice, totalAmount } = useContext(cartContext);
    function removeItemCart() {
        removeItem(id)
    }
    if (cart.length === 0) {
        return (
            <div>
                <h2>El Carrito esta Vacio</h2>
                <Link className="linkCart" to={"/"}>Volver al Inicio</Link>
            </div>
        )
    }
    else {
        return (
            <main className="mainCart">
                <section className="sectionCartItem">
                    {cart.map((item) => {
                        return (
                            <CartItem
                                key={item.id + item.name}
                                img={item.img}
                                name={item.name}
                                price={item.price * item.amount}
                                amount={item.amount }
                                stock={item.stock - item.amount}
                                removeItemCart={removeItemCart}
                            />
                        )
                    })}
                    <button className="cartDeleteAll" onClick={removeAll}> Vaciar Carrito </button>
                </section>
                <section className="cartResume">      
                        <h1 className="titleResume">Resumen del Pedido</h1>
                        <h3 className="resume">Cantidad de Remeras: {totalAmount()} x ${ItemData[0].price}</h3>
                        <h3 className="resume">Subtotal: ${totalPrice()}</h3>
                        <h3 className="resume">IVA(21%): ${totalPrice() * 0.21}</h3>
                        <h3 className="resume">Envío: Gratuito</h3>
                        <h2 className="totalResume">Total: $ {totalPrice() * 1.21}</h2>
                        <div className="containerButtonsResume">
                        <Link to={"/"}><button className="cartResumeButtons">Seguir Comprando </button></Link>
                        <Link to={"/checkout"}><button className="cartResumeButtons">Finalizar Compra </button></Link>
                        </div>
                        <img  className="paymentResume" src="https://res.cloudinary.com/dveku4pvl/image/upload/v1661110744/mercadopago_logos1_rld5ya.jpg" alt="Medios de Pago"></img>
                </section>
            </main>
        )
    }
}

export default Cart
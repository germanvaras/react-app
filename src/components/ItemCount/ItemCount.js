import React from 'react'
import "./ItemCount.css"
import Swal from 'sweetalert2'
function ItemCount({ stock, min, product }) {
    const [amount, setCantidad] = React.useState(1)
    const [text, setText] = React.useState("Elije la cantidad")
    const [classText, setClassText] = React.useState("text-stock")
    function countPlus() {
        if (amount < stock) {
            setText("Elije la cantidad") 
            setClassText("text-stock")
            setCantidad(amount + 1) 
        }
        else {
            setText("No hay más stock") 
            setClassText("text-error");
        }
    }
    function countSub() {
        if (amount > min) {
            setText("Elije la cantidad") 
            setClassText("text-stock")
            setCantidad(amount - 1)
        }
        else {
            setText("No se puede agregar menos de un producto") 
            setClassText("text-error")
        }
    }
    function addToCart() {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto Agregado',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <section className='section-products'>
            <div className='product-container'>
                <h2 className='product-name'>{product}</h2>
                <p className={classText}>{text}</p>
                <div className='product-display'>
                    <button className='product-buttonCount' onClick={countSub}>-</button>
                    <h2 className='product-buy'>{amount}</h2>
                    <button className='product-buttonCount' onClick={countPlus}>+</button>
                </div>
                <button onClick={addToCart} className='product-addCart'>Agregar al Carrito</button>
            </div>

        </section>
    )
}

export default ItemCount
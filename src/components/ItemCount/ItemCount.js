import React from 'react'
import "./ItemCount.css"

function ItemCount({ stock, min, product, addToCart }) {
    const [amount, setAmount] = React.useState(1)
    const [text, setText] = React.useState("Elije la cantidad")
    const [classText, setClassText] = React.useState("text-stock")
    function countPlus() {
        if (amount < stock) {
            setText("Elije la cantidad")
            setClassText("text-stock")
            setAmount(amount + 1)
        }
        else {
            setText(`No hay más de ${stock} unidades en stock`)
            setClassText("text-error");
        }
    }
    function countSub() {
        if (amount > min) {
            setText("Elije la cantidad")
            setClassText("text-stock")
            setAmount(amount - 1)
        }
        else {
            setText("No se puede agregar menos de un producto")
            setClassText("text-error")
        }
    }
    return (
        <div className='count-container'>
            <p className={classText}>{text}</p>
            <div className='product-display'>
                <div className='product-amount'>
                    <h2 className='product-buy datail-buy'>{amount}</h2>
                </div>
                <div className='products-buttonPlus'>
                    <button className='product-buttonCount' onClick={countPlus}>+</button>   
                </div>
                <div className='products-buttonSub'>
                    <button className='product-buttonCount' onClick={countSub}>-</button>
                </div>
            </div>
            <button onClick={() => addToCart(amount)} className='product-addCart'>Agregar al Carrito</button>
        </div>
    )
}

export default ItemCount
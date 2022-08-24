import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./CartItem.css"
import ItemCount from '../ItemCount/ItemCount'
function CartItem({ img, name, price, amount, removeItemCart, id, stock }) {
  return (
    <div className='itemCart-container'>
      <img className='cartImg' src={img} alt={`imagen de: ${name}`}></img>
      <div className='description-container'>
        <h2 className='cartName'>{name}</h2>
        <h3 className='cartAmount'>Cantidad: {amount}</h3>
        <h3 className='cartSubtotal'> Subtotal: ${price}</h3>
        <h3 className='cartStock'>Stock Disponible: {stock}</h3>
        <ItemCount min={amount} stock ={stock} id={id}/>
        <FontAwesomeIcon className='cartDeleteItem' onClick={() => removeItemCart(id)} icon={faTrashCan}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default CartItem
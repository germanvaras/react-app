import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
function CartItem({img,name,price,amount, removeItemCart,id, total}) {
  return (
    
    <div>
        <img src={img} alt={`imagen de: ${name}`}></img>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <h3>{amount}</h3>
        <h3>{total}</h3>
        <FontAwesomeIcon onClick={()=> removeItemCart(id)} icon={faTrashCan}></FontAwesomeIcon>
    </div>
  )
}

export default CartItem
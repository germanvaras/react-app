import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Swal from 'sweetalert2'
import './Item.css'
function Item({img,name,category,price,stock, id}) {
  function addToCart(amount) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: `Has agregado ${amount}, de ${name} al carrito`,
    showConfirmButton: false,
    timer: 1500
})
}
  return (
    <>
        <img className='itemImg' src= {img} alt ='Foto de remera'></img>
        <h2 className='itemName'>{name}</h2>
        <p className='itemCategory'>{category}</p>
        <p className='itemPrice'>${price}</p>
        <ItemCount stock={stock} min={1} addToCart= {addToCart}/>
    </>
  )
}

export default Item
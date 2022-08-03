import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import Swal from 'sweetalert2'
function ItemListContainer({greeting}) {
  function addToCart(amount, product) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: `Has agregado ${amount} unidades del producto ${product}`,
        showConfirmButton: false,
        timer: 1500
    })
}
  return (
    <main>
        <h1 className='greeting'>{greeting}</h1>
        <ItemCount  product ="Remera Nube" stock={5} min={1} addToCart ={addToCart}/>
    </main>
    
  )
}

export default ItemListContainer
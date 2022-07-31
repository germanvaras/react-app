import React from 'react'
import ItemCount from './ItemCount/ItemCount'
function ItemListContainer({greeting}) {
  return (
    <main>
        <h1 className='greeting'>{greeting}</h1>
        <ItemCount  product ="Remera Nube" stock={5} min={1}/>
    </main>
    
  )
}

export default ItemListContainer
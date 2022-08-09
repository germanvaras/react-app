import React, { useEffect, useState } from 'react'
import ItemData from '../../data/data';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'

function getProducto() {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve(ItemData)
    }, 2000);
  }))
}
function ItemListContainer() {
  const [data, setData] = useState([])
  useEffect(() => {
    getProducto().then(products => {
      setData(products)
    })
  }, [])

  return (
    <main>
      <>
        <section className='itemsContainer'>
          <ItemList data={data} />
        </section>
      </>
    </main>

  )
}




export default ItemListContainer
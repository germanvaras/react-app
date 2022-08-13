import React, { useEffect, useState } from 'react'
import ItemData from '../../data/data';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

function ItemListContainer() {
  const [data, setData] = useState([])
  const idCategory = useParams().category
  function getProducto() {
    return new Promise((resolve => {
      setTimeout(() => {
        resolve(ItemData)
      }, 2000);
    }))
  }
  useEffect(() => {
    getProducto().then(products => {
      let itemsFilter = ItemData.filter(element => element.category == idCategory)
      console.log(ItemData)
      if (idCategory === undefined) {
        setData(products)
      }
      else {
        setData(itemsFilter)
      }
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
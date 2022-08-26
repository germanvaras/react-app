import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import SpinerLoad from '../SpinerLoad/SpinerLoad';
import firestoreDB from '../../services/firebase';
import { getDocs, collection, query, where} from 'firebase/firestore';

function ItemListContainer() {
  const [data, setData] = useState([])
  const [greeting, setGreeting] = useState("")
  const idCategory = useParams().idCategory

  function getProducts() {
    return new Promise((resolve => {
      const productsCollections = collection(firestoreDB, "products")
      getDocs(productsCollections).then(snapshot => {
        const docsData = snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } })
        resolve(docsData)
        console.log(docsData)
      })
    }))
  }
  function getItemsFromDBbyIdCategory(idCategory) {
    return new Promise((resolve) => {
      const productsCollection = collection(firestoreDB, "products");
      const queryProducts = query(productsCollection, where("category", "==", idCategory))
      getDocs(queryProducts).then(snapshot => {
        const docsData = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        });
        resolve(docsData);
        console.log(docsData)
      });
    });
  };
  useEffect(() => {
    if (idCategory) {
      getItemsFromDBbyIdCategory(idCategory).then((resolve) => {
        setData(resolve)
        setGreeting(idCategory)
        
      });

    } else {
      getProducts().then((resolve) =>{
        setData(resolve)
        setGreeting("Todos Nuestras Remeras")
        
      });
    }
  }, [idCategory])

  return (
    <>
      {data.length === 0 ?
        <main className='spinnerMain'>
        <SpinerLoad />
        </main>
        :
        <main className='main, products'>
          <h1 className='greeting'>{greeting}</h1>
          <section className='itemsContainer'>
            <ItemList data={data} />
          </section>
        </main>
      }
    </>
  )

}

export default ItemListContainer
import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { cartContext } from '../../store/cartContext';
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import firestoreDB from "../../services/firebase";
function Checkout() {
  const { cart, totalPrice, removeAll } = useContext(cartContext)
  // Estado del comprador
  const [userBuyer, setUserBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  })
  // Estado de la orden de compra
  const [orderFirebase, setOrderFirebase] = useState({
    id: '',
    complete: false,
  });
// Informacion que se va almacernar en el estado de orden de compra
  const purchaseOrder = {
    buyer: { ...userBuyer },
    items: [...cart],
    total: totalPrice(),
    date: new Date(),
  };
// Cargar los datos a firebase
  async function handleSubmit(e) {
    e.preventDefault()
    const collectionRef = collection(firestoreDB, "orders");
    const order = await addDoc(collectionRef, purchaseOrder);
    setOrderFirebase({ id: order.id, complete: true });
    removeAll()
  }
// Funcion para resetear el formulario
  function handleReset() {
    setUserBuyer({
      name: "",
      email: "",
      phone: "",
    });
  }
// Funcion para setear los values de los imputs y guardarlos en el estado del comprador
  function inputChangeHandler(e) {
    const input = e.target;
    const value = input.value;
    const inputName = input.name;
    let copyUserData = {...userBuyer};
    copyUserData[inputName] = value;
    setUserBuyer(copyUserData);
  }
  if (orderFirebase.complete === true) {
  return(
    <main>
      <FontAwesomeIcon className="emptyCartFace" icon={faCircleCheck}/>
      <h1>Compra exitosa!</h1>
      <h2>Gracias por confiar en Sublime {userBuyer.name}</h2>
      <h3>Se : {userBuyer.email}</h3>
      <h3>El id de seguimiento de tu compra es: {orderFirebase.id}</h3>
      <Link to ={"/"}> <button>Seguir Comprando</button></Link>
    </main>
  )
  }
  else{
    return (
      <main>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlFor="name">Email</label>
          <input type="text" name='name' value={userBuyer.name} onChange={inputChangeHandler} placeholder='Tú Nombre' required></input>
          <label htmlFor="phone">Telefono</label>
          <input type="number" name='phone'value={userBuyer.phone} onChange={inputChangeHandler} placeholder='123456789' required></input>
          <label htmlFor="email">Email</label>
          <input type="email" name='email' value={userBuyer.email} onChange={inputChangeHandler} placeholder='ejemplo@ejemplo.com' required></input>
          <input type="submit" value='Comprar' ></input>
        </form>
      </main>
    )
  }
  }

export default Checkout
import React,{useState} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Swal from 'sweetalert2'
import {Link} from "react-router-dom"

function ItemDetail({data}) {
    const[countCart, setCountCart] = useState(0)
    function addToCart(amount) {
        setCountCart(amount)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Has agregado ${amount}, de ${data.name} al carrito`,
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <>  
        <section className='sectionDetail'>
            <div className='sectionContainer'>
                <div className='imgContainer'>
                    <img className='detailImg' src={data.img} alt='Foto de remera'></img>
                </div>
                <div className='detailContainer'>
                    <h3 className='detailCategory'>{data.category}</h3>
                    <h2 className='detailName'>{data.name}</h2>
                    <p className='detailDescription'>{data.description}</p>
                    <p className='detailPrice'>${data.price}</p>
                    {countCart === 0 ? 
                    <ItemCount stock={data.stock} min={1} addToCart={addToCart} /> : 
                    <Link className='showCart' to={"/cart"}>Ver Carrito</Link>}
                    <p className='detailStock'> Stock disponible: {data.stock} </p>
                    <Link  className='link-categoria' to={`/category/${data.category}`}>Volver a Categoría: {data.category}</Link>
                    <Link className='link-inicio' to={"/"}>Volver al inicio</Link>
                </div>
            </div>
        </section>
        </>
    )
}
export default ItemDetail
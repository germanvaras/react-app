import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import Swal from 'sweetalert2'

function ItemDetail({data}) {
    function addToCart(amount) {
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
                <div className='imgContainer'>
                    <img className='detailImg' src={data.img} alt='Foto de remera'></img>
                </div>
                <div className='detailContainer'>
                    <h3 className='detailCategory'>{data.category}</h3>
                    <h2 className='detailName'>{data.name}</h2>
                    <p className='detailDescription'>{data.description}</p>
                    <p className='detailPrice'>${data.price}</p>
                    <ItemCount stock={data.stock} min={1} addToCart={addToCart} />
                    <p className='detailStock'> Stock disponible: {data.stock} </p>
                </div>
            </section>
        </>
    )
}
export default ItemDetail
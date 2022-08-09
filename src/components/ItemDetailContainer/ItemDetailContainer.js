import React, { useEffect, useState } from "react"
import ItemData from '../../data/data';
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'

function getProducto() {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve(ItemData)
        }, 2000);
    }))
}
function ItemDetailContainer() {
    const [data, setData] = useState([])
    useEffect(() => {
        getProducto().then(products => {
            setData(products[0])
        })
    }, [])
    return (
        <main>
            <ItemDetail data={data} />
        </main>
    )
}
export default ItemDetailContainer
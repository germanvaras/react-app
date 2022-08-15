import React, { useEffect, useState } from "react"
import ItemData from '../../data/data';
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    const [data, setData] = useState({})
    const idUrl = useParams().id
    function getProducto() {
        return new Promise((resolve => {
            let findItem = ItemData.find((element) => element.id === Number(idUrl))
            setTimeout(() => {
                resolve(findItem)
            }, 2000);
        }))
    }
    useEffect(() => {
        getProducto().then(product => {
            setData(product)
        })
    }, [])
    return (
        <main>
            <ItemDetail data={data} />
        </main>
    )
}
export default ItemDetailContainer
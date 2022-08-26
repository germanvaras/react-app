import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import SpinerLoad from '../SpinerLoad/SpinerLoad';
import firestoreDB from "../../services/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
    const [data, setData] = useState([])
    const idUrl = useParams().id
    useEffect(() => {
        function getDetail(id) {
            return new Promise((resolve) => {
                const productosCollection = collection(firestoreDB, "products");
                const docRef = doc(productosCollection, id);
                getDoc(docRef).then(snapshot => {
                    resolve(
                        { ...snapshot.data(), id: snapshot.id }
                    )
                });
            })
        }
        getDetail(idUrl).then(product=>{
            setData(product)
        })
    }, [idUrl])

    return (
        <>
            { data.length === 0 ?
                <main className="spinnerMain">
                    <SpinerLoad />
                </main>
                :
                <main>
                    <ItemDetail data={data} />
                </main>
            }
        </>
    )
}
export default ItemDetailContainer
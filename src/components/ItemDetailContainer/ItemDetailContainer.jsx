import React, { useContext, useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import './style.css'
import { useParams } from 'react-router-dom'
import { getDoc, doc, getFirestore } from 'firebase/firestore'
import CartContext from '../../context/CartContext/CartContext'

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const {id}= useParams()
    const {addItem} = useContext(CartContext)

    const onAdd =(q)=>{
        addItem(item, q)
    }
useEffect(()=>{
    const db=getFirestore()
    const docRef=doc(db, "items", id)
    getDoc(docRef)
    .then((snapshot)=>{
        setItem({
            id: snapshot.id,
            ...snapshot.data()

        })
    })
},[])

    return (
        <div className='item-detail'>
            {
                <ItemDetail item={item} onAdd={onAdd}/>
            }
        </div>
    )
}

export default ItemDetailContainer
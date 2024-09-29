import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import './style.css'
import { useParams } from "react-router-dom";
import { getdocs, collection, getFirestore} from 'firebase/firestore'
import CartContext from "../../context/CartContext/CartContext";


const ItemListContainer=()=>{

    const[products,setProducts]= useState([])
    const {categoryId}= useParams()
    const contextlocal = useContext(CartContext)
    
    useEffect(()=>{
        const db= getFirestore()
        const itemCollection= collection(db, "items")
        getdocs(itemCollection)
        .then((Snapshot)=>{
            setProducts(
                Snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()}))
            )
        })
    }, [])


    return(
        <div className="container">
            <ItemList items={products}/>
        </div>
    )
}

export default ItemListContainer;
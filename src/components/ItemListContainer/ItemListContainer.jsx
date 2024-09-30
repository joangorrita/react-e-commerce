import React, { useContext, useEffect, useState } from "react";
import ItemList from "./ItemList";
import './style.css';
import { useParams } from "react-router-dom";
import { getDocs, collection, getFirestore, query, where } from 'firebase/firestore';
import CartContext from "../../context/CartContext/CartContext";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();
    const contextlocal = useContext(CartContext);
    console.log(contextlocal); // Debería mostrar el carrito y las funciones

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "items");

        const itemQuery = categoryId 
            ? query(itemCollection, where("category", "==", categoryId)) 
            : itemCollection;

        getDocs(itemQuery)
            .then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            })
            .catch((error) => {
                console.error("Error al obtener documentos: ", error);
            });
        
    }, [categoryId]); 

    return (
        <div className="container">
            <ItemList items={products} />
        </div>
    );
}

export default ItemListContainer;

import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ item }) => {
    return (
        <div key={item.id} className="card" >
            <img src={item.img} alt={item.name} />
            <p>Name: {item.name} </p>
            <p>Model: {item.model} </p>
            <p>Precio: {item.price} </p>
            <p>Stock: {item.stock} </p>
            <Link className='button' to={`/detail/${item.id}`}>Ver detalles</Link>
            </div>
    )
}

export default Item
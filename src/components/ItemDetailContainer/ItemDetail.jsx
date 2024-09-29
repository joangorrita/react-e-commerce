import React from 'react'
import Counter from '../Counter/Counter'

const ItemDetail = ({item, onAdd}) => {
    return (
        <>
        <img src={item.img} alt={item.name} />

        <div className='itemInfo'>
            <h3>{item.name}</h3>
            <p>model: {item.model} </p>
            <p className='stock' >Stock: {item.stock} </p>
            <p className='precio' >price {item.price} </p>
            <Counter onAdd= {onAdd}/>
        </div>
        </>
    )
}

export default ItemDetail
import React from 'react'
import item from './Item'

const ItemList = ({items}) => {
    return (
        <div className='item-list'>
            {items.map((el, i)=>(
                <Item key={i} item={el}/> ))}
        </div>

    )
}

export default ItemList
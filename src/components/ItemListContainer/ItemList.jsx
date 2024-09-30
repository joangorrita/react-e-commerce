import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    if (items.length === 0) {
        return <div>No hay productos disponibles.</div>;
    }

    return (
        <div className='item-list'>
            {items.map((el) => (
                <Item key={el.id} item={el} />
            ))}
        </div>
    );
}

export default ItemList;

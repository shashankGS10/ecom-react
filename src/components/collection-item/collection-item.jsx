import React from 'react'

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <div className='collection-item'>
        <div className='item-image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className='collection-foo'>
            <div></div>

        </div>
    </div>
)
export default CollectionItem;
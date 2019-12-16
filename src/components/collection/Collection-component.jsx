import React from 'react';
import './Collection-component.style.scss';
// import MediaCard from './Card'

const Collection = ({ title, items, ...props }) => (
    <div className='collection-view'>
        <h1 className='item-title'>{title.toUpperCase()}</h1>
        <div className='item-view'>{items.filter((item, index) => index < 4).map(item => (<div key={item.id}>
            {item.name}

        </div>
        ))}</div>

    </div>

)
export default Collection;
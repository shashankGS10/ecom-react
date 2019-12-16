import React, { Component } from 'react'
import SHOP_DATA from './Shopdata';
import Collection from '../../components/collection/Collection-component'

class ShopComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA

        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='Shop-page'>
                {collections.map((elem) => (
                    <Collection key={elem.id} {...elem}>
                        SHOP PAGE

                    </Collection>
                ))}
                SHOP PAGE
            </div>
        )
    }
}
export default ShopComponent;
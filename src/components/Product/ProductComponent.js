import React, { Component } from 'react';

import './Product.css';

class ProductComponent extends Component {

    render() {
        // {this.props.listofproducts.map((s, i) => {

        return(
            <div>
                <li>
                    <a href='#'>
                        product name
                    </a>
                </li>
            </div>
        )
        // })}

    }
}

export default ProductComponent

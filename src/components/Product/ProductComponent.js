import React, { Component } from 'react';

import './Product.css';

class ProductComponent extends Component {

    render() {
        return(
            <ul>
                {
                    this.props.products[this.props.pid].map((p, i) => {
                        return(
                            <li key={i}>
                                <a href={p.product_link} target='_blank'>
                                    {p.product_name}
                                </a>
                            </li>
                        )
                    })
                }

            </ul>
        )
        // })}

    }
}

export default ProductComponent

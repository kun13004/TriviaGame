import React, { Component } from 'react';

import './Product.css';

class ProductComponent extends Component {

    render() {
        console.log('this.props.products: ', this.props.products)
        return(
            <ul>
                {
                    this.props.products[this.props.pid].map((p, i) => {
                        console.log('p: ', p);
                        return(
                            <li>
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

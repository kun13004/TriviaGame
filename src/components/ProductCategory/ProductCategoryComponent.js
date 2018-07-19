import React, { Component } from 'react';
import './ProductCategory.css';
import ProductComponent from '../Product/ProductComponent'


class ProductCategoryComponent extends Component {
    render() {
        //some sort of loop
        return(
            <div>
                {this.props.categories.map((c, i) => {
                    return(
                        <div key={i} className='product-category'>
                            <h1>{c}</h1>
                            <div className='product-list-container'>
                                <ul>
                                    <ProductComponent/>
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ProductCategoryComponent

import React, { Component } from 'react';
import './ProductCategory.css';
import ProductComponent from '../Product/ProductComponent'


class ProductCategoryComponent extends Component {
    render() {
        //some sort of loop
        console.log('this.props.categories: ',this.props.categories)
        return(
            <div>
                {this.props.categories.map((cat, i) => {
                    return(
                        <div key={i} className='product-category'>
                            <h1>{cat.name}</h1>
                            <div className='product-list-container'>
                                <ul>
                                    <ProductComponent
                                        pid = {cat.id}
                                        products = {this.props.products}
                                    />
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

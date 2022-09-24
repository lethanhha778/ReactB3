import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderShoe = () => {
        return this.props.productsData.map((sneaker) => {
            return <div className="col-12 col-sm-6 col-lg-4 col-xl-3 pb-4" key={sneaker.id}>
                <ProductItem sneaker={sneaker} addToCart={this.props.addToCart} />
            </div>
        })
    }
    render() {
        return (
            <div className="row">
                {this.renderShoe()}
            </div>
        )
    }
}

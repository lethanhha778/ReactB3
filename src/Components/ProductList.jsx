import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  renderShoe = () => {
    return this.props.data.map((sneaker) => {
      return <div className="col-4 pb-4" key={sneaker.id}>
        <ProductItem sneaker={sneaker} setStateModal={this.props.setStateModal} />
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

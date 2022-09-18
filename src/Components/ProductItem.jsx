import React, { Component } from 'react'

export default class ProductItem extends Component {
 
  render() {
    let{sneaker,setStateModal} = this.props
    return (
      <div className="card" >
      <img src={sneaker.image} className="card-img-top" alt="..." />
      <div className="card-body">
          <h5 className="card-title">{sneaker.name}</h5>
          <p className="card-text fw-bold">{sneaker.price}<sup className='text-danger'>$</sup></p>
          <button onClick={() => setStateModal(sneaker)} className="btn btn-primary">Add To Card</button>
      </div>
  </div>
    )
  }
}

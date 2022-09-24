import React, { Component } from 'react'

export default class ProductItem extends Component {

    render() {
        let { sneaker, addToCart } = this.props
        return (
            <div>
                <div className="card" >
                    <img src={sneaker.image} className="card-img-top" style={{ cursor: 'pointer' }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{sneaker.name}</h5>
                        <p className="card-text fw-bold text-danger" style={{ cursor: 'pointer' }}>{sneaker.price}<sup>$</sup></p>
                        <p><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                        <button onClick={() => { addToCart(sneaker) }} className="custom-btn btn-3 add" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Add To Card</span></button>
                    </div>
                </div>
            </div>
        )
    }
}

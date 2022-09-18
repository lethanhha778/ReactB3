import React, { Component } from 'react'
import product from '../Data/dataShoe.json'
import Modal from './Modal'
import ProductList from './ProductList'
export default class ShoeStore extends Component {
    state={
       sneakerCurrent:{
         "id": 1,
         "name": "Adidas Prophere",
         "alias": "adidas-prophere",
         "price": 350,
         "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
         "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
         "quantity": 995,
         "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
       }
    }
    
    setStateModal = (sneaker) =>{
        this.setState({
           sneakerCurrent:sneaker
        })

    }
    render() {
        return (
            <div className=''>
                <h1 className='card-title fw-bold text-bg-primary text-white'>Shoes Shop</h1>
                <div className="container py-4">
                <div className="row">
                    <div className="col-2">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#!">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#!">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#modal">Details</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-10">
                        <ProductList data={product} setStateModal ={this.setStateModal} />
                        <Modal content={this.state.sneakerCurrent}/>
                    </div>
                </div>
                </div>
                

            </div>
        )
    }
}

import React, { Component } from 'react'
import product from '../Data/dataShoe.json'
import Modal from './Modal'
import ProductList from './ProductList'
export default class ShoeStore extends Component {
    state = {
        sneakerCurrent: {
        },
        isLogin: false
    }
    checkLog = ()=>{
        if(this.state.isLogin){
            return <p className='text-dark font-weight-bold mt-3'>Xin Chào Mentor</p>
        }
        return <button  className="custom-btn btn-3 login" type="submit" onClick={() => { 
         
            this.setState({
                isLogin: true  
            })

         }}><span> Login</span></button>

    }

    addToCart =(sneaker)=>{
        this.setState({
            sneakerCurrent:sneaker
        })
    }
    renderModal = () => {
        let {name,image,description,quantity,alias,shortDescription,price}= this.state.sneakerCurrent
            return <div className="row " id='modal' >
            <div className="col-3">
              <img style={{ width: "100%" }} src={image} alt="" />
            </div>
            <div className="col-9">
              <table className="table text-start">
                <thead>
                  <tr>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
                    <th scope="row" style={{ width: "100px" }}>Name:</th>
                    <td>{name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Prices:</th>
                    <td>{price}<sup>$</sup></td>
                  </tr>
                  <tr>
                    <th scope="row">Alias:</th>
                    <td>{alias}</td>
                  </tr>
                  <tr>
                    <th scope="row">Description:</th>
                    <td>{description}</td>
                  </tr>
                  <tr>
                    <th scope="row">Short Description:</th>
                    <td>{shortDescription}</td>
                  </tr>
                  <tr>
                    <th scope="row">Quantity:</th>
                    <td>{quantity}$</td>
                  </tr>   
                </tbody>
              </table>
            </div>
          </div>
    }

    render() {
        const styleNavA = {
            color: 'black',
        }
        return (
            <div >
                <nav className="navbar navbar-expand-lg shadow">
                    <div className="container-fluid mx-5">
                        <a className="navbar-brand" href="#!"><img src="https://www.adidas.com.vn/glass/react/74e64f2/assets/img/icon-adidas-logo.svg" alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#!" style={styleNavA} >Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#!" style={{ fontWeight: 'bold' }}>Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#!" style={styleNavA}>Details</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                {this.checkLog()}  
                                
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container-fluid  py-4">
                    <div className="row">
                        <div className="col-2">
                            <ul className="nav flex-column"  >
                                <li className="custom-btn btn-3 " >
                                    <a href="#!">Nam</a>
                                </li>
                                <li className="custom-btn btn-3">
                                    <a href="#!">Nữ</a>
                                </li>
                                <li className="custom-btn btn-3 ">
                                    <a href="#!">Trẻ Em</a>
                                </li>
                                <li className="custom-btn btn-3 ">
                                    <a href="#!">Thể Thao</a>
                                </li>
                                <li className="custom-btn btn-3 ">
                                    <a href="#!">Các Nhãn Hiệu</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-10" >
                            <ProductList data={product} addToCart={this.addToCart}/>
                            <Modal renderModal={this.renderModal} />
                        </div>


                    </div>
                </div>


            </div>
        )
    }
}

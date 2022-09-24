import React, { Component } from 'react'

export default class Modal extends Component {
    renderModal = () => {
        let {name,image,description,quantity,alias,shortDescription,price}= this.props.content
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
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl py-5">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h2 className='ml-5 text-center'>Chi Tiết Sản Phẩm</h2>
                            {this.renderModal()}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="custom-btn btn-3 add" data-bs-dismiss="modal"><span>Close</span></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

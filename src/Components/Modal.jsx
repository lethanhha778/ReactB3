import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    let { content } = this.props
    return (
      <div className="row py-5" id='modal'>
        <h2 className='text-bg-primary text-white mb-5' >Shoe Details</h2>
        <div className="col-3">
          <h2>{content.name}</h2>
          <img style={{ width: "100%" }} src={content.image} alt="" />
        </div>
        <div className="col-9">
          <table className="table text-start">
            <thead>
              <tr>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{ minWidth: "100px" }}>Name:</th>
                <td>{content.name}</td>
              </tr>
              <tr>
                <th scope="row">Prices:</th>
                <td>{content.price}<sup>$</sup></td>
              </tr>
              <tr>
                <th scope="row">Alias:</th>
                <td>{content.alias}</td>
              </tr>
              <tr>
                <th scope="row">Description:</th>
                <td>{content.description}</td>
              </tr>
              <tr>
                <th scope="row">Short Description:</th>
                <td>{content.shortDescription}</td>
              </tr>
              <tr>
                <th scope="row">Quantity:</th>
                <td>{content.quantity}</td>
              </tr>


            </tbody>
          </table>

        </div>
      </div>
    )
  }
}

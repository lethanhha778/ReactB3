import React, { Component } from 'react'

export default class Modal extends Component {
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
                            {this.props.renderModal()}
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

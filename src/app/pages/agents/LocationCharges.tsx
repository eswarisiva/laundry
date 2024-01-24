import {FC} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { KTSVG } from '../../../_metronic/helpers';

const LocationCharges : FC = () => {
    return (
        <>

        <PageTitle>LOCATION & CHARGES</PageTitle>
        <div className='card'>
            <div className='card-body bg-light'>
                <div className='d-flex align-items-center mb-8'>
                    <div className='col-md-3'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Area Name 1</span>
                                <span className='text-muted fw-semibold d-block'>Country Name / City Name</span>
                            </div>
                    </div>

                    <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>0 BHD</span>
                                <span className='text-muted fw-semibold d-block'>Min Order Amount</span>
                            </div>
                    </div>

                    <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>FREE</span>
                                <span className='text-muted fw-semibold d-block'>Delivery Charges</span>
                            </div>
                    </div>

                    <div className='col-md-3'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Service Available</span>
                                <div className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                </div>
                            </div>
                    </div>
        
                    <span  data-bs-toggle="modal" data-bs-target="#kt_modal_1" className='badge badge-warning fs-8 fw-bold'>Update Charges</span>
                </div>
            </div>   
        </div> 


        <div className="modal fade" tabIndex={-1} id="kt_modal_1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Area 1 <br /> <label style={{ fontSize: '0.75rem' }}>Country Name / City Name</label></h5>

                        <div
                            className="btn btn-icon btn-sm btn-primary ms-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <KTSVG
                                path="media/icons/duotune/arrows/arr061.svg"
                                className="svg-icon svg-icon-2x"
                            />
                        </div>
                    </div>
                    <div className="modal-body">
                        <h3 className="modal-title mb-4">Update Charges</h3>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Min Order Amount</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Amount'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fw-bold fs-6'>Type</label>

                            <div className='row col-lg-12'>
                                <div className='col-lg-6'>
                                    <div className="form-check form-check-custom form-check-solid">
                                        <input className="form-check-input" type="radio" value="" id="flexRadioDefault" />
                                        <label className="form-check-label" >
                                            Free
                                        </label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="form-check form-check-custom form-check-solid">
                                        <input className="form-check-input" type="radio" value="" id="flexRadioDefault" />
                                        <label className="form-check-label" >
                                            Paid
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Delivery Charges</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Amount'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            Discard
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>    

         
       </>
    )
}

export default  LocationCharges;
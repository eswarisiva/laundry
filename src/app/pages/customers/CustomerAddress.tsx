import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { KTIcon } from '../../../_metronic/helpers';
import { KTSVG } from "../../../_metronic/helpers";

const CustomerAddress : FC = () => {
    return (
        <>
            <PageTitle>ADDRESSES</PageTitle>
            <div className='row mb-8'>
                <div className='card-toolbar' data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                    <a href='#' style={{float: 'right'}} className='btn btn-sm btn-light-primary'>
                        <KTIcon iconName='plus' className='fs-3' />
                        Add Address
                    </a>
                </div>
            </div>

            <div className='card mb-8'>
                <div className='card-body bg-light'>
                    <div className='d-flex align-items-center'>
                        <div className='col-md-10'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Address Title</span>
                                <span className='text-muted fw-semibold d-block'>Door No, Street, Apartment, Building, City</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <a href='/customer/profile?customerId=1234' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                    <KTIcon iconName='pencil' className='fs-3' />
                                </a>
                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                    <KTIcon iconName='trash' className='fs-3' />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>    

            <div className='card mb-8'>
                <div className='card-body bg-light'>
                    <div className='d-flex align-items-center'>
                        <div className='col-md-10'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Address Title</span>
                                <span className='text-muted fw-semibold d-block'>Door No, Street, Apartment, Building, City</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <a href='/customer/profile?customerId=1234' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                    <KTIcon iconName='pencil' className='fs-3' />
                                </a>
                                <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                    <KTIcon iconName='trash' className='fs-3' />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="modal fade" tabIndex={-1} id="kt_modal_1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Address <br /> <label style={{ fontSize: '0.75rem' }}>Address Title</label></h5>

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
                     
                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Address Title</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Title'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fw-bold fs-6'>Door No & Street</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Door No & Street'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Locality / Landmark</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Locality'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Area</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Area'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>City</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter City'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>State / Province</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter State'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Country</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Country'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Post Code</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Post Code'
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

export default CustomerAddress;
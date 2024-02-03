import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";

const CustomerAccount : FC = () => {

    return (
        <>
            <PageTitle>ACCOUNT</PageTitle>

            <div className='card'>
                <div className='card-body'>
                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>First & Last Name</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Company Name'
                                        value='Badr al-Din'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Email Id</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='email'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Owner Name'
                                        value='badr@gmail.com'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Mobile Number</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Mobile Number'
                                        value='+973 - 33334444'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Special Discount (%)</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Special Discount'
                                        value='5'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Status</label>

                        <div className='col-lg-8'>
                            <div className='col-lg-12 fv-row'>
                                <div className="mb-10">
                                    <div className="form-check form-switch form-check-custom form-check-solid">
                                        <input className="form-check-input" checked={true} type="checkbox" value="" id="flexSwitchDefault" />
                                        <label className="form-check-label">
                                            (Inactive / Active)
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='d-flex flex-stack pt-15'>
                        <div className='mr-2'>
                            <button
                                type='button'
                                className='btn btn-lg btn-light-primary me-3'
                            >

                                Cancel
                            </button>
                        </div>

                        <div>
                            <button type='submit' className='btn btn-lg btn-primary me-3'>
                                Submit
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default CustomerAccount;
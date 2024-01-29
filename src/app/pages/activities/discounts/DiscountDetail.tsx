import {FC} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';

const DiscountDetail : FC = () => {
    return (
        <>
            <PageTitle>ADD DISCOUNT</PageTitle>

            <div className='card'>
                <div className='card-body'>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Post from</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                        <option value=''>Platform / Agent...</option>
                                        <option value='Platform'>Platform</option>
                                        <option value='Agent'>Agent</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Choose Agent (If required)</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                        <option value=''>Choose Agent...</option>
                                        <option value='Agent1'>Agent1</option>
                                        <option value='Agent2'>Agent2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Promo Title</label>

                        <div className='col-lg-8'>
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

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Promo Code</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Code'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Offer Type</label>

                        <div className='row col-lg-8'>
                            <div className='col-lg-4'>
                                <div className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="radio" value="" id="flexRadioDefault" />
                                    <label className="form-check-label" >
                                        First Order
                                    </label>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className="form-check form-check-custom form-check-solid">
                                    <input className="form-check-input" type="radio" value="" id="flexRadioDefault" />
                                    <label className="form-check-label" >
                                        All Orders
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Order Value</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Value'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>No Of Coupons</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter No'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Usage Frequency</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Frequency'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Flat or Percentage</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                        <option value=''>Choose...</option>
                                        <option value='Flat'>Flat</option>
                                        <option value='Percentage'>Percentage</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Amount</label>

                        <div className='col-lg-8'>
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

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Validity From & To</label>

                        <div className='col-lg-4'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='date'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Choose'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='date'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Choose'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Service</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                        <option value=''>Choose Service...</option>
                                        <option value='Service'>Service</option>
                                        <option value='Service'>Service</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Applicable For</label>

                        <div className='col-lg-8'>
                            <div className='col-lg-6 fv-row'>
                                <div className="mb-10">
                                    <div className="form-check form-switch form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                        <label className="form-check-label">
                                            POS
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='col-lg-6 fv-row'>
                                <div className="mb-10">
                                    <div className="form-check form-switch form-check-custom form-check-solid">
                                        <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                        <label className="form-check-label">
                                            ONLINE
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Upload Image</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='file'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter No'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Sort No</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter No'
                                    />
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

export default DiscountDetail;
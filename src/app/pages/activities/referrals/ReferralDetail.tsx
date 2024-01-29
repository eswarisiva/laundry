import {FC} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';

const ReferralDetail : FC = () => {
    return (
        <>
            <PageTitle>ADD REFERRAL</PageTitle>

            <div className='card'>
                <div className='card-body'>
    
                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Referral Title</label>

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
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Description</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Description'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Free Credits</label>

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
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>User Limits</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Limits'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Registered From & To</label>

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

export default ReferralDetail;

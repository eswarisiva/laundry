import {FC} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';

const GiftCardDetail : FC = () => {
    return (
        <>
            <PageTitle>ADD GIFT CARD</PageTitle>

            <div className='card'>
                <div className='card-body'>
    
                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Gift Card Title</label>

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
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>For the Month</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                        <option value=''>Choose Month...</option>
                                        <option value='January'>January</option>
                                        <option value='February'>February</option>
                                        <option value='March'>March</option>
                                        <option value='April'>April</option>
                                        <option value='May'>May</option>
                                        <option value='June'>June</option>
                                        <option value='July'>July</option>
                                        <option value='August'>August</option>
                                        <option value='September'>September</option>
                                        <option value='October'>October</option>
                                        <option value='November'>November</option>
                                        <option value='December'>December</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Choose Customer</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                        <option value=''>Choose ..</option>
                                        <option value='Cust1'>Cust1</option>
                                    </select>
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

export default GiftCardDetail;

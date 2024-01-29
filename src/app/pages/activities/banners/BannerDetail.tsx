import {FC} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';

const BannerDetail : FC = () => {
    return (
        <>
            <PageTitle>ADD BANNER</PageTitle>

            <div className='card'>
                <div className='card-body'>
    
                   <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Choose Section</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                        <option value=''>Choose ..</option>
                                        <option value='Section'>Section</option>
                                    </select>
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

export default BannerDetail;

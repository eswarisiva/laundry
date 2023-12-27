import {FC , useState} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';

const CategoryDetail : FC = () => {

    const [loading, setLoading] = useState(false);

    return (
        <>
            <PageTitle>ADD/UPDATE CATEGORY</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className='row mb-12'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Service</label>

                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-9 fv-row'>
                                <select
                                    className='form-select form-select-solid form-select-lg fw-bold'
                                    >
                                    <option value=''>Select a Service...</option>
                                    <option value='AF'>Service</option>
                                    <option value='AX'>Service</option>
                                    <option value='AL'>Service</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='row mb-12'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Category Name</label>

                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-12 fv-row'>
                                <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Enter Category'
                                />
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='row mb-12'>
                    <label className='col-lg-4 col-form-label required fw-bold fs-6'>Icon Image</label>

                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-12 fv-row'>
                                <input
                                type='file'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Icon / Image'
                                />
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='row mb-12'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>Sort No</label>

                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-12 fv-row'>
                                <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Enter Sort No'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row mb-12'>
                    <label className='col-lg-4 col-form-label fw-bold fs-6'>Display In Home</label>

                    <div className='col-lg-8'>
                        <div className='row'>
                            <div className='col-lg-12 fv-row'>
                                <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                    <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value='1'
                                    data-kt-check='true'
                                    data-kt-check-target='.widget-9-check'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryDetail;
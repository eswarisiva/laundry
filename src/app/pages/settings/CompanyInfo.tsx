import {FC , useState} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';

const CompanyInfo : FC = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <PageTitle>COMPANY INFO</PageTitle>
            <div className='row g-5 g-xl-8'>
                <div className='card'>
                <div className='card-body py-3'>
                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company Name</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Company Name'
                                    />
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Legal Name</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Legal Name'
                                    />
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Do you have tax?</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-9 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Choose Yes or no...</option>
                                        <option value='YES'>YES</option>
                                        <option value='NO'>NO</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Taxation Number</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Taxation Number'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company Registered On</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type='date'
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Choose Date'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label fw-bold fs-6'>About Us</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <textarea
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='About Us'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>No & Street/Road</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter No & Street/Road'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Apartment, Building, Flat</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type='text'
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Apartment, Building, Flat'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-9 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Select Country...</option>
                                        <option value='Country'>Country</option>
                                        <option value='Country'>Country</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>State</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-9 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Select State...</option>
                                        <option value='Country'>State</option>
                                        <option value='Country'>State</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>City</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-9 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Select City...</option>
                                        <option value='Country'>City</option>
                                        <option value='Country'>City</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Area</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-9 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Select Area...</option>
                                        <option value='Area'>Area</option>
                                        <option value='Area'>Area</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>   

                    
                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Contact Email 1</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-9 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Select Email...</option>
                                        <option value='Area'>Email</option>
                                        <option value='Area'>Email</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>   

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Contact Phone No 1</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-9 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Select Phone...</option>
                                        <option value='Area'>Phone</option>
                                        <option value='Area'>Phone</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>   

                    <div className='card-footer d-flex justify-content-end py-6 px-9'>
                        <button  className='btn btn-secondary'>
                            Cancel
                        </button>

                        <button type='submit' className='btn btn-primary' disabled={loading}>
                            {!loading && 'Submit'}
                            {loading && (
                                <span className='indicator-progress' style={{display: 'block'}}>
                                Please wait...{' '}
                                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                            )}
                        </button>
                    </div>
                </div>
                </div>    
            </div>
        </>
    )
}

export default CompanyInfo;
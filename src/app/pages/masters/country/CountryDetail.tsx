import {FC , useState} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';


const CountryDetail : FC = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
            <PageTitle>ADD/UPDATE COUNTRY</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className={`card `}>

                    <div className='card-body py-3'>
                        <form noValidate className='form'>
                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Name</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Country Name'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>   

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Code</label>

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
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Tele Code</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Tele Code'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Currency</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                        <select
                                            className='form-select form-select-solid form-select-lg fw-bold'
                                            >
                                            <option value=''>Select a Currency...</option>
                                            <option value='AF'>Currency</option>
                                            <option value='AX'>Currency</option>
                                            <option value='AL'>Currency</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Has State</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                        <select
                                            className='form-select form-select-solid form-select-lg fw-bold'
                                            >
                                            <option value=''>Select...</option>
                                            <option value='AF'>YES</option>
                                            <option value='AX'>NO</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className='card-footer d-flex justify-content-end py-6 px-9'>
                                <button type='submit' className='btn btn-primary' disabled={loading}>
                                    {!loading && 'Save Changes'}
                                    {loading && (
                                        <span className='indicator-progress' style={{display: 'block'}}>
                                        Please wait...{' '}
                                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                        </span>
                                    )}
                                </button>
                             </div>
                        </form>    
                    </div>
                </div>    
            </div>  
        </>
    )
}

export default CountryDetail;
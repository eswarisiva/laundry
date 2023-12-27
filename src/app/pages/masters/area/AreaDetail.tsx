import {FC , useState} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';

const AreaDetail : FC = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <PageTitle>ADD/UPDATE AREA</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className={`card `}>

                    <div className='card-body py-3'>
                        <form noValidate className='form'>
                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Name</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <select
                                                className='form-select form-select-solid form-select-lg fw-bold'
                                                >
                                                <option value=''>Select a Country...</option>
                                                <option value='AF'>Country</option>
                                                <option value='AX'>Country</option>
                                                <option value='AL'>Country</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>   

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>State / Province</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <select
                                                className='form-select form-select-solid form-select-lg fw-bold'
                                                >
                                                <option value=''>Select a State...</option>
                                                <option value='AF'>State</option>
                                                <option value='AX'>State</option>
                                                <option value='AL'>State</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>City</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <select
                                                className='form-select form-select-solid form-select-lg fw-bold'
                                                >
                                                <option value=''>Select a City...</option>
                                                <option value='AF'>City</option>
                                                <option value='AX'>City</option>
                                                <option value='AL'>City</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Area</label>

                                <div className='col-lg-8'>
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

export default AreaDetail;
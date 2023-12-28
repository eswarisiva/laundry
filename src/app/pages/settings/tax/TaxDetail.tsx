import {FC , useState} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';


const TaxDetail : FC = () => {
    const [loading, setLoading] = useState(false);

    return (
        <>
          <PageTitle>ADD/UPDATE TAX</PageTitle>

          <div className='row g-5 g-xl-8'>
                <div className={`card `}>

                    <div className='card-body py-3'>
                        <form noValidate className='form'>

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
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Tax Title</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Tax Name'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>   

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Tax %</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Tax %'
                                            />
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
                        </form>    
                    </div>
                </div>    
          </div>  
        </>
    )
}

export default TaxDetail;
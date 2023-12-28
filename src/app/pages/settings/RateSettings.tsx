import  { FC , useState} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';

const RateSettings : FC = () => {

    const [loading, setLoading] = useState(false);

    return (
        <>
           <PageTitle>RATE SETTINGS</PageTitle>

           <div className='row g-5 g-xl-8'>
                <div className='card'>
                <div className='card-body py-3'>

                    <h3>Commission Settings</h3>
                  
                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Platform Commission</label>

                        <div className='col-lg-4'>
                            <label className='col-form-label fw-bold'>For Online Services</label>
                            <div className='row'>
                                <div className='col-lg-6 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Flat or Percent...</option>
                                        <option value='Area'>Flat</option>
                                        <option value='Area'>Percent</option>
                                    </select>
                                </div>

                                <div className='col-lg-6 fv-row'>
                                   <input
                                    type="text"
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Value'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <label className='col-form-label fw-bold'>For Logistic Services</label>
                            <div className='row'>
                                <div className='col-lg-6 fv-row'>
                                    <select
                                        className='form-select form-select-solid form-select-lg fw-bold'
                                        >
                                        <option value=''>Flat or Percent...</option>
                                        <option value='Area'>Flat</option>
                                        <option value='Area'>Percent</option>
                                    </select>
                                </div>

                                <div className='col-lg-6 fv-row'>
                                   <input
                                    type="text"
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Value'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>  

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label fw-bold fs-6'>App Subscription Fee</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type="text"
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Amount'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3>Payout Settings</h3>

                    <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label fw-bold fs-6'>Minimum Payout Amount</label>

                        <div className='col-lg-8'>
                            <div className='row'>
                                <div className='col-lg-12 fv-row'>
                                    <input
                                    type="text"
                                    className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                    placeholder='Enter Amount'
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
                </div>
                </div>    
            </div>

        </>
    )
}

export default RateSettings;
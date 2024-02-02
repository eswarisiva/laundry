import {FC} from 'react';

const Account : FC = () => {

    return (
        <>
            <div className='row mb-12'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Mobile Number</label>

                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-lg-12 fv-row'>
                            <input
                                type='text'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Enter Mobile Number'
                                value={`+973-33332222`}
                            />
                        </div>
                    </div>
                </div>
            </div>    

            <div className='row mb-12'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Email</label>

                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-lg-12 fv-row'>
                            <input
                                type='email'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Enter Email'
                                value={`info@abdlwash.com`}
                            />
                        </div>
                    </div>
                </div>
            </div> 

            <h1>Change Password</h1>

            <div className='row mb-12'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>New password</label>

                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-lg-12 fv-row'>
                            <input
                                type='password'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Enter password'
                            />
                        </div>
                    </div>
                </div>
            </div>    

            <div className='row mb-12'>
                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Confirm password</label>

                <div className='col-lg-8'>
                    <div className='row'>
                        <div className='col-lg-12 fv-row'>
                            <input
                                type='password'
                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                placeholder='Enter password'
                            />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )    
}    

export default Account;
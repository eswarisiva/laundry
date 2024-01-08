import {FC} from 'react';

const Services : FC = () => {
    return (
        <>
           
           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Laundry Service</label>

               <div className='col-lg-8'>
                       <div className='col-lg-12 fv-row'>
                            <div className="mb-10">
                                <div className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                </div>
                            </div>
                       </div>

              </div>
           </div>


           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Service Type</label>

               <div className='row col-lg-8'>
                   <div className='col-lg-4'>
                         <div className="mb-10">
                            <div className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label">
                                    POS
                                </label>
                            </div>
                        </div>
                    </div>   
                    <div className='col-lg-4'>
                    <div className="form-check form-check-custom form-check-solid">
                        <input className="form-check-input" type="checkbox" value="" id="flexRadioDefault" />
                        <label className="form-check-label" >
                            Online
                        </label>
                    </div>
                    </div>   
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>M Logistic Support</label>

               <div className='col-lg-8'>
                       <div className='col-lg-12 fv-row'>
                            <div className="mb-10">
                                <div className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                    <label className="form-check-label">
                                        (M Logistic applicable for online service if enabled)
                                    </label>
                                </div>
                            </div>
                       </div>

              </div>
           </div>
        </>
    )
}

export default Services;
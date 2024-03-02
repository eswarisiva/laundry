import React, {memo}  from 'react';

const Company  = (props:any) => {
   return (
    <>
           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company Name</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='text'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Enter Company Name'
                               {...props?.formik.getFieldProps('companyName')}
                                              
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Owner Name</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='text'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Enter Owner Name'
                               {...props?.formik.getFieldProps('ownerName')}
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Do you have tax?</label>

               <div className='row col-lg-8'>
               <div className='col-lg-4'>
                   <div className="form-check form-check-custom form-check-solid">
                       <input className="form-check-input" type="radio"
                        {...props?.formik.getFieldProps('haveTax')}
                       checked={true} id="flexRadioDefault" />
                       <label className="form-check-label" >
                       Yes
                       </label>
                   </div>
                </div>   
                <div className='col-lg-4'>
                   <div className="form-check form-check-custom form-check-solid">
                       <input className="form-check-input" type="radio" {...props?.formik.getFieldProps('haveTax')} id="flexRadioDefault" />
                       <label className="form-check-label" >
                           No
                       </label>
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
                               value='190938s'
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Company Logo </label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='file'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Company Logo'
                           />
                       </div>
                   </div>
               </div>
           </div>
    </>
   ) 
}

export default memo(Company);
import {FC} from 'react';

const Company : FC = () => {
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
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Do you have tax?</label>

               <div className='col-lg-8'>
               <div className="form-check form-check-custom form-check-solid">
      <input className="form-check-input" type="radio" value="" id="flexRadioDefault"/>
      <label className="form-check-label" >
      yes
      </label>
  </div>  
               </div>
           </div>
    </>
   ) 
}

export default Company;
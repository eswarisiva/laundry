import {FC} from 'react';

const Address : FC = () => {
   return (
      <>
           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>No & Street/Road</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='text'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Enter No & Street/Road'
                               value={`No.43 a`}
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
                               value={`Abdul Rahmin Complex`}
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Area</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-9 fv-row'>
                           <select value={`Diplomatic Area`}
                               className='form-select form-select-solid form-select-lg fw-bold'
                           >
                               <option value=''>Select Area...</option>
                               <option value='Diplomatic Area'>Diplomatic Area</option>
                               <option value='Area'>Area</option>
                           </select>
                       </div>
                   </div>
               </div>
           </div>


           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-9 fv-row'>
                           <select value={`Bahrain`}
                               className='form-select form-select-solid form-select-lg fw-bold'
                           >
                               <option value=''>Select Country...</option>
                               <option value='Bahrain'>Bahrain</option>
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
                           <select value={`Manama`}
                               className='form-select form-select-solid form-select-lg fw-bold'
                           >
                               <option value=''>Select City...</option>
                               <option value='Manama'>Manama</option>
                               <option value='Country'>City</option>
                           </select>
                       </div>
                   </div>
               </div>
           </div>

   
    </>
    ) 
}

export default Address;

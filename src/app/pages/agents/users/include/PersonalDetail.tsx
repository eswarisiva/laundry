import {FC} from 'react';


const PersonalDetail : FC = () => {
   return (
    <>
           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>First & Last Name</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='text'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Enter Name'
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
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Username</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='text'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Enter Username'
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Role</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <select
                               className='form-select form-select-solid form-select-lg fw-bold'
                           >
                               <option value=''>Select a Role...</option>
                               <option value='AF'>Role1</option>
                               <option value='AX'>Role2</option>
                               <option value='AL'>Role3</option>
                           </select>
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label fw-bold fs-6'>Upload Image</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='file'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Image'
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label fw-bold fs-6'>Mobile Number</label>

               <div className='col-lg-8'>
                   <div className='row'>
                       <div className='col-lg-12 fv-row'>
                           <input
                               type='text'
                               className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                               placeholder='Enter Mobile Number'
                           />
                       </div>
                   </div>
               </div>
           </div>

           <div className='row mb-12'>
               <label className='col-lg-4 col-form-label required fw-bold fs-6'>Status</label>

               <div className='col-lg-8'>
                   <div className='col-lg-12 fv-row'>
                       <div className="mb-10">
                           <div className="form-check form-switch form-check-custom form-check-solid">
                               <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                               <label className="form-check-label">
                                   (Inactive/Active)
                               </label>
                           </div>
                       </div>
                   </div>

               </div>
           </div>
    </>
   )
}

export default  PersonalDetail;
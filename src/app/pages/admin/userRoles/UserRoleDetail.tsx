import {FC} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';

const UserRoleDetail : FC = () => {
    return (
        <>
            <PageTitle>ADD/UPDATE USER ROLE</PageTitle>
            <div className='row g-5 g-xl-8'>
                <div className={`card `}>

                    <div className='card-body py-3'>

                        <div className='row mb-12'>
                        <label className='col-lg-4 col-form-label required fw-bold fs-6'>Role</label>

                            <div className='col-lg-8'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                        type='text'
                                        className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                        placeholder='Enter Role Name'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>    

                        <div className='table-responsive'>
                            <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                                <thead>
                                <tr className='fw-bold text-muted'>
                                    <th className='min-w-200px'>
                                        <div className='form-check form-check-sm form-check-custom form-check-solid'>
                                            <input
                                            className='form-check-input'
                                            type='checkbox'
                                            value='1'
                                            data-kt-check='true'
                                            data-kt-check-target='.widget-9-check'
                                            />
                                        </div>
                                    </th>
                                    <th className='min-w-100px'>Create</th>
                                    <th className='min-w-100px'>Edit</th>
                                    <th className='min-w-100px'>View</th>
                                    <th className='min-w-100px'>Delete</th>
                                    <th className='min-w-100px'>Downloads</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <label className='form-check form-check-custom form-check-solid align-items-start'>
                                                <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                                />

                                                <span className='form-check-label d-flex flex-column align-items-start'>
                                                    <span className='fw-bolder fs-5 mb-0'>Module 1</span>
                                                </span>
                                            </label>
                                            
                                        </td>
                                        <td>
                                            <label className='form-check form-check-custom form-check-solid align-items-start'>
                                                <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                                />
                                            </label>
                                        </td>
                                        <td>
                                            <label className='form-check form-check-custom form-check-solid align-items-start'>
                                                <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                                />
                                            </label>
                                        </td>
                                        <td>
                                            <label className='form-check form-check-custom form-check-solid align-items-start'>
                                                <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                                />
                                            </label>
                                        </td>
                                        <td>
                                            <label className='form-check form-check-custom form-check-solid align-items-start'>
                                                <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                                />
                                            </label>
                                        </td>
                                        <td>
                                            <label className='form-check form-check-custom form-check-solid align-items-start'>
                                                <input
                                                className='form-check-input'
                                                type='checkbox'
                                                value='1'
                                                data-kt-check='true'
                                                data-kt-check-target='.widget-9-check'
                                                />
                                            </label>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>    
            </div>    
        </>
    )
}

export default UserRoleDetail;
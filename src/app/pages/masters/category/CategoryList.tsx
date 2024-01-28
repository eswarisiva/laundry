import {FC} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';
import { KTIcon } from '../../../../_metronic/helpers';
import { toAbsoluteUrl } from '../../../../_metronic/helpers';
import {Link} from 'react-router-dom';

const CategoryList : FC = () => {
    return (
        <>
            <PageTitle>CATEGORY</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className={`card `}>
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                         <span className='card-label fw-bold fs-3 mb-1'>Category List</span>
                        </h3>
                        <div  className='card-toolbar' data-bs-toggle='tooltip' data-bs-placement='top'  data-bs-trigger='hover' title='Click to add a category'>
                            <Link to='/category/create' className='btn btn-sm btn-light-primary'>
                                <KTIcon iconName='plus' className='fs-3' />
                                New Category
                            </Link>
                        </div>
                    </div>
                    <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px'>Image</th>
                                <th className='min-w-100px'>Category Name</th>
                                <th className='min-w-200px'>Services</th>
                                <th className='min-w-200px'>Last Updated On</th>
                                <th className='min-w-100px'>Status</th>
                                <th className='min-w-100px text-end'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-45px me-5'>
                                                <img src={toAbsoluteUrl('media/avatars/300-14.jpg')} alt='' />
                                            </div>
                                        </div>    
                                    </td>
                                    <td>Top</td>
                                    <td>Laundry</td>
                                    <td>12/10/22</td>
                                    <td>Active</td>
                                    <td>
                                    <div className='d-flex justify-content-end flex-shrink-0'>
                                        <Link to='/category/1234' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                            <KTIcon iconName='pencil' className='fs-3' />
                                        </Link>
                                        <a href='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTIcon iconName='trash' className='fs-3' />
                                        </a>
                                    </div>
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

export default CategoryList;
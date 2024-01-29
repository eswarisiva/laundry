import {FC} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';
import { KTIcon } from '../../../../_metronic/helpers';
import { Link } from 'react-router-dom';

const Discountlist : FC = () => {
    return (
        <>
            <PageTitle>DISCOUNTS</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className={`card `}>
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                         <span className='card-label fw-bold fs-3 mb-1'>Discount List</span>
                        </h3>
                        <div  className='card-toolbar' data-bs-toggle='tooltip' data-bs-placement='top'  data-bs-trigger='hover' title='Click to add a user'>
                            <Link to={`/activities/discount/create`} className='btn btn-sm btn-light-primary'>
                                <KTIcon iconName='plus' className='fs-3' />
                                New Discount
                            </Link>
                        </div>
                    </div>
                    <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px'>Promo Title</th>
                                <th className='min-w-200px'>Promo Code</th>
                                <th className='min-w-100px'>Offer Type</th>
                                <th className='min-w-100px'>Value (BHD)</th>
                                <th className='min-w-100px'>Created On</th>
                                <th className='min-w-150px'>Sort No</th>
                                <th className='min-w-100px'>Status</th>
                                <th className='min-w-100px text-end'>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to='/activities/discounts/1234'>    
                                        NEW USER
                                        </Link>
                                    </td>
                                    <td>OFF100</td>
                                    <td>First Order</td>
                                    <td>100 BHD</td>
                                    <td>12/01/2023</td>
                                    <td>1</td>
                                    <td>Active</td>
                                    <td>
                                    <div className='d-flex justify-content-end flex-shrink-0'>
                                        <Link to='/activities/discounts/1234' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                            <KTIcon iconName='pencil' className='fs-3' />
                                        </Link>
                                        <Link to='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTIcon iconName='trash' className='fs-3' />
                                        </Link>
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

export default Discountlist;


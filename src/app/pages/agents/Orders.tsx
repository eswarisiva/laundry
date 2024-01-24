import {FC} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';

const AgentOrders : FC = () => {
    return (
        <>
         <PageTitle>ORDERS</PageTitle>

         <div className='row g-5 g-xl-8'>
                <div className={`card `}>
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                         <span className='card-label fw-bold fs-3 mb-1'>Orders List</span>
                        </h3>
                    </div>
                    <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px'>Order Date</th>
                                <th className='min-w-200px'>Order No</th>
                                <th className='min-w-100px'>Customer Info</th>
                                <th className='min-w-100px'>Agent Company</th>
                                <th className='min-w-150px'>No Of Items</th>
                                <th className='min-w-150px'>Booked Via</th>
                                <th className='min-w-100px'>PickUp Request</th>
                                <th className='min-w-100px'>Delivery Request</th>
                                <th className='min-w-100px'>Payment Status</th>
                                <th className='min-w-100px'>Order Status</th>
                                <th className='min-w-100px'>Order Details</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>dd/mm/yy</td>
                                    <td>ORD001</td>
                                    <td>Name</td>
                                    <td>Agent</td>
                                    <td>3</td>
                                    <td>POS</td>
                                    <td>YES</td>
                                    <td>YES</td>
                                    <td>Success</td>
                                    <td>Success</td>
                                    <td>View</td>
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

export default AgentOrders;

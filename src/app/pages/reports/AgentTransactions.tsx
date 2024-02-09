import {FC} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { KTIcon } from '../../../_metronic/helpers';
import {Link} from 'react-router-dom';

const AgentTransactions : FC = () => {
    return (
        <>
            <PageTitle>AGENT TRANSACTIONS</PageTitle>
            <h3 className='card-title align-items-start flex-column mb-4'>
                <span className='card-label fw-bold fs-3 mb-1'>Wallet</span>
            </h3>

            <div className='card mb-8'>

<div className='card-body bg-light-warning'>
    <div className='d-flex align-items-center'>
        <div className='col-md-8'>
            <div className='flex-grow-1'>
                <span className='text-muted fw-bold d-block'>1089</span>
                <span className='text-muted fw-semibold d-block'>BHD</span>
            </div>
        </div>


        <div className='col-md-2'>
            <div className='flex-grow-1'>
                <span className='text-muted fw-bold d-block'>Bank Details</span>
                <span className='text-muted fw-semibold d-block'>No bank details</span>
            </div>
        </div>

        <div className='col-md-2'>
            <button data-bs-toggle="modal" data-bs-target="#kt_modal_1" className='btn btn-sm fw-bold btn-primary'>Add/Update</button>
            <span data-bs-toggle="modal" data-bs-target="#kt_modal_2" className='badge badge-warning fs-8 fw-bold'>Verification Pending</span>

        </div>

    </div>
</div>
</div>

<h3 className='card-title align-items-start flex-column mb-4'>
                <span className='card-label fw-bold fs-3 mb-1'>TRANSACTIONS</span>

            </h3>


            <div className='card  mb-4'>
                <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px'>Date</th>
                                <th className='min-w-200px'>Order ID</th>
                                <th className='min-w-100px'>Customer Name</th>
                                <th className='min-w-100px'>Mobile Number</th>
                                <th className='min-w-150px'>Type</th>
                                <th className='min-w-150px'>Method</th>
                                <th className='min-w-100px'>Amount</th>
                                <th className='min-w-100px'>Charges</th>
                                <th className='min-w-100px'>Total</th>
                                <th className='min-w-100px'>Discount</th>
                                <th className='min-w-100px'>Final</th>
                                <th className='min-w-100px'>Platform Commission</th>
                                <th className='min-w-100px'>Wallet In</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>dd/mm/yy</td>
                                    <td>ORD001</td>
                                    <td>Demo</td>
                                    <td>+971908777192</td>
                                    <td>POS</td>
                                    <td>Swipe</td>
                                    <td>500</td>
                                    <td>50</td>
                                    <td>550</td>
                                    <td>10</td>
                                    <td>540</td>
                                    <td>0</td>
                                    <td>540</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
            </div>  

            <h3 className='card-title align-items-start flex-column mb-4'>
                <span className='card-label fw-bold fs-3 mb-1'>PAYOUT HISTORY</span>

            </h3>  

               <div className='card  mb-4'>
                <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px'>Requested Date</th>
                                <th className='min-w-200px'>Request ID</th>
                                <th className='min-w-100px'>Amount</th>
                                <th className='min-w-100px'>Status</th>
                                <th className='min-w-100px'>Comments</th>
                                <th className='min-w-100px'>Account No</th>
                                <th className='min-w-100px'>Updated On</th>
                                <th className='min-w-100px'>Reference Txn No</th>
                                <th className='min-w-100px'>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>dd/mm/yy</td>
                                    <td>001</td>
                                    <td>500 BHD</td>
                                    <td>Pending</td>
                                    <td>Amount Transfered</td>
                                    <td>234***</td>
                                    <td>dd/mm/yy</td>
                                    <td></td>
                                    <td>
                                    <Link to='/agent?agentId=1234' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                            <KTIcon iconName='pencil' className='fs-3' />
                                        </Link>
                                        <Link to='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTIcon iconName='trash' className='fs-3' />
                                        </Link>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
            </div>   




        </>
    )
}

export default AgentTransactions;
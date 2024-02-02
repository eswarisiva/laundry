import { FC } from 'react';
import { PageTitle } from '../../../_metronic/layout/core';

const AgentRatings : FC = () => {
        return (
            <>
                <PageTitle>REVIEWS & RATINGS</PageTitle>

                <h3 className='card-title align-items-start flex-column mb-4'>
                  <span className='card-label fw-bold fs-3 mb-1'>Ratings</span>
                </h3>

                <div className='card mb-8'>

                    <div className='card-body bg-light-warning'>
                        <div className='d-flex align-items-center'>
                            <div className='col-md-10'>
                                <div className='flex-grow-1'>
                                    <span className='text-muted fw-bold d-block'>4.5/5</span>
                                </div>
                            </div>


                            <div className='col-md-2'>
                                <span className='badge badge-warning fs-8 fw-bold'>125 Reviews</span>
                            </div>

                        </div>
                    </div>
                </div>

                <h3 className='card-title align-items-start flex-column mb-4'>
                  <span className='card-label fw-bold fs-3 mb-1'>History</span>
                </h3>

                <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px'>Date</th>
                                <th className='min-w-200px'>Order Id</th>
                                <th className='min-w-100px'>Customer Name</th>
                                <th className='min-w-100px'>Mobile No</th>
                                <th className='min-w-150px'>Type</th>
                                <th className='min-w-150px'>Method</th>
                                <th className='min-w-100px'>Rating</th>
                                <th className='min-w-100px text-end'>Review</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12/03/23</td>
                                    <td>ORD001</td>
                                    <td>Altaf malik</td>
                                    <td>+973 - 33330000</td>
                                    <td>POS</td>
                                    <td>Others</td>
                                    <td>4/5</td>
                                    <td>View</td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
            </>
        )
}

export default AgentRatings;
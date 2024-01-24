import {FC} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { KTIcon } from '../../../_metronic/helpers';

const AgentSubscriptions : FC = () => {
    return (
        <>
            <PageTitle>MY SUBSCRIPTIONS</PageTitle>

            <div className='card mb-8'>

                <div className='card-body bg-light-success'>
                    <div className='d-flex align-items-center'>
                        <div className='col-md-8'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>1089 BHD</span>
                                <span className='text-muted fw-semibold d-block'>Subscribed On</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>(5 days to Expire)</span>
                                <span className='text-muted fw-semibold d-block'>Auto Renewal Enabled</span>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <button data-bs-toggle="modal" data-bs-target="#kt_modal_1" className='btn btn-sm fw-bold btn-primary'>Cancel Subscription</button>
             
                        </div>

                    </div>
                </div>
            </div>

            <h3 className='card-title align-items-start flex-column mb-4'>
                <span className='card-label fw-bold fs-3 mb-1'>CARD DETAILS</span>
            </h3>

            <div className='card mb-4'>
                <div className='card-body bg-light'>
                    <div className='d-flex align-items-center mb-8'>
                        <div className='col-md-8'>
                                <div className='flex-grow-1'>
                                    <span className='text-muted fw-bold d-block'>Card No</span>
                                    <span className='text-muted fw-semibold d-block'>Added on / Debit Card</span>
                                </div>
                        </div>

                        <div className='col-md-1'>
                            <span  data-bs-toggle="modal" data-bs-target="#kt_modal_1" className='badge badge-warning fs-8 fw-bold'>Primary</span>
                        </div>

                        <div className='col-md-1'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Active</span>
                            </div>            
                        </div>
                        <div className='col-md-1'>
                            <KTIcon iconName='basket-ok' className='fs-1 text-warning' />
                        </div>
            
                    </div>
                </div> 
            </div>

            <h3 className='card-title align-items-start flex-column mb-4'>
                <span className='card-label fw-bold fs-3 mb-1'>TRANSACTIONS / INVOICING</span>
            </h3>

            <div className='card'>
                <div className='card-body bg-light'>
                    <div className='d-flex align-items-center mb-8'>
                        <div className='col-md-3'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Transactions Id</span>
                                <span className='text-muted fw-semibold d-block'>Payment Date</span>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Plan Name</span>
                                <span className='text-muted fw-semibold d-block'>Amount</span>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Card No</span>
                                <span className='text-muted fw-semibold d-block'>Auto renewal</span>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>BHD 10</span>
                            </div>
                        </div>

                        <div className='col-md-2'>
                            <span className='badge badge-warning fs-8 fw-bold'>Download Invoice</span>
                        </div>

                    </div>
                </div>
            </div> 
        </>
    )
}

export default AgentSubscriptions;
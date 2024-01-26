import { FC } from "react";

const CustomerTransactions : FC = () => {
    return (
        <>
            <div className='card mb-8'>

                <div className='card-body bg-light-warning'>
                    <div className='d-flex align-items-center'>
                        <div className='col-md-10'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>1089</span>
                                <span className='text-muted fw-semibold d-block'>BHD</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <button className='btn btn-sm fw-bold btn-primary' style={{ marginRight: '10px' }}>PAY IN</button>
                            <button className='btn btn-sm fw-bold btn-primary'>PAY OUT</button>
                        </div>

                    </div>
                </div>
            </div>

            <h3 className='card-title align-items-start flex-column mb-4'>
                <span className='card-label fw-bold fs-3 mb-1'>TRANSACTIONS</span>
            </h3>

            <div className='card mb-8'>
                <div className='card-body bg-light'>
                    <div className='d-flex align-items-center'>
                        <div className='col-md-5'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Order No / Order Date</span>
                                <span className='text-muted fw-semibold d-block'>Order Booked</span>
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Booking ID / Date</span>
                                <span className='text-muted fw-semibold d-block'>Agent Name</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <span  className='badge badge-warning fs-8 fw-bold'>2 BHD</span>

                                <span className='text-muted fw-semibold d-block'>Pay Out</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>   

            <div className='card mb-8'>
                <div className='card-body bg-light'>
                    <div className='d-flex align-items-center'>
                    <div className='col-md-5'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Order No / Order Date</span>
                                <span className='text-muted fw-semibold d-block'>Order Booked</span>
                            </div>
                        </div>

                        <div className='col-md-5'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Booking ID / Date</span>
                                <span className='text-muted fw-semibold d-block'>Agent Name</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <span  className='badge badge-warning fs-8 fw-bold'>2 BHD</span>

                                <span className='text-muted fw-semibold d-block'>Pay Out</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>  
        </>
    )
}

export default CustomerTransactions;
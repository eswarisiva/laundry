import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";

const CustomerPreferences : FC = () => {
    return (
        <>
            <PageTitle>PREFERENCES</PageTitle>

            <h3 className='card-title align-items-start flex-column mb-4'>
                <span className='card-label fw-bold fs-3 mb-1'>Detergents</span>
            </h3>

            <div className='row mb-8' style={{borderBottom : '2px solid #000'}}>
                    <div className='d-flex align-items-center'>
                        <div className='col-md-10'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Softner</span>
                                <span className='text-muted fw-semibold d-block'>Can we use softner</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <div className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                </div>
                            </div>
                        </div>

                    </div>
            </div> 

            <div className='row mb-8' style={{borderBottom : '2px solid #000'}}>
                    <div className='d-flex align-items-center'>
                        <div className='col-md-10'>
                            <div className='flex-grow-1'>
                                <span className='text-muted fw-bold d-block'>Perfume</span>
                                <span className='text-muted fw-semibold d-block'>Can we add perfume to clothes</span>
                            </div>
                        </div>


                        <div className='col-md-2'>
                            <div className='flex-grow-1'>
                                <div className="form-check form-switch form-check-custom form-check-solid">
                                    <input className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                </div>
                            </div>
                        </div>

                    </div>
            </div>

            <div className='row mb-8' style={{ borderBottom: '2px solid #000' }}>
                <div className='d-flex align-items-center'>
                    <div className='col-md-12'>
                        <div className='flex-grow-1'>
                            <span className='text-muted fw-bold d-block'>Incoming Type</span>
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">NONE</div>
                                </div>
                            </div>

                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">TRIANGLE</div>
                                </div>
                            </div>

                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">SQUARE</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div> 

             <div className='row mb-8' style={{ borderBottom: '2px solid #000' }}>
                <div className='d-flex align-items-center'>
                    <div className='col-md-12'>
                        <div className='flex-grow-1'>
                            <span className='text-muted fw-bold d-block'>Stratch Level</span>
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">NONE</div>
                                </div>
                            </div>

                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">LIGHT</div>
                                </div>
                            </div>

                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">MEDIUM</div>
                                </div>
                            </div>

                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">HIGH</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>  

            <div className='row mb-8' style={{ borderBottom: '2px solid #000' }}>
                <div className='d-flex align-items-center'>
                    <div className='col-md-12'>
                        <div className='flex-grow-1'>
                            <span className='text-muted fw-bold d-block'>Clothes Returned</span>
                        </div>
                        <div className="d-flex flex-wrap">
                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">HANGERS</div>
                                </div>
                            </div>

                            <div className="border border-gray-300 border-dashed rounded py-3 px-4 me-6 mb-3">
                                <div className="d-flex align-items-center">
                                    <div className="fw-bolder">FOLDED</div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>  
        </>
    )
}

export default CustomerPreferences;

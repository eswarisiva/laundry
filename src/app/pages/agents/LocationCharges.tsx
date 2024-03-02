import {FC , useState, useEffect} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { KTSVG } from '../../../_metronic/helpers';
import { getRequest } from '../../modules/auth/core/_requests';
import ReactPaginate from "react-paginate"; 
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons"; 
import "../../assets/sass/pagnition.scss";
import { useParams } from 'react-router-dom';

const LocationCharges : FC = () => {

    const [rowData, setRowData] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [filterData, setFilterData] = useState();
    const pageSize = 10;
    const {agentId} = useParams();

    const getData = async () => {
        const locationData = await getRequest(`/agents/locations/${agentId}`,`?pageIndex=${page}&pageSize=${pageSize}`);

        const lookupObj = [locationData];
        let data1:Array<any>=[];
        return Promise.allSettled(lookupObj)
        .then((result) => {
            result.forEach((res: any) => { 
                data1.push(res.value);
            })
            return data1;
        })
        .then((d) =>  {
            const dataobj = {
                locationData : d[0]?.data?.status === 'ok' ? d[0]?.data : [] ,
            }
            setRowData(dataobj?.locationData?.data);
            setTotal(dataobj?.locationData?.totalCount)
        })

    }


    useEffect(() => {
        async function fetchData() {
            await getData();
        }
        fetchData()
    }, [])



    return (
        <>

        <PageTitle>LOCATION & CHARGES</PageTitle>

            {
                rowData?.length > 0 ?
                    rowData.map((result: any) => {

                        return (
                            <div className={`card mb-8`} >
                                <div className='card-body bg-light'>
                                    <div className='d-flex align-items-center mb-8'>
                                        <div className='col-md-3'>
                                            <div className='flex-grow-1'>
                                                <span className='text-muted fw-bold d-block'> {result?.areaId?.name}</span>
                                                <span className='text-muted fw-semibold d-block'>{result?.areaId?.countryId?.name} / {result?.areaId?.cityId?.name}</span>
                                            </div>
                                        </div>

                                        <div className='col-md-2'>
                                            <div className='flex-grow-1'>
                                                <span className='text-muted fw-bold d-block'>{result?.minOrderAmt} BHD</span>
                                                <span className='text-muted fw-semibold d-block'>Min Order Amount</span>
                                            </div>
                                        </div>

                                        <div className='col-md-2'>
                                            <div className='flex-grow-1'>
                                                <span className='text-muted fw-bold d-block'>{result?.isFreeDelivery ? `Free` : result?.deliveryCharge}</span>
                                                <span className='text-muted fw-semibold d-block'>Delivery Charges</span>
                                            </div>
                                        </div>

                                        <div className='col-md-3'>
                                            <div className='flex-grow-1'>
                                                <span className='text-muted fw-bold d-block'>Service Available</span>
                                                <div className="form-check form-switch form-check-custom form-check-solid">
                                                    <input className="form-check-input" checked={true} type="checkbox" value="" id="flexSwitchDefault" />
                                                </div>
                                            </div>
                                        </div>

                                        <span data-bs-toggle="modal" data-bs-target="#kt_modal_1" className='badge badge-warning fs-8 fw-bold'>Update Charges</span>
                                    </div>
                                </div>
                            </div>

                        )
                    })

                    :
                    <tr><td>No Agents Found</td></tr>
            }
        <div className="modal fade" tabIndex={-1} id="kt_modal_1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Area 1 <br /> <label style={{ fontSize: '0.75rem' }}>Country Name / City Name</label></h5>

                        <div
                            className="btn btn-icon btn-sm btn-primary ms-2"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        >
                            <KTSVG
                                path="media/icons/duotune/arrows/arr061.svg"
                                className="svg-icon svg-icon-2x"
                            />
                        </div>
                    </div>
                    <div className="modal-body">
                        <h3 className="modal-title mb-4">Update Charges</h3>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Min Order Amount</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Amount'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fw-bold fs-6'>Type</label>

                            <div className='row col-lg-12'>
                                <div className='col-lg-6'>
                                    <div className="form-check form-check-custom form-check-solid">
                                        <input className="form-check-input" type="radio" value="" id="flexRadioDefault" />
                                        <label className="form-check-label" >
                                            Free
                                        </label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="form-check form-check-custom form-check-solid">
                                        <input className="form-check-input" type="radio" value="" id="flexRadioDefault" />
                                        <label className="form-check-label" >
                                            Paid
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row '>
                            <label className='col-lg-12 col-form-label required fs-6'>Delivery Charges</label>

                            <div className='col-lg-12'>
                                <div className='row'>
                                    <div className='col-lg-12 fv-row'>
                                        <input
                                            type='text'
                                            className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                            placeholder='Enter Amount'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-light"
                            data-bs-dismiss="modal"
                        >
                            Discard
                        </button>
                        <button type="button" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>    

        

         
       </>
    )
}

export default  LocationCharges;
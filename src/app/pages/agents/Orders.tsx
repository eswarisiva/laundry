import {FC, useState, useEffect} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { postRequest } from '../../modules/auth/core/_requests';
import { stringToDate } from '../../../common/Date'; 
import { useParams } from 'react-router-dom';

const AgentOrders : FC = () => {

    const [rowData, setRowData] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const pageSize = 10;
    const {agentId} = useParams();

    const getData = async () => {
        const orderData = await postRequest(`/agents/orders/${agentId}?pageIndex=${page}&pageSize=${pageSize}`,``);

        const lookupObj = [orderData];
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
                orderData : d[0]?.data?.status === 'ok' ? d[0]?.data?.data : [] ,
            }
            setRowData(dataobj?.orderData);
            setTotal(dataobj?.orderData?.totalCount);
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

                                    {
                                        rowData?.length > 0 ?
                                            rowData.map((result: any) => {

                                                return (
                                                    <tr key={result?._id}>
                                                        <td>{stringToDate(result?.orderDate)}</td>
                                                        <td>{result?.orderNo}</td>
                                                        <td>{result?.customerId?.firstName + " " + result?.customerId?.lastName}</td>
                                                        <td>Agent</td>
                                                        <td>{result?.qty}</td>
                                                        <td>{result?.orderMode}</td>
                                                        <td>{result?.isHomePickup ? 'YES' : 'NO'}</td>
                                                        <td>{result?.isHomeDelivery ? 'YES' : 'NO'}</td>
                                                        <td>{result?.paymentStatus}</td>
                                                        <td>{result?.orderStatus}</td>
                                                        <td>View</td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            <tr><td>No Orders Found</td></tr>
                                    }
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

import {FC, useEffect, useState} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';
import { KTIcon } from '../../../../_metronic/helpers';
import {Link} from 'react-router-dom';
import { postRequest } from '../../../modules/auth/core/_requests';
import { stringToDate } from '../../../../common/Date';
import { deleteRequest } from '../../../modules/auth/core/_requests';
import AlertBox from '../../../../common/AlertBox';

const CityList : FC = () => {

    const [rowData, setRowData] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState(``);
    const [errorMsg, setErrorMsg] = useState(``);
    const [isFailed, setIsFailed] = useState(false);

    const closeAlert = () => {
        if(isSuccess) setIsSuccess(false);
        if(isFailed) setIsFailed(false);
    }

    const deleteCity = async (ID : string) => {
        if(window.confirm('Are you sure to delete this record?')) {
            await deleteRequest(`/master/city/` + ID)
                .then(async (response) => {
                    if (response?.data?.status === 'ok') {
                        setIsSuccess(true);
                        setSuccessMsg(`City has been deleted successfully`);
                        await getData();
                    } else {
                        setIsFailed(true);
                        setErrorMsg(`Something Went Wrong`);
                    }
                });
        }
    }

    const getData = async () => {
        const stateData = await postRequest(`/master/cities`,``);
        if(stateData?.data?.status === 'ok') {
            setRowData(stateData?.data?.data);
        }
    }

    useEffect(() => {
        async function loadData() {
            await getData();
         }

        loadData();
    },[])



    return (
        <>
            <PageTitle>CITY</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className={`card `}>
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                         <span className='card-label fw-bold fs-3 mb-1'>City List</span>
                        </h3>
                        <div className='card-toolbar' data-bs-toggle='tooltip' data-bs-placement='top' data-bs-trigger='hover' title='Click to add a City'>
                            <Link to='/city/create' className='btn btn-sm btn-light-primary'>
                                <KTIcon iconName='plus' className='fs-3' />
                                New City
                            </Link>
                        </div>
                    </div>
                    <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-200px'>Country Name</th>
                                <th className='min-w-100px'>City</th>
                                <th className='min-w-200px'>Updated On</th>
                                <th className='min-w-100px'>Status</th>
                                <th className='min-w-100px text-end'>Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            { 
                                rowData?.length > 0 ?   
                                rowData.map((result : any) => { 

                                return  (
                                <tr key={result?._id}>
                                    <td>{result?.countryId?.name}</td>
                                    <td>{result?.name}</td>
                                    <td>{stringToDate(result?.updated_at)}</td>
                                    <td>{result?.is_active ? `Active` : `Inactive`}</td>
                                    <td>
                                        <div className='d-flex justify-content-end flex-shrink-0'>
                                        <Link
                                            to={`/city/${result?._id}`}
                                            className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                                            >
                                            <KTIcon iconName='pencil' className='fs-3' />
                                            </Link>
                                            <span onClick={(e) => deleteCity(result?._id)}
                                             className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                                            >
                                            <KTIcon iconName='trash' className='fs-3' />
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                   )
                                })
                               :
                                <tr><td>No Cities Found</td></tr>
                              }
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>    
            </div>
            { isSuccess && <AlertBox redirectUrl={null} close={closeAlert} type={`success`}>{successMsg}</AlertBox> }
            { isFailed && <AlertBox redirectUrl={null}   close={closeAlert} type={`error`}>{errorMsg}</AlertBox> }
  
        </>
    )
}

export default CityList;
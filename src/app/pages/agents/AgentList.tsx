import {FC , useState, useEffect} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { KTIcon } from '../../../_metronic/helpers';
import { toAbsoluteUrl } from '../../../_metronic/helpers';
import {Link} from 'react-router-dom';
import { stringToDate } from '../../../common/Date';
import { getRequest } from '../../modules/auth/core/_requests';
import ReactPaginate from "react-paginate"; 
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IconContext } from "react-icons"; 
import "../../assets/sass/pagnition.scss";
// import { deleteRequest } from '../../modules/auth/core/_requests';
// import AlertBox from '../../../common/AlertBox';

const AgentList : FC = () => {

    const [rowData, setRowData] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const pageSize = 10;
    // const [isSuccess, setIsSuccess] = useState(false);
    // const [successMsg, setSuccessMsg] = useState(``);
    // const [errorMsg, setErrorMsg] = useState(``);
    // const [isFailed, setIsFailed] = useState(false);

    const getData = async () => {
        const countryData = await getRequest(`/agents/list`,`?pageIndex=${page}&pageSize=${pageSize}`);

        const lookupObj = [countryData];
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
                agentData : d[0]?.data?.status === 'ok' ? d[0]?.data : [] ,
            }
            setRowData(dataobj?.agentData?.data);
            setTotal(dataobj?.agentData?.totalCount)
        })

    }

    useEffect(() => {
        async function fetchData() {
            await getData();
        }
        fetchData()
    }, [page])


    return (
        <>
            <PageTitle>AGENTS</PageTitle>
            <div className='row g-5 g-xl-8'>
                <div className={`card `}>
                    <div className='card-header border-0 pt-5'>
                        <h3 className='card-title align-items-start flex-column'>
                         <span className='card-label fw-bold fs-3 mb-1'>Agent List</span>
                        </h3>

                        <div  className='card-toolbar' data-bs-toggle='tooltip' data-bs-placement='top'  data-bs-trigger='hover' title='Click to add a user'>
                            <Link to={`/agent/create`} className='btn btn-sm btn-light-primary'>
                                <KTIcon iconName='plus' className='fs-3' />
                                New Agent
                            </Link>
                        </div>
                    </div>
                    <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px'>Logo</th>
                                <th className='min-w-200px'>Company Name</th>
                                <th className='min-w-100px'>Services</th>
                                <th className='min-w-100px'>Type</th>
                                <th className='min-w-150px'>Registered On</th>
                                <th className='min-w-150px'>Updated On</th>
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
                                    <td>
                                        <div className='d-flex align-items-center'>
                                            <div className='symbol symbol-45px me-5'>
                                                <img style={{width: 'auto'}} src={toAbsoluteUrl('media/avatars/agent-log.jpg')} alt='' />
                                            </div>
                                        </div>    
                                    </td>
                                    <td>
                                        <Link to={`/agent/${result?._id}`}>
                                         {result?.companyName}
                                        </Link>
                                    </td>
                                    <td>Laundry Services</td>
                                    <td>Online</td>
                                    <td>29/12/2000</td>
                                    <td>{stringToDate(result?.updated_at)}</td>
                                    <td>{result?.is_active ? `Active` : `Inactive`}</td>
                                    <td>
                                    <div className='d-flex justify-content-end flex-shrink-0'>
                                        <Link 
                                         to={`/agent/${result?._id}`}
                                         className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'>
                                            <KTIcon iconName='pencil' className='fs-3' />
                                        </Link>
                                        <Link to='#' className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'>
                                            <KTIcon iconName='trash' className='fs-3' />
                                        </Link>
                                    </div>
                                    </td>
                                </tr>
                                   )
                                })
                               :
                                <tr><td>No Agents Found</td></tr>
                              }

                            </tbody>
                        </table>
                        {total > pageSize &&
                                <div className='pagewrapper'>
                                    <ReactPaginate
                                        containerClassName={"pagination"}
                                        pageClassName={"page-item"}
                                        activeClassName={"active"}
                                        onPageChange={(event) => setPage(event.selected)}
                                        pageCount={Math.ceil(total / pageSize)}
                                        breakLabel="..."
                                        previousLabel={
                                            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                                                <AiFillLeftCircle />
                                            </IconContext.Provider>
                                        }
                                        nextLabel={
                                            <IconContext.Provider value={{ color: "#B8C1CC", size: "36px" }}>
                                                <AiFillRightCircle />
                                            </IconContext.Provider>
                                        }
                                    />
                                </div>
                            }


                        </div>
                    </div>
                </div>    
            </div>    
        </>
    )
}

export default AgentList;
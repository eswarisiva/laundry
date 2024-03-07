import {FC, useState, useEffect} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { StatisticsWidget2 } from '../../../_metronic/partials/widgets';
import { getRequest } from '../../modules/auth/core/_requests'; 
import { useParams } from 'react-router-dom';


const AgentItems : FC = () => {

    const [rowData, setRowData] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const pageSize = 10;
    const {agentId} = useParams();

    const getData = async () => {
        const itemData = await getRequest(`/agents/items/${agentId}?pageIndex=${page}&pageSize=${pageSize}`,``);

        const lookupObj = [itemData];
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
                itemData : d[0]?.data?.status === 'ok' ? d[0]?.data?.data : [] ,
            }
            setRowData(dataobj?.itemData);
            setTotal(dataobj?.itemData?.totalCount);
    
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
            <PageTitle>ITEMS PRICING</PageTitle>
            <div className='row g-5 g-xl-8'>
                <div className='row g-5 col-xl-12'>

                    {
                        rowData?.length > 0 ?
                            rowData.map((result: any) => {

                                return (
                                    <div className='col-xl-3' key={result?._id}>
                                        <StatisticsWidget2
                                            className='card-xl-stretch mb-xl-8'
                                            avatar={`http://agentapi.flexiclean.me/${result?.productId?.productImageURL}`}
                                            title={result?.productId?.productName}
                                            description={result?.productId?.categoryId?.categoryName}
                                        />
                                    </div>
                                )
                            })
                            :
                            <tr><td>No Items Found</td></tr>
                    }


                </div>
            </div>
        </>
    )
}

export default AgentItems;
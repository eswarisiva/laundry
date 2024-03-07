import {FC , useState, useEffect} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { getRequest } from '../../modules/auth/core/_requests';
import { useParams } from 'react-router-dom';

const AgentTimeslots : FC = () => {

    let date = new Date().toISOString().slice(0, 10);

    const [rowData, setRowData] = useState([]);
    const [amSessions, setAmSessions] = useState([]);
    const [pmSessions, setPmSessions] = useState([]);
    const [filterDate, setFilterDate] = useState(date);
    const [dayName, setDayName] = useState(new Date().toLocaleDateString('en-us', { weekday: 'long' }));

    const {agentId} = useParams();
    
    const GetDates = ()  => {
        var aryDates = [];

        let startDate = new Date();
        for (var i = 0; i <= 6; i++) {
            let txt = '';
            if(i === 0) {
                txt = 'st';
            } else if(i >= 1 && i <= 2){
                txt = 'nd';
            }  else {
                txt = 'th';
            }
            var currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            aryDates.push({ value: `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}` , label: `${currentDate.getDate()}${txt} ${currentDate.toLocaleString('default', { month: 'short' })}, ${DayAsString(currentDate.getDay()) } ` });
        }
    
        return aryDates;
    }

    const DayAsString = (dayIndex : number) => {
        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
    
        return weekdays[dayIndex];
    }

    const fetchResults = (data: any) => {
        console.log(data?.value)
       setFilterDate(data?.value);
       setDayName(new Date(data?.value).toLocaleDateString('en-us', { weekday: 'long' }))
    }

    const getData = async (filterDate: any) => {
        const timeslotData = await getRequest(`/agents/timeslots/${agentId}`,`?date=${filterDate}&day=${dayName}`);

        const lookupObj = [timeslotData];
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
                timeslotData : d[0]?.data?.status === 'ok' ? d[0]?.data : [] ,
            }
            setRowData(dataobj?.timeslotData?.data);
            setAmSessions(dataobj?.timeslotData?.data.filter((i : any) =>i?.session === 'AM'));
            setPmSessions(dataobj?.timeslotData?.data.filter((i : any) =>i?.session === 'PM'));
        })

    }


    useEffect(() => {
        async function fetchData() {
            await getData(filterDate);
        }
        fetchData()
    }, [filterDate])
   

    return (
        <>
            <PageTitle>TIMESLOTS</PageTitle>

            <div className='row g-6 g-xl-9 mb-8'>
            {
                GetDates().map((date) => {
                    return <div onClick={() => fetchResults(date)} className='bg-light-warning' style={{width: '120px', textAlign: 'center', marginRight: '15px' , padding: '10px', cursor: 'pointer'}}>
                                {date?.label}
                        </div>
                })
            }
            </div>

            <h3 className='card-title align-items-start flex-column mb-8'>
                <span className='card-label fw-bold fs-3 mb-1'>AM SESSIONS</span>
            </h3>


            <div className="d-flex flex-wrap mb-8">

            { 
                                 amSessions?.length > 0 ?   
                                 amSessions.map((result : any) => { 

                                    return  (
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">{result?.label}</div>
                    </div>
                </div> 
                                    )
                                 })
                :  `No Slots Available`
                                }
                 

            </div>


            <h3 className='card-title align-items-start flex-column mb-8'>
                <span className='card-label fw-bold fs-3 mb-1'>PM SESSIONS</span>
            </h3>


            <div className="d-flex flex-wrap">

            { 
                                 pmSessions?.length > 0 ?   
                                 pmSessions.map((result : any) => { 

                                    return  (
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">{result?.label}</div>
                    </div>
                </div>
                    )
                })
:  `No Slots Available`
               }
                
            </div>

        </>
    )
}

export default AgentTimeslots;
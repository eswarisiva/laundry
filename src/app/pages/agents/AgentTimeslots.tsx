import {FC} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';

const AgentTimeslots : FC = () => {
    
    const GetDates = ()  => {
        var aryDates = [];

        let startDate = new Date();
        for (var i = 0; i <= 6; i++) {
            let txt = '';
            if(i === 0) {
                txt = 'st';
            } else if(i >= 1 && i <= 2){
                txt = 'nd';
            } else {
                txt = 'th';
            }
            var currentDate = new Date();
            currentDate.setDate(startDate.getDate() + i);
            aryDates.push(`${currentDate.getDate()}${txt} ${currentDate.toLocaleString('default', { month: 'short' })}, ${DayAsString(currentDate.getDay())} `);
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

    console.log(GetDates())
   

    return (
        <>
            <PageTitle>TIMESLOTS</PageTitle>

            <div className='row g-6 g-xl-9 mb-8'>
            {
                GetDates().map((date) => {
                    return <div className='bg-light-warning' style={{width: '120px', textAlign: 'center', marginRight: '15px' , padding: '10px'}}>
                                {date}
                        </div>
                })
            }
            </div>

            <h3 className='card-title align-items-start flex-column mb-8'>
                <span className='card-label fw-bold fs-3 mb-1'>AM SESSIONS</span>
            </h3>


            <div className="d-flex flex-wrap mb-8">
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">09:00 AM</div>
                    </div>
                </div>
                
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">10:00 AM</div>
                    </div>
                </div>

                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">11:00 AM</div>
                    </div>
                </div>
            </div>


            <h3 className='card-title align-items-start flex-column mb-8'>
                <span className='card-label fw-bold fs-3 mb-1'>PM SESSIONS</span>
            </h3>


            <div className="d-flex flex-wrap">
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">12:00 PM</div>
                    </div>
                </div>
                
                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">04:00 PM</div>
                    </div>
                </div>

                <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="fs-2 fw-bolder">05:00 PM</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AgentTimeslots;
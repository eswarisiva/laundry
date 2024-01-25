import {FC} from 'react';
import { useSearchParams  } from 'react-router-dom';

import {
    StatisticsWidget5 
} from '../../../_metronic/partials/widgets';

const AgentUpdate : FC = () => {

    const [searchParams, setSearchParams] = useSearchParams();
   return (
    <>
           <div className='row g-5 g-xl-8'>
               <div className='row g-5 col-xl-12'>
                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='COMPANY'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/profile?agentId=${searchParams.get('agentId')}`}  
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='card-xl-stretch mb-5 mb-xl-8'
                           svgIcon=''
                           color='light-warning'
                           iconColor='black'
                           title='LOCATION & CHARGES'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/locationCharges?agentId=${searchParams.get('agentId')}`} 
                       />
                   </div>


                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='TIMESLOTS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/timeslots?agentId=${searchParams.get('agentId')}`} 
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='USERS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/users?agentId=?agentId=${searchParams.get('agentId')}`} 
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='MY SUBSCRIPTIONS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/subscriptions?agentId=${searchParams.get('agentId')}`} 
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='ITEMS PRICING'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/items?agentId=${searchParams.get('agentId')}`}  
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='WALLETS & PAYOUTS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/wallet?agentId=${searchParams.get('agentId')}`} 
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='ORDERS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/orders?agentId=${searchParams.get('agentId')}`}  
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='STATS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/stats?agentId=${searchParams.get('agentId')}`}  
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='REVIEW & RATINGS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/agent/ratings?agentId=${searchParams.get('agentId')}`}  
                       />
                   </div>




               </div>
           </div>
    </>
   )
}

export default AgentUpdate;
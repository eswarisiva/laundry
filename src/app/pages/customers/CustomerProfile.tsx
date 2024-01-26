import { FC } from "react";
import { PageTitle } from "../../../_metronic/layout/core";

import { StatisticsWidget5 } from "../../../_metronic/partials/widgets";

const CustomerProfile : FC = () => {
    return (
        <>
           <PageTitle>CUSTOMER PROFILE</PageTitle>

           <div className='row g-5 g-xl-8'>
               <div className='row g-5 col-xl-12'>
                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='ACCOUNT'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/customer/account`}
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='card-xl-stretch mb-5 mb-xl-8'
                           svgIcon=''
                           color='light-warning'
                           iconColor='black'
                           title='SAVED ADDRESSES'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/customer/addresses`}
                       />
                   </div>


                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='PREFERENCES'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/customer/preferences`}
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='GIFT CARDS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/customer/giftCards`}
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='TRANSACTIONS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/customer/transactions`}
                       />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='SAVED CARDS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/customer/cards`}
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
                           url={`/customer/orders`}
                        />
                   </div>

                   <div className='col-xl-4'>
                       <StatisticsWidget5
                           className='mb-xl-4'
                           svgIcon=''
                           color='light-warning'
                           iconColor='white'
                           title='SETTINGS'
                           titleColor='black'
                           description=''
                           descriptionColor='white'
                           url={`/customer/settings`}
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
                           url={`/customer/reviews`}
                       />
                   </div>

               </div>
           </div>
        </>
    )
}

export default CustomerProfile;
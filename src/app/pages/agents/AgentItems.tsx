import {FC} from 'react';
import { PageTitle } from '../../../_metronic/layout/core';
import { StatisticsWidget2 } from '../../../_metronic/partials/widgets';


const AgentItems : FC = () => {
    return (
        <>
            <PageTitle>ITEMS PRICING</PageTitle>
            <div className='row g-5 g-xl-8'>
               <div className='row g-5 col-xl-12'>
                    <div className='col-xl-3'>
                        <StatisticsWidget2
                            className='card-xl-stretch mb-xl-8'
                            avatar='media/svg/avatars/029-boy-11.svg'
                            title='Pricing'
                            description='Item Image'
                        />
                    </div>

                    <div className='col-xl-3'>
                    <StatisticsWidget2
                            className='card-xl-stretch mb-xl-8'
                            avatar='media/svg/avatars/029-boy-11.svg'
                            title='Pricing'
                            description='Item Image'
                        />
                    </div>

                    <div className='col-xl-3'>
                        <StatisticsWidget2
                            className='card-xl-stretch mb-xl-8'
                            avatar='media/svg/avatars/029-boy-11.svg'
                            title='Pricing'
                            description='Item Image'
                        />
                    </div>
               </div>   
            </div>
        </>
    )
}

export default AgentItems;
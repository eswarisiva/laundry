import {FC, useState} from 'react';
import { PageTitle } from '../../../../_metronic/layout/core';
import PersonalDetail from './include/PersonalDetail';
import Permission from './include/Permission';


const UserDetail : FC = () => {

    const [ steps, setSteps ] = useState(1);

  
    const nextStep = (step : any ) => {
      setSteps(step);
    }

    return  (
        <>
           <PageTitle>ADD/UPDATE USER </PageTitle>

            <div className='card'>
                <div className='card-body'>

                    <div className='stepper stepper-links d-flex flex-column pt-15'>

                        <div className='stepper-nav mb-10'>
                            <div onClick={(e) => nextStep(1)} className={`stepper-item ${steps === 1 ? `current` : ``}`} data-kt-stepper-element='nav'>
                                <h3 className='stepper-title'>1. User Personal Details</h3>
                            </div>

                            <div onClick={(e) => nextStep(2)} className={`stepper-item ${steps === 2 ? `current` : ``}`} data-kt-stepper-element='nav'>
                                <h3 className='stepper-title'>2. Permission Details</h3>
                            </div>
                        </div>
                        {steps === 1 &&
                        <div className='row g-5 g-xl-8' >
                            <PersonalDetail />
                        </div>
                        }   
                        {steps === 2 &&
                        <div className='row g-5 g-xl-8' >
                            <Permission />
                        </div>
                        }


                    </div>   

                </div>
            </div> 
        </>
    )
}    

export default UserDetail;
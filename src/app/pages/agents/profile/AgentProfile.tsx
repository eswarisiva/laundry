import {FC, useState } from 'react';
import Company from './include/Company';
import Address from './include/Address';
import Services from './include/Services';
import Working from './include/Working'; 
import Account from './include/Account'; 
import { PageTitle } from '../../../../_metronic/layout/core';

const AgentProfile : FC = () => {
    const [ steps, setSteps ] = useState(1);

   
     const nextStep = (step : any ) => {
      setSteps(step);
    }

  return (
    <>
      <PageTitle>UPDATE AGENT</PageTitle>
      <div className='card'>
        <div className='card-body'>
          <div
            className='stepper stepper-links d-flex flex-column pt-15'
          >
            <div className='stepper-nav mb-10'>
              <div onClick={(e) => nextStep(1)} className={`stepper-item ${steps === 1 ? `current` : ``}`} data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>1. Company</h3>
              </div>

              <div onClick={(e) => nextStep(2)} className={`stepper-item ${steps === 2 ? `current` : ``}`} data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>2. Address</h3>
              </div>

              <div onClick={(e) => nextStep(3)} className={`stepper-item ${steps === 3 ? `current` : ``}`} data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>3. Services</h3>
              </div>

              <div onClick={(e) => nextStep(4)} className={`stepper-item ${steps === 4 ? `current` : ``}`} data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>4. Working Hours</h3>
              </div>

              <div onClick={(e) => nextStep(5)} className={`stepper-item ${steps === 5 ? `current` : ``}`} data-kt-stepper-element='nav'>
                <h3 className='stepper-title'>5. Account</h3>
              </div>
            </div>
            {steps === 1 &&
              <div className='row g-5 g-xl-8' >
                <Company />
              </div>
            }

            {steps === 2 &&
              <div className='row g-5 g-xl-8'  >
                <Address />
              </div>

            }
            {steps === 3 &&
              <div className='row g-5 g-xl-8' >
                <Services />
              </div>
            }
            {steps === 4 &&
              <div className='row g-5 g-xl-8'>
                <Working />
              </div>
            }
            {steps === 5 &&
              <div className='current row g-5 g-xl-8'>
                <Account />
              </div>
            }

            {steps === 5 &&
              <div className='d-flex flex-stack pt-15'>
                <div className='mr-2'>
                  <button
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                  >

                    Cancel
                  </button>
                </div>

                <div>
                  <button type='submit' className='btn btn-lg btn-primary me-3'>
                    Submit
                  </button>
                </div>
              </div>

            }
          </div>
        </div>
      </div>
    </>
  )
}    

export default AgentProfile;
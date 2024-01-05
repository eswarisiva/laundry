import {FC, useRef, useState, useEffect} from 'react';
import { StepperComponent } from '../../../../_metronic/assets/ts/components';
import { KTIcon } from '../../../../_metronic/helpers';
import Company from './include/Company';

const AgentProfile : FC = () => {
    const stepperRef = useRef<HTMLDivElement | null>(null);
    const [ stepper, setStepper ] = useState<StepperComponent | null>(null);

    const loadStepper = () => {
        setStepper(StepperComponent.createInsance(stepperRef.current as HTMLDivElement))
    }

    useEffect(() => {
        if (!stepperRef.current) {
          return
        }
    
        loadStepper()
    }, [stepperRef])

    return (
        <>
           <div className='card'>
               <div className='card-body'>
        <div
          ref={stepperRef}
          className='stepper stepper-links d-flex flex-column pt-15'
          id='kt_create_account_stepper'
        >
          <div className='stepper-nav mb-5'>
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Company</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Address</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Services</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Working Hours</h3>
            </div>

            <div className='stepper-item' data-kt-stepper-element='nav'>
              <h3 className='stepper-title'>Account</h3>
            </div>
          </div>
       
                <div className='current row g-5 g-xl-8' data-kt-stepper-element='content'>
                    <Company />
                </div>

                <div data-kt-stepper-element='content'>
                
                </div>

                <div data-kt-stepper-element='content'>
                  
                </div>

                <div data-kt-stepper-element='content'>
                  
                </div>

                <div data-kt-stepper-element='content'>
                 
                </div>

                <div className='d-flex flex-stack pt-15'>
                  <div className='mr-2'>
                    <button
                      type='button'
                      className='btn btn-lg btn-light-primary me-3'
                      data-kt-stepper-action='previous'
                    >
                      <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                      Back
                    </button>
                  </div>

                  <div>
                    <button type='submit' className='btn btn-lg btn-primary me-3'>
                      <span className='indicator-label'>
                       <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                      </span>
                    </button>
                  </div>
                </div>
          
        </div>
               </div>
           </div>
        </>
    )
}    

export default AgentProfile;
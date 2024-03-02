import {FC, useState, useEffect } from 'react';
import * as Yup from 'yup';
import Company from './include/Company';
import Address from './include/Address';
import Services from './include/Services';
import Working from './include/Working'; 
import Account from './include/Account'; 
import { PageTitle } from '../../../../_metronic/layout/core';
import { getRequest } from '../../../modules/auth/core/_requests';
import { postRequest } from '../../../modules/auth/core/_requests';
import { useParams } from 'react-router-dom';
import {useFormik} from 'formik';

const AgentProfile : FC = () => {
    const [ steps, setSteps ] = useState(1);
    const [company, setCompany] = useState({});
    const [address, setAddress] = useState([]);
    const [services, setServices] = useState([]);
    const [workingHours, setWorkingHours] = useState([]);
    const [account, setAccount] = useState([]);
    const {agentId} = useParams();

    const initialValues = {
      companyName: '',
      ownerName: '',
      haveTax: '',

      street: '',
      building: '',
      block: '',
      areaId: '',
      cityId: '', 
      stateId: '',
      countryId: '',

      logistics: '',
      pos: '',
      online: '',

      name: '',
      email: '',
      dialCode: '',
      mobile: '',

    }
    
    const [formData, setFormData] = useState(initialValues);
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState(``);
    const [errorMsg, setErrorMsg] = useState(``);
    const [isFailed, setIsFailed] = useState(false);
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [cityList, setCityList] = useState([]);
    const [areaList, setAreaList] = useState([]);
   
    const nextStep = (step : any ) => {
      setSteps(step);
    }

    const formik = useFormik({
      initialValues : formData ,
      enableReinitialize:true,
      //validationSchema: itemSchema,
      onSubmit: async (values) => {
        //   setLoading(true);

        //   let dataObj =  {
        //       productName : values?.productName,
        //       shortDesc: values?.shortDesc,
        //       serviceId: values?.serviceId,
        //       categoryId: values?.categoryId,
        //   }
        //   console.log(values);
        //   const formData = new FormData();
        //   formData.append("productImageURL", values?.productImageURL);
        //   formData.append("data", JSON.stringify(dataObj));

        // try {
          
        //   if(itemId !== 'create') {
        //       await patchRequest(`/master/product/${itemId}`, formData)
        //       .then((response) => {
        //           if(response?.data?.status === 'ok') {
        //               setIsSuccess(true);
        //               setSuccessMsg(`Item has been updated successfully`);
        //               setLoading(false);
        //           } else {
        //               setIsFailed(true);
        //               setLoading(false);
        //               setErrorMsg(`Something Went Wrong`);
        //           }
        //       });
        //   } else {
        //       await postRequest(`/master/product`, formData)
        //       .then((response) => {
        //           if(response?.data?.status === 'ok') {
        //               setIsSuccess(true);
        //               setSuccessMsg(`Item has been added successfully`);
        //               setLoading(false);
        //           } else {
        //               setIsFailed(true);
        //               setLoading(false);
        //               setErrorMsg(`Something Went Wrong`);
        //           }
        //       });
        //   }
        // } catch (error) {
        //   setIsFailed(true);
        //   setLoading(false);
        //   setErrorMsg(`Something Went Wrong`);
        // }
    
      },
  })  

  const getData = async () => {
    const companyData = await getRequest(`/agents/company/${agentId}`,``);
    const addressData = await getRequest(`/agents/address/${agentId}`,``);
    const servicesData = await getRequest(`/agents/service/${agentId}`,``);
    const hours = await getRequest(`/agents/workinghrs/${agentId}`,``);
    const accountInfo = await getRequest(`/agents/accountInfo/${agentId}`,``);

    const countryData = await postRequest(`/master/countries`,``);
    const stateData =   await postRequest(`/master/states`, `` );
    const cityData =    await postRequest(`/master/cities`, `` );
    const areaData =    await postRequest(`/master/areas`, `` );


    const lookupObj = [companyData, addressData, servicesData, hours, accountInfo, countryData, stateData, cityData, areaData ];
    let data1: Array<any> = [];
    return Promise.allSettled(lookupObj)
      .then((result) => {
        result.forEach((res: any) => {
          data1.push(res.value);
        })
        return data1;
      })
      .then((d) => {
        const dataobj = {
          companyData: d[0]?.data?.status === 'ok' ? d[0]?.data?.data : {},
          addressData: d[1]?.data?.status === 'ok' ? d[1]?.data?.data : {},
          servicesData: d[2]?.data?.status === 'ok' ? d[2]?.data?.data : {},
          hoursData: d[3]?.data?.status === 'ok' ? d[3]?.data?.data: {},
          accountData: d[4]?.data?.status === 'ok' ? d[4]?.data?.data : {},
          countryData: d[5]?.data?.status === 'ok' ? d[5]?.data?.data : [] ,
          stateData: d[6]?.data?.status === 'ok' ? d[6]?.data?.data : [],
          cityData: d[7]?.data?.status === 'ok' ? d[7]?.data?.data : [],
          areaData: d[8]?.data?.status === 'ok' ? d[8]?.data?.data : [],
        }
        setCountryList(dataobj?.countryData);
        setStateList(dataobj?.stateData);
        setCityList(dataobj?.cityData);
        setAreaList(dataobj?.areaData);
        // setServices(dataobj?.servicesData?.data);
        // setWorkingHours(dataobj?.hoursData?.data);
        // setAccount(dataobj?.accountData?.data);
        const initialValues = {
          companyName: dataobj?.companyData?.companyName,
          ownerName: dataobj?.companyData?.ownerName,
          haveTax: dataobj?.companyData?.haveTax,
    
          street: dataobj?.addressData?.street,
          building: dataobj?.addressData?.building,
          block: dataobj?.addressData?.block,
          areaId: dataobj?.addressData?.areaId?._id,
          cityId: dataobj?.addressData?.cityId?._id, 
          stateId: dataobj?.addressData?.stateId?._id,
          countryId: dataobj?.addressData?.countryId?._id,
    
          logistics: dataobj?.servicesData?.logistics,
          pos: dataobj?.servicesData?.pos,
          online: dataobj?.servicesData?.online,
    
          name:  dataobj?.accountData?.name,
          email:  dataobj?.accountData?.email,
          dialCode: dataobj?.accountData?.dialCode,
          mobile: dataobj?.accountData?.dialCode+" - "+dataobj?.accountData?.mobile,
    
        }
        setFormData(initialValues);
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
                <Company formik={formik}/>
              </div>
            }

            {steps === 2 &&
              <div className='row g-5 g-xl-8'  >
                <Address 
                  formik={formik}
                  countryList={countryList}
                  areaList={areaList}
                  stateList={stateList}
                  cityList={cityList}
                />
              </div>

            }
            {steps === 3 &&
              <div className='row g-5 g-xl-8' >
                <Services formik={formik} />
              </div>
            }
            {steps === 4 &&
              <div className='row g-5 g-xl-8'>
                <Working />
              </div>
            }
            {steps === 5 &&
              <div className='current row g-5 g-xl-8'>
                <Account formik={formik} />
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
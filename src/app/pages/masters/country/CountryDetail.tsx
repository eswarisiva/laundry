import {FC , useState, useEffect} from 'react';
import * as Yup from 'yup';
import { PageTitle } from '../../../../_metronic/layout/core';
import {useFormik} from 'formik';
import clsx from 'clsx';
import AlertBox from '../../../../common/AlertBox';
import { postRequest , patchRequest } from '../../../modules/auth/core/_requests';  
import { useParams } from 'react-router-dom';

const countrySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 Character')
      .max(50, 'Maximum 50 Character')
      .required(' Name is required'),
    iso2: Yup.string()
      .min(2, 'ISO 2 must be two Characters')
      .max(2, 'ISO 2 must be two Characters')
      .required('ISO 2 must be two Characters'),
    iso3 : Yup.string()
      .min(3, 'ISO 3 must be two Characters')
      .max(3, 'ISO 3 must be two Characters')
      .required('ISO 3 must be two Characters'),  
    dialCode : Yup.string()
       .required('Dial Code is required'),   
    currencyId : Yup.string()
       .required('Currency Id is required'),   
    hasState : Yup.string()
       .required('Has State is required'),   

})


const CountryDetail : FC = () => {
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState(``);
    const [errorMsg, setErrorMsg] = useState(``);
    const [isFailed, setIsFailed] = useState(false);
    const {countryId} = useParams();

    const initialValues = {
        name: null,
        iso2: null,
        iso3: null,
        dialCode: null,
        currencyId: null,
        hasState: null
    }

    const [formData, setFormData] = useState(initialValues);
    const [currencyList, setCurrencyList] = useState([]);
   
    const closeAlert = () => {
        if(isSuccess) setIsSuccess(false);
        if(isFailed) setIsFailed(false);
    }

    
    const formik = useFormik({
        initialValues : formData ,
        enableReinitialize:true,
        validationSchema: countrySchema,
        onSubmit: async (values) => {
          setLoading(true);

          let reqBody = {
            name : values?.name,
            iso2 : values?.iso2,
            iso3 : values?.iso3,
            dialCode : values?.dialCode,
            currencyId : values?.currencyId,
            hasState : values?.hasState,
        }

          try {
            
            if(countryId !== 'create') {
                await patchRequest(`/master/country/${countryId}`, reqBody)
                .then((response) => {
                    if(response?.data?.status === 'ok') {
                        setIsSuccess(true);
                        setSuccessMsg(`Country has been updated successfully`);
                        setLoading(false);
                    } else {
                        setIsFailed(true);
                        setLoading(false);
                        setErrorMsg(`Something Went Wrong`);
                    }
                });
            } else {
                await postRequest(`/master/country`, reqBody)
                .then((response) => {
                    if(response?.data?.status === 'ok') {
                        setIsSuccess(true);
                        setSuccessMsg(`Country has been added successfully`);
                        setLoading(false);
                    } else {
                        setIsFailed(true);
                        setLoading(false);
                        setErrorMsg(`Something Went Wrong`);
                    }
                });
            }
          } catch (error) {
            setIsFailed(true);
            setLoading(false);
            setErrorMsg(`Something Went Wrong`);
          }
      
        },
    })


    
    const getData = async () => {
        const countryData = countryId !== 'create' ?  await postRequest(`/master/countries`,{"_id": countryId})  : 0;
        const currencyData = await postRequest(`/master/currencies`,``);

        const lookupObj = [countryData, currencyData];
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
                countryData : d[0] && d[0]?.data?.status === 'ok' ? d[0]?.data?.data[0] : 0 ,
                currencyData : d[1]?.data?.status === 'ok' ? d[1]?.data?.data : [] ,
            }
            setCurrencyList(dataobj?.currencyData);

            if(dataobj?.countryData) {
                const initialValues = {
                    name: dataobj?.countryData?.name,
                    iso2: dataobj?.countryData?.iso2,
                    iso3: dataobj?.countryData?.iso3,
                    dialCode:  dataobj?.countryData?.dialCode,
                    currencyId:  dataobj?.countryData?.currencyId?._id,
                    hasState:  dataobj?.countryData?.hasState
                }
                setFormData(initialValues);
            }


        })

    }

    useEffect(() => {

        async function loadData () {
              await getData();   
        }
        loadData ();
    },[]) 

    return (
        <>
            <PageTitle>ADD/UPDATE COUNTRY</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className={`card `}>

                    <div className='card-body py-3'>
                        <form 
                        onSubmit={formik.handleSubmit}                            
                        noValidate className='form'>
                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Name</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            {...formik.getFieldProps('name')}
                                            type='text'
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.name && formik.errors.name},
                                                {
                                                  'is-valid': formik.touched.name && !formik.errors.name,
                                                }
                                              )}
                                            placeholder='Enter Country Name'
                                            />
                                             {formik.touched.name && formik.errors.name && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.name}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>   

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Code (ISO2)</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            {...formik.getFieldProps('iso2')}
                                            type='text'
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.iso2 && formik.errors.iso2},
                                                {
                                                  'is-valid': formik.touched.iso2 && !formik.errors.iso2,
                                                }
                                              )}
                                            placeholder='Enter ISO2'
                                            />
                                             {formik.touched.iso2 && formik.errors.iso2 && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.iso2}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>   

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Code (ISO3)</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            {...formik.getFieldProps('iso3')}
                                            type='text'
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.iso3 && formik.errors.iso3},
                                                {
                                                  'is-valid': formik.touched.iso3 && !formik.errors.iso3,
                                                }
                                              )}
                                            placeholder='Enter ISO3'
                                            />
                                             {formik.touched.iso3 && formik.errors.iso3 && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.iso3}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>   


                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Tele Code</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                            {...formik.getFieldProps('dialCode')}
                                            type='text'
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.dialCode && formik.errors.dialCode},
                                                {
                                                  'is-valid': formik.touched.dialCode && !formik.errors.dialCode,
                                                }
                                              )}
                                            placeholder='Enter Tele Code'
                                            />
                                             {formik.touched.dialCode && formik.errors.dialCode && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.dialCode}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Currency</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                        <select

                                            {...formik.getFieldProps('currencyId')}
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.currencyId && formik.errors.currencyId},
                                                {
                                                  'is-valid': formik.touched.currencyId && !formik.errors.currencyId,
                                                }
                                              )}
                                            >
                                            <option value=''>Select a Currency...</option>
                                            {
                                            currencyList.map((e :any) => {
                                               return <option value={e._id}>{e.currencySymbol} - {e.currency}</option>
                                            }  )}
                                        </select>

                                        {formik.touched.currencyId && formik.errors.currencyId && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.currencyId}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country Has State</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                        <select
                                            {...formik.getFieldProps('hasState')}
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.hasState && formik.errors.hasState},
                                                {
                                                  'is-valid': formik.touched.hasState && !formik.errors.hasState,
                                                }
                                              )}
                                            >
                                            <option value=''>Select...</option>
                                            <option value='true'>YES</option>
                                            <option value='false'>NO</option>
                                        </select>
                                        {formik.touched.hasState && formik.errors.hasState && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.hasState}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div> 

                            <div className='card-footer d-flex justify-content-end py-6 px-9'>
                                <button type='submit' className='btn btn-primary' disabled={loading}>
                                    {!loading && 'Save Changes'}
                                    {loading && (
                                        <span className='indicator-progress' style={{display: 'block'}}>
                                        Please wait...{' '}
                                        <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                        </span>
                                    )}
                                </button>
                             </div>
                        </form>    
                    </div>
                </div>    
            </div>  
            { isSuccess && <AlertBox redirectUrl={`/country`} close={closeAlert} type={`success`}>{successMsg}</AlertBox> }
          { isFailed && <AlertBox   redirectUrl={null} close={closeAlert} type={`error`}>{errorMsg}</AlertBox> }
     
        </>
    )
}

export default CountryDetail;
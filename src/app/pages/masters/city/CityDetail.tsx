import {FC , useState, useEffect} from 'react';
import * as Yup from 'yup';
import { PageTitle } from '../../../../_metronic/layout/core';
import {useFormik} from 'formik';
import clsx from 'clsx';
import AlertBox from '../../../../common/AlertBox';
import { postRequest , patchRequest } from '../../../modules/auth/core/_requests';  
import { useParams } from 'react-router-dom';

const citySchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum 3 Character')
      .max(50, 'Maximum 50 Character')
      .required('City Name is required'),
    stateId : Yup.string()
      .required('State is required'), 
    countryId : Yup.string()
       .required('Country is required'),   
})


const CityDetail : FC = () => {
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState(``);
    const [errorMsg, setErrorMsg] = useState(``);
    const [isFailed, setIsFailed] = useState(false);
    const {cityId} = useParams();

    const initialValues = {
        name: '',
        stateId: '',
        countryId: '',
    }

    const [formData, setFormData] = useState(initialValues);
    const [countryList, setCountryList] = useState([]);
    const [stateList, setStateList] = useState([]);

    const closeAlert = () => {
        if(isSuccess) setIsSuccess(false);
        if(isFailed) setIsFailed(false);
    }

    const formik = useFormik({
        initialValues : formData ,
        enableReinitialize:true,
        validationSchema: citySchema,
        onSubmit: async (values) => {
          setLoading(true);

            let reqBody = {
                name : values?.name,
                stateId : values?.stateId,
                countryId : values?.countryId,
            }

          try {
            
            if(cityId !== 'create') {
                await patchRequest(`/master/city/${cityId}`, reqBody)
                .then((response) => {
                    if(response?.data?.status === 'ok') {
                        setIsSuccess(true);
                        setSuccessMsg(`City has been updated successfully`);
                        setLoading(false);
                    } else {
                        setIsFailed(true);
                        setLoading(false);
                        setErrorMsg(`Something Went Wrong`);
                    }
                });
            } else {
                await postRequest(`/master/city`, reqBody)
                .then((response) => {
                    if(response?.data?.status === 'ok') {
                        setIsSuccess(true);
                        setSuccessMsg(`City has been added successfully`);
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
        const countryData = await postRequest(`/master/countries`,``);
        const stateData =   await postRequest(`/master/states`, `` );
        const cityData =  cityId !== 'create' ?   await postRequest(`/master/cities`, {"_id": cityId} ) : 0;

        const lookupObj = [countryData, stateData, cityData];
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
                countryData : d[0]?.data?.status === 'ok' ? d[0]?.data?.data : 0 ,
                stateData : d[1]?.data?.status === 'ok' ? d[1]?.data?.data : [] ,
                cityData :  d[2] && d[2]?.data?.status === 'ok' ? d[2]?.data?.data[0] : [] ,
            }
            setCountryList(dataobj?.countryData);
            setStateList(dataobj?.stateData);

            if(dataobj?.cityData) {
                const initialValues = {
                    name: dataobj?.cityData?.name,
                    countryId:  dataobj?.cityData?.countryId?._id,
                    stateId:  dataobj?.cityData?.stateId?._id,
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
            <PageTitle>ADD/UPDATE CITY</PageTitle>

            <div className='row g-5 g-xl-8'>
                <div className={`card `}>

                    <div className='card-body py-3'>
                        <form   onSubmit={formik.handleSubmit}    noValidate className='form'>
                        <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Country</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                        <select

                                            {...formik.getFieldProps('countryId')}
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.countryId && formik.errors.countryId},
                                                {
                                                  'is-valid': formik.touched.countryId && !formik.errors.countryId,
                                                }
                                              )}
                                            >
                                            <option value=''>Select a Country...</option>
                                            {
                                            countryList.map((e :any) => {
                                               return <option value={e._id}>{e.iso3} - {e.name}</option>
                                            }  )}
                                        </select>

                                        {formik.touched.countryId && formik.errors.countryId && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.countryId
                                                    }</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>State / Province</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <select
                                            {...formik.getFieldProps('stateId')}
                                            className={clsx(
                                                'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                {'is-invalid': formik.touched.stateId && formik.errors.stateId},
                                                {
                                                  'is-valid': formik.touched.stateId && !formik.errors.stateId,
                                                }
                                              )}
                                                >
                                                <option value=''>Select a State...</option>
                                                {
                                            stateList.map((e :any) => {
                                               return <option value={e._id}>{e.name}</option>
                                            }  )}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>  

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>City</label>

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
                                            placeholder='Enter City'
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
            { isSuccess && <AlertBox redirectUrl={`/city`} close={closeAlert} type={`success`}>{successMsg}</AlertBox> }
            { isFailed && <AlertBox   redirectUrl={null} close={closeAlert} type={`error`}>{errorMsg}</AlertBox> }
     
        </>
    )
} 

export default CityDetail;
import {FC , useState , useEffect} from 'react';
import * as Yup from 'yup';
import { PageTitle } from '../../../../_metronic/layout/core';
import {useFormik} from 'formik';
import clsx from 'clsx';
import AlertBox from '../../../../common/AlertBox';
import { postRequest , patchRequest } from '../../../modules/auth/core/_requests';  
import { useParams } from 'react-router-dom';

const itemSchema = Yup.object().shape({
    productName: Yup.string()
      .min(3, 'Minimum 3 Character')
      .max(50, 'Maximum 50 Character')
      .required('Item Name is required'),
    // homeScreenOrderNo : Yup.number()
    //   .required('Home Screen Order No is required'),  
    serviceId : Yup.string()
      .required('Service is required'), 
    categoryId : Yup.string()
      .required('Category is required'), 
    icon : Yup.mixed()
       .required('Icon is required'),   
})

const ItemDetail : FC = () => {

    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [successMsg, setSuccessMsg] = useState(``);
    const [errorMsg, setErrorMsg] = useState(``);
    const [isFailed, setIsFailed] = useState(false);
    const {itemId} = useParams();

    const initialValues = {
        productName: null,
        shortDesc: null,
        icon: null,
        serviceId: null,
        categoryId: null
    }

    const [formData, setFormData] = useState(initialValues);
    const [serviceList, setServiceList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    const closeAlert = () => {
        if(isSuccess) setIsSuccess(false);
        if(isFailed) setIsFailed(false);
    }

    const formik = useFormik({
        initialValues : formData ,
        enableReinitialize:true,
        validationSchema: itemSchema,
        onSubmit: async (values) => {
            setLoading(true);

            let dataObj =  {
                productName : values?.productName,
                shortDesc: values?.shortDesc,
                serviceId: values?.serviceId,
                categoryId: values?.categoryId,
            }
            const formData = new FormData();
            formData.append("icon", values?.icon);
            formData.append("data", JSON.stringify(dataObj));

          try {
            
            if(itemId !== 'create') {
                await patchRequest(`/master/product/${itemId}`, formData)
                .then((response) => {
                    if(response?.data?.status === 'ok') {
                        setIsSuccess(true);
                        setSuccessMsg(`Item has been updated successfully`);
                        setLoading(false);
                    } else {
                        setIsFailed(true);
                        setLoading(false);
                        setErrorMsg(`Something Went Wrong`);
                    }
                });
            } else {
                await postRequest(`/master/product`, formData)
                .then((response) => {
                    if(response?.data?.status === 'ok') {
                        setIsSuccess(true);
                        setSuccessMsg(`Item has been added successfully`);
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
        const itemData =  itemId !== 'create' ?   await postRequest(`/master/products`, {"_id": itemId} ) : 0;
        const serviceData =   await postRequest(`/master/services`, `` );
        const categoryData =   await postRequest(`/master/categories`, `` );
       
        const lookupObj = [itemData, serviceData, categoryData];
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
                 itemData :  d[0] && d[0]?.data?.status === 'ok' ? d[0]?.data?.data[0] : [] ,
                 serviceData :  d[1] && d[1]?.data?.status === 'ok' ? d[1]?.data?.data : [] ,
                 categoryData :  d[1] && d[2]?.data?.status === 'ok' ? d[2]?.data?.data : [] ,
            }
            setServiceList(dataobj?.serviceData);
            setCategoryList(dataobj?.categoryData);

            if(dataobj?.itemData) {
                const initialValues = {
                    productName: dataobj?.itemData?.productName,
                    categoryId:  dataobj?.itemData?.categoryId,
                    serviceId:  dataobj?.itemData?.serviceId,
                    shortDesc:  dataobj?.itemData?.shortDesc,
                    icon:  dataobj?.itemData?.icon,
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
             <PageTitle>ADD/UPDATE ITEM</PageTitle>

            <div className='row g-5 g-xl-8'>

                <div className={`card `}>

                    <div className='card-body py-3'>
                        <form onSubmit={formik.handleSubmit} noValidate className='form'>
                        <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Service</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-9 fv-row'>
                                            <select
                                                {...formik.getFieldProps('serviceId')}
                                                className={clsx(
                                                    'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                    {'is-invalid': formik.touched.serviceId && formik.errors.serviceId},
                                                    {
                                                      'is-valid': formik.touched.serviceId && !formik.errors.serviceId,
                                                    }
                                                  )}
                                            >
                                                <option value=''>Select a Service...</option>
                                                {
                                                serviceList.map((e :any) => {
                                                return <option value={e._id}>{e.serviceName}</option>
                                                }  )}
                                            </select>
                                            {formik.touched.serviceId && formik.errors.serviceId && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.serviceId
                                                    }</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Category</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-9 fv-row'>
                                            <select
                                                {...formik.getFieldProps('categoryId')}
                                                className={clsx(
                                                    'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                    {'is-invalid': formik.touched.categoryId && formik.errors.categoryId},
                                                    {
                                                      'is-valid': formik.touched.categoryId && !formik.errors.categoryId,
                                                    }
                                                  )}
                                            >
                                                <option value=''>Select a Category...</option>
                                                {
                                                categoryList.map((e :any) => {
                                                return <option value={e._id}>{e.categoryName}</option>
                                                }  )}
                                            </select>
                                            {formik.touched.categoryId && formik.errors.categoryId && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.categoryId
                                                    }</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Item Name</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                                type='text'
                                                {...formik.getFieldProps('productName')}
                                                className={clsx(
                                                    'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                    {'is-invalid': formik.touched.productName && formik.errors.productName},
                                                    {
                                                      'is-valid': formik.touched.productName && !formik.errors.productName,
                                                    }
                                                  )}
                                                placeholder='Enter Item Name'
                                            />
                                             {formik.touched.productName && formik.errors.productName && (
                                                <div style={{color: 'red'}} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.productName
                                                    }</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label required fw-bold fs-6'>Icon Image</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                                type='file'
                                                accept="image/*"
                                                {...formik.getFieldProps('icon')}
                                                className={clsx(
                                                    'form-control form-control-lg form-control-solid mb-3 mb-lg-0',
                                                    { 'is-invalid': formik.touched.icon && formik.errors.icon },
                                                    {
                                                        'is-valid': formik.touched.icon && !formik.errors.icon,
                                                    }
                                                )}
                                                placeholder='Icon / Image'
                                            />
                                            {formik.touched.icon && formik.errors.icon && (
                                                <div style={{ color: 'red' }} className='fv-plugins-message-container'>
                                                    <span role='alert'>{formik.errors.icon
                                                    }</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mb-12'>
                                <label className='col-lg-4 col-form-label fw-bold fs-6'>Short Description</label>

                                <div className='col-lg-8'>
                                    <div className='row'>
                                        <div className='col-lg-12 fv-row'>
                                            <input
                                                type='textbox'
                                                {...formik.getFieldProps('shortDesc')}
                                                className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
                                                placeholder='Enter Short Description'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='card-footer d-flex justify-content-end py-6 px-9'>
                                <button type='submit' className='btn btn-primary' disabled={loading}>
                                    {!loading && 'Save Changes'}
                                    {loading && (
                                        <span className='indicator-progress' style={{ display: 'block' }}>
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
            { isSuccess && <AlertBox redirectUrl={`/item`} close={closeAlert} type={`success`}>{successMsg}</AlertBox> }
            { isFailed && <AlertBox   redirectUrl={null} close={closeAlert} type={`error`}>{errorMsg}</AlertBox> }
  
        </>
    )
}

export default ItemDetail;
import {FC} from 'react';
import { KTIcon } from '../../../../../_metronic/helpers';

const Working : FC = () => {
    return (
        <>
           <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-50px'></th>
                                <th className='min-w-100px'>Dates</th>
                                <th className='min-w-200px'>From</th>
                                <th className='min-w-200px'>To</th>
                                <th className='min-w-100px text-end'>Options</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                            <div className="form-check form-switch form-check-custom form-check-solid">
                                                <input checked={true} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                            </div>
                                     
                                   </td>
                                    <td>Monday</td>
                                    <td>
                                      <input type='time' value="09:00"  /> 
                                    </td>
                                    <td>
                                      <input type='time' value="17:00"  /> 
                                    </td>
                                    <td>
                                       <KTIcon iconName='plus' className='fs-4 me-1' />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                            <div className="form-check form-switch form-check-custom form-check-solid">
                                                <input checked={true} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                            </div>
                                     
                                   </td>
                                    <td>Tuesday</td>
                                    <td>
                                      <input type='time' value="09:00" /> 
                                    </td>
                                    <td>
                                      <input type='time' value="17:00"  /> 
                                    </td>
                                    <td>
                                       <KTIcon iconName='plus' className='fs-4 me-1' />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                            <div className="form-check form-switch form-check-custom form-check-solid">
                                                <input checked={true} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                            </div>
                                     
                                   </td>
                                    <td>Wednesday</td>
                                    <td>
                                      <input type='time' value="09:00" /> 
                                    </td>
                                    <td>
                                      <input type='time' value="17:00"  /> 
                                    </td>
                                    <td>
                                       <KTIcon iconName='plus' className='fs-4 me-1' />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                            <div className="form-check form-switch form-check-custom form-check-solid">
                                                <input checked={true} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                            </div>
                                     
                                   </td>
                                    <td>Thursday</td>
                                    <td>
                                      <input type='time' value="09:00" /> 
                                    </td>
                                    <td>
                                      <input type='time' value="17:00"  /> 
                                    </td>
                                    <td>
                                       <KTIcon iconName='plus' className='fs-4 me-1' />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                            <div className="form-check form-switch form-check-custom form-check-solid">
                                                <input checked={true} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                            </div>
                                     
                                   </td>
                                    <td>Friday</td>
                                    <td>
                                      <input type='time' value="09:00" /> 
                                    </td>
                                    <td>
                                      <input type='time' value="17:00"  /> 
                                    </td>
                                    <td>
                                       <KTIcon iconName='plus' className='fs-4 me-1' />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                            <div className="form-check form-switch form-check-custom form-check-solid">
                                                <input checked={true} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                            </div>
                                     
                                   </td>
                                    <td>Saturday</td>
                                    <td>
                                      <input type='time' value="09:00" /> 
                                    </td>
                                    <td>
                                      <input type='time' value="17:00"  /> 
                                    </td>
                                    <td>
                                       <KTIcon iconName='plus' className='fs-4 me-1' />
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                            <div className="form-check form-switch form-check-custom form-check-solid">
                                                <input checked={true} className="form-check-input" type="checkbox" value="" id="flexSwitchDefault" />
                                            </div>
                                     
                                   </td>
                                    <td>Sunday</td>
                                    <td>
                                      <input type='time' value="09:00"  /> 
                                    </td>
                                    <td>
                                    <input type='time'  value="17:00"  />
                                    </td>
                                    <td>
                                       <KTIcon iconName='plus' className='fs-4 me-1' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
        </>
    )
}    

export default Working;
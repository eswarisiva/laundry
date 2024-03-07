import { KTIcon } from '../../../../../_metronic/helpers';

const Working = (props: any) => {
  let Monday = props?.workingHours?.find((i : any) => i?.day === 'Monday') ;
  let Tuesday = props?.workingHours?.find((i : any) => i?.day === 'Tuesday') ;
  let Wednesday = props?.workingHours?.find((i : any) => i?.day === 'Wednesday') ;
  let Thursday = props?.workingHours?.find((i : any) => i?.day === 'Thursday') ;
  let Friday = props?.workingHours?.find((i : any) => i?.day === 'Friday') ;
  let Saturday = props?.workingHours?.find((i : any) => i?.day === 'Saturday');
  let Sunday = props?.workingHours?.find((i : any) => i?.day === 'Sunday') ;

  console.log(Monday);
  
  return (
        <>
           <div className='card-body py-3'>
                        <div className='table-responsive'>
                        <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
                            <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-50px'></th>
                                <th className='min-w-100px'>Dates</th>
                                <th className='min-w-100px'>From - To</th>
                                <th className='min-w-100px'>Options</th>
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
                                      { Monday ?
                                      Monday?.availableTimes?.map( (result: any)  => {
                                        let startHour = result?.startTime?.hour < 10 ? `0${result?.startTime?.hour}` : result?.startTime?.hour ;
                                        let startMinute = result?.startTime?.minute < 10 ? `0${result?.startTime?.minute}` : result?.startTime?.minute ;
                                        let endHour = result?.endTime?.hour < 10 ? `0${result?.endTime?.hour}` : result?.endTime?.hour ;
                                        let endMinute = result?.endTime?.minute < 10 ? `0${result?.endTime?.minute}` : result?.endTime?.minute ;
                                       
                                        return (
                                          <div>
                                          <input type='time' value={`${startHour}:${startMinute}`}  /> 

                                          <input type='time' value={`${endHour}:${endMinute}`}  /> 
                                          </div>
                                          
                                        )
                                      })
                                      :    
                                      <>                                  
                                          <input type='time' value="00:00"  /> 

                                          <input type='time' value="00:00"  /> 
                                      </>
                                    }

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
                                    { Tuesday ?
                                      Tuesday?.availableTimes?.map( (result: any)  => {
                                        let startHour = result?.startTime?.hour < 10 ? `0${result?.startTime?.hour}` : result?.startTime?.hour ;
                                        let startMinute = result?.startTime?.minute < 10 ? `0${result?.startTime?.minute}` : result?.startTime?.minute ;
                                        let endHour = result?.endTime?.hour < 10 ? `0${result?.endTime?.hour}` : result?.endTime?.hour ;
                                        let endMinute = result?.endTime?.minute < 10 ? `0${result?.endTime?.minute}` : result?.endTime?.minute ;
                                       
                                        return (
                                          <div>
                                          <input type='time' value={`${startHour}:${startMinute}`}  /> 

                                          <input type='time' value={`${endHour}:${endMinute}`}  /> 
                                          </div>
                                          
                                        )
                                      })
                                      :    
                                      <>                                  
                                          <input type='time' value="00:00"  /> 

                                          <input type='time' value="00:00"  /> 
                                      </>
                                    }
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
                                    { Wednesday ?
                                      Wednesday?.availableTimes?.map( (result: any)  => {
                                        let startHour = result?.startTime?.hour < 10 ? `0${result?.startTime?.hour}` : result?.startTime?.hour ;
                                        let startMinute = result?.startTime?.minute < 10 ? `0${result?.startTime?.minute}` : result?.startTime?.minute ;
                                        let endHour = result?.endTime?.hour < 10 ? `0${result?.endTime?.hour}` : result?.endTime?.hour ;
                                        let endMinute = result?.endTime?.minute < 10 ? `0${result?.endTime?.minute}` : result?.endTime?.minute ;
                                       
                                        return (
                                          <div>
                                          <input type='time' value={`${startHour}:${startMinute}`}  /> 

                                          <input type='time' value={`${endHour}:${endMinute}`}  /> 
                                          </div>
                                          
                                        )
                                      })
                                      :    
                                      <>                                  
                                          <input type='time' value="00:00"  /> 

                                          <input type='time' value="00:00"  /> 
                                      </>
                                    }
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
                                    { Thursday ?
                                      Thursday?.availableTimes?.map( (result: any)  => {
                                        let startHour = result?.startTime?.hour < 10 ? `0${result?.startTime?.hour}` : result?.startTime?.hour ;
                                        let startMinute = result?.startTime?.minute < 10 ? `0${result?.startTime?.minute}` : result?.startTime?.minute ;
                                        let endHour = result?.endTime?.hour < 10 ? `0${result?.endTime?.hour}` : result?.endTime?.hour ;
                                        let endMinute = result?.endTime?.minute < 10 ? `0${result?.endTime?.minute}` : result?.endTime?.minute ;
                                       
                                        return (
                                          <div>
                                          <input type='time' value={`${startHour}:${startMinute}`}  /> 

                                          <input type='time' value={`${endHour}:${endMinute}`}  /> 
                                          </div>
                                          
                                        )
                                      })
                                      :    
                                      <>                                  
                                          <input type='time' value="00:00"  /> 

                                          <input type='time' value="00:00"  /> 
                                      </>
                                    }
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
                                    { Friday ?
                                      Friday?.availableTimes?.map( (result: any)  => {
                                        let startHour = result?.startTime?.hour < 10 ? `0${result?.startTime?.hour}` : result?.startTime?.hour ;
                                        let startMinute = result?.startTime?.minute < 10 ? `0${result?.startTime?.minute}` : result?.startTime?.minute ;
                                        let endHour = result?.endTime?.hour < 10 ? `0${result?.endTime?.hour}` : result?.endTime?.hour ;
                                        let endMinute = result?.endTime?.minute < 10 ? `0${result?.endTime?.minute}` : result?.endTime?.minute ;
                                       
                                        return (
                                          <div>
                                          <input type='time' value={`${startHour}:${startMinute}`}  /> 

                                          <input type='time' value={`${endHour}:${endMinute}`}  /> 
                                          </div>
                                          
                                        )
                                      })
                                      :    
                                      <>                                  
                                          <input type='time' value="00:00"  /> 

                                          <input type='time' value="00:00"  /> 
                                      </>
                                    }
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
                                    { Saturday ?
                                      Saturday?.availableTimes?.map( (result: any)  => {
                                        let startHour = result?.startTime?.hour < 10 ? `0${result?.startTime?.hour}` : result?.startTime?.hour ;
                                        let startMinute = result?.startTime?.minute < 10 ? `0${result?.startTime?.minute}` : result?.startTime?.minute ;
                                        let endHour = result?.endTime?.hour < 10 ? `0${result?.endTime?.hour}` : result?.endTime?.hour ;
                                        let endMinute = result?.endTime?.minute < 10 ? `0${result?.endTime?.minute}` : result?.endTime?.minute ;
                                       
                                        return (
                                          <div>
                                          <input type='time' value={`${startHour}:${startMinute}`}  /> 

                                          <input type='time' value={`${endHour}:${endMinute}`}  /> 
                                          </div>
                                          
                                        )
                                      })
                                      :    
                                      <>                                  
                                          <input type='time' value="00:00"  /> 

                                          <input type='time' value="00:00"  /> 
                                      </>
                                    }
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
                                    { Sunday ?
                                      Sunday?.availableTimes?.map( (result: any)  => {
                                        let startHour = result?.startTime?.hour < 10 ? `0${result?.startTime?.hour}` : result?.startTime?.hour ;
                                        let startMinute = result?.startTime?.minute < 10 ? `0${result?.startTime?.minute}` : result?.startTime?.minute ;
                                        let endHour = result?.endTime?.hour < 10 ? `0${result?.endTime?.hour}` : result?.endTime?.hour ;
                                        let endMinute = result?.endTime?.minute < 10 ? `0${result?.endTime?.minute}` : result?.endTime?.minute ;
                                       
                                        return (
                                          <div>
                                          <input type='time' value={`${startHour}:${startMinute}`}  /> 

                                          <input type='time' value={`${endHour}:${endMinute}`}  /> 
                                          </div>
                                          
                                        )
                                      })
                                      :    
                                      <>                                  
                                          <input type='time' value="00:00"  /> 

                                          <input type='time' value="00:00"  /> 
                                      </>
                                    }
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
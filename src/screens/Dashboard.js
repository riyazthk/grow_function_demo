import React, { useEffect, useState } from 'react'
import cancelIcon from '../assets/icons/cancel.png'
import { useDispatch, useSelector } from 'react-redux'
import { callEmployeeDate } from '../redux/action/employeeAction'
import moment from 'moment'
import { API } from '../constants/api'



export const Dashboard=()=>{
    const dispatch=useDispatch()
    const employeeList=useSelector((state)=>state?.employeeReducer)
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [dob,setDob]=useState('')
    const [dateEnrolled,setDateEnrolled]=useState('')
    const [page,setPage]=useState(1)


useEffect(()=>{
    dispatch({ type: 'LOADING', payload: {isLoading:true} })
   callEmployeeDate(dispatch, API.baseUrls[API.currentEnv] + API.authUrls.getEmployeeDetails)  
},[])


    const handleEvent=(e)=>{

if(e.target.id==='first_name'){
setFirstName(e.target.value)
}else if(e.target.id==='last_name'){
    setLastName(e.target.value)

}else if(e.target.id==='dob'){
    setDob(e.target.value)

}else {
setDateEnrolled(e.target.value)
}
    }

    const handleClick=(e)=>{
     
        if(e.target.id==='first_name'){
            setFirstName('')
            }else if(e.target.id==='last_name'){
                setLastName('')
            
            }else if(e.target.id==='dob'){
                setDob('')
            
            }else {
            setDateEnrolled('')
            }
    }

   const handleSearch=(e,page)=>{
    
    setPage(page)
    let param=`?${'page='+page} ${'&size='+3}${firstName.length?'&first_name='+firstName:''}${lastName?.length?'&last_name='+lastName:''}${dob?.length?'&date_of_birth='+dob:''}${dateEnrolled?'&date_enrolled'+dateEnrolled:''}`
    dispatch({ type: 'LOADING', payload: {isLoading:true} })
    callEmployeeDate(dispatch, API.baseUrls[API.currentEnv] + API.authUrls.getEmployeeDetails+param)  
   }

    return(
        <>

            <div className="flex-1  flex-col " >
                <div className="flex flex-col md:flex-row mx-5 mt-10 mb-0">
              
                    <div className="flex w-full h-10  flex-row mb-5 rounded-md border border-gray-300 sm:text-sm mr-5 focus-outline focus:border-indigo-500 focus:ring-indigo-500 px-2">
                <input
          type="text"
          name="price"
          value={firstName}
          id="first_name"
          onChange={(e)=>{handleEvent(e)}}
         className=" w-full   rounded-md  border-none focus:outline-none " 
          placeholder="Search by first name"
        />
        {firstName.length ?
        <img src={cancelIcon} class="max-w-full h-5 self-center" id="first_name" onClick={(e)=>handleClick(e)} />:null}
        </div>
        <div className="flex w-full h-10  flex-row rounded-md mb-5 border border-gray-300 sm:text-sm mr-5 focus-outline focus:border-indigo-500 focus:ring-indigo-500 px-2">
                <input
          type="text"
          name="price"
          id="last_name"
          value={lastName}
          onChange={(e)=>{handleEvent(e)}}
         className=" w-full   rounded-md  border-none focus:outline-none " 
          placeholder="Search by last name"
        />
        {lastName.length ?
        <img src={cancelIcon} class="max-w-full h-5 self-center" id="last_name" onClick={(e)=>handleClick(e)} />:null}
        </div>
        <div className="flex w-full h-10  flex-row rounded-md mb-5 border border-gray-300 sm:text-sm mr-5 focus-outline focus:border-indigo-500 focus:ring-indigo-500 px-2">
                <input
          type="text"
          name="price"
          id="dob"
          value={dob}
          onChange={(e)=>{handleEvent(e)}}
         className=" w-full   rounded-md  border-none focus:outline-none " 
          placeholder="Search by dob"
        />
        
        {dob.length ?
        <img src={cancelIcon} class="max-w-full h-5 self-center"   id="dob" onClick={(e)=>handleClick(e)} />:null}
        </div>
        <div className="flex w-full h-10  flex-row rounded-md mb-5 border border-gray-300 sm:text-sm mr-5 focus-outline focus:border-indigo-500 focus:ring-indigo-500 px-2">
                <input
          type="text"
          name="price"
          id="date_enrolled"
          value={dateEnrolled}
          onChange={(e)=>{handleEvent(e)}}
         className=" w-full   rounded-md  border-none focus:outline-none " 
          placeholder="Search by date enrolled"
        />
        {dateEnrolled.length ?
        <img src={cancelIcon} class="max-w-full h-5 self-center" id="date_enrolled" onClick={(e)=>handleClick(e)} />:null}
        </div>

<button type="button"  onClick={(e)=>{handleSearch(e)}} class="text-white bg-blue-700 hover:bg-blue-800 mb-5 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>

                </div>
                {employeeList?.isLoading ?<div role="status" className='flex  justify-center items-center' >
    <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>:
                <div className="overflow-scroll">
                    <div className="p-1.5 w-full inline-block align-middle ">
                        <div className=" border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            First Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Last Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            DOB
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Date Enrolled
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Department
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 ">
                                    {!employeeList?.employeeList?.parameters?.length && <div className='flex justify-center items-center self-center text-red-700'>No Record Found</div>}
                                    {employeeList?.employeeList?.parameters?.map((item, index) => {
                                        return (
                                            <tr key={index.toString()}>
                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {item?.first_name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item?.last_name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {item?.date_of_birth}
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <a
                                                        className="text-green-500 hover:text-green-700"
                                                        href="#"
                                                    >
                                                        {moment( item?.date_enrolled).format('DD-MM-YYYY : HH:MM')}
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                                    <a
                                                        className="text-red-500 hover:text-red-700"
                                                        href="#"
                                                    >
                                                        {item?.department}
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                }
            </div>

            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">

                <div >
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                      
                        
                        <a
                            href="#"
                            onClick={(e)=>{   
                               
                                handleSearch(e,1)}}
                            aria-current="page"
                            className={`relative z-10 inline-flex items-center border ${page===1?'border-indigo-500 bg-indigo-50':'border-gray-300 bg-white'}  px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}
                        >
                            1
                        </a>
                        <a
                            href="#"
                            onClick={(e)=>{handleSearch(e,2)}}
                            className={`relative z-10 inline-flex items-center border ${page===2?'border-indigo-500 bg-indigo-50':'border-gray-300 bg-white'} px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20`}
                        >
                            2
                        </a>
                       
                       
                    </nav>
                </div>
            </div>
        </>

    )
}
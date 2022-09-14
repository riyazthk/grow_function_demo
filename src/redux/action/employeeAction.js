import { useDispatch } from "react-redux"
import { getEmployeeApi } from "../../services"


export const callEmployeeDate = (dispatch,apiLink) => {
    getEmployeeApi(apiLink).then(res=>{
        console.log('res',res);
        dispatch({ type: 'EmployeeSucess', payload: {isLoading:false,data:res.data} })
    }).catch(err=>{
        console.log('err',err);
        dispatch({ type: 'EmployeeFailure', payload: {isLoading:false,data:err} })
    })
    // return (dispatch) => {
    // //   try {
    //     getEmployeeApi().then(res=>{
    //         console.log('res',res);
    //         dispatch({ type: 'EmployeeSucess', payload: {isLoading:false,data:res} })
    //     }).catch(err=>{
    //         dispatch({ type: 'EmployeeFailure', payload: {isLoading:false,data:err} })
    //     })
        
    // //   }
    // //   catch (e) {
    // //     console.log('errr');
    // //     dispatch({ type: 'EmployeeFailure', payload: {isLoading:false,data:e} })
    // //   }
    // }
  
  }
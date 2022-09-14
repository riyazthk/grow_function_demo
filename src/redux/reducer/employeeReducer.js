

const initialState = {
    isLoading: false,
    employeeList:[],
    error:null
};

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EmployeeSucess':
            return {
                ...state,
                isLoading: action.payload.isLoading,
                employeeList:action.payload.data
            };
        case 'EmployeeFailure':
            return {
                ...state,
                isLoading:action.payload.isLoading,
                error:action.payload.data
            }
          case 'LOADING':
            return{
                ...state,
                isLoading:action.payload
            }  
          
        default:
            return state;
    }
}
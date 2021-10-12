
const initialState = {
    countries:[]
}
export const countriesReducer = (state = initialState,action)=>{
    switch(action.type){
        case  'getCountries':
            return {
                ...state,
                countries:action.payload
            }
        default: return state;
    }
}
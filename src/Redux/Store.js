import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk' 
import { composeWithDevTools } from 'redux-devtools-extension';
import { countriesReducer } from './Reducers/countries';


const initialState = {};
const middleware = [thunk];
// reducers
const reducers = combineReducers( {
    countries:countriesReducer
} )
// store
 const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;
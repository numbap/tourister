import { createStore, combineReducers, applyMiddleware } from "redux";
import locations from '../reducers/locations';
import spots from '../reducers/spots';
import user from '../reducers/user';  
import thunk from 'redux-thunk'

const demoState = {
    locations: [
        {
            id: '123abcdefghiklmn',
            lat: '42',
            lng: '-42',
            description: 'Default Location'
        },
        {
            id: 'sdfsfdsdffsdsfs',
            lat: '42.5',
            lng: '-42.5',
            description: 'Second Default'
        }
    ]
};
 
export default () => {
    return createStore(
        combineReducers({
             locations: locations,
             spots: spots,
             user: user
        }
    ), 
    applyMiddleware(thunk)
    )};

import { combineReducers } from 'redux';
import { SET_SCHOOL } from './constants';

const schoolsReducer = (state =[], action) => {
    switch(action.type){
        case SET_SCHOOL:
            return action.schools;
            break;
    }
    return state;
}

const reducer = combineReducers({
    schools: [],
    students: []
})

export default reducer
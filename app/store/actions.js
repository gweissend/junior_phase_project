import { SET_SCHOOL } from './constants'
import axios from 'axios'


const setSchool = (schools) => {
    return {
        type: SET_SCHOOL,
        schools
    };
};
 
const fetchSchools = () => {
    return async(dispatch) => {
        const schools = (await axios.get('/api/schools')).data;
        return dispatch(setSchool(schools))
    }
}

export { fetchSchools, setSchool};
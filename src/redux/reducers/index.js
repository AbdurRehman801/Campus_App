import status from './loginStatus';
import formsdata from './formdata'
import { combineReducers } from 'redux';
import updatedata from './updatingdata';
import studentsData from './studentdata'

const rootreducer = combineReducers({
  status: status,
  formsdata: formsdata,
  updatedata: updatedata,
  studentsData: studentsData
});
export default rootreducer;
import status from './loginStatus';
import formsdata from './formdata'
import { combineReducers } from 'redux';
import updatedata from './updatingdata';

const rootreducer = combineReducers({
  status: status,
  formsdata: formsdata,
  updatedata: updatedata
});
export default rootreducer;
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form'; 

import HeaderNavbar from './headernavbarReducer';
import headerNavbar from './headernavbarReducer';

const rootReducer = combineReducers({
  form,
  HeaderNavbar,
  headerNavbar
});

export default rootReducer;
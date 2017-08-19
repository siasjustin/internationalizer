import { combineReducers } from 'redux';
import country from './homePageReducer';

const rootReducer = combineReducers({
	country,
})

export default rootReducer;
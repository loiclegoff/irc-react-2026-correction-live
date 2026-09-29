import { combineReducers } from 'redux';
import robotReducer from './robot.reducer';
import partReducer from './part.reducer';

const globalReducer = combineReducers({
  robotReducer: robotReducer,
  partReducer: partReducer
});

export default globalReducer;
/*jshint esversion: 6 */
import { combineReducers } from 'redux';
import testReduce from '../../features/testarea/testReduce';
import eventReducer from '../../features/event/eventReducer';


const rootReducer = combineReducers({
    test: testReduce,
    events: eventReducer
});

export default rootReducer;
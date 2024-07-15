import { combineReducers } from 'redux';
import projectReducer from './projectReducers';
import taskReducer from './taskReducers';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    projects: projectReducer,
    tasks: taskReducer,
    users: userReducer
});

export default rootReducer;

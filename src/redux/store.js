import { createStore,  applyMiddleware } from 'redux';
import  rootReducer  from './reducers/highwayReducer';
import thunk from 'redux-thunk';


const middleware = [thunk];



export const store = createStore(rootReducer, applyMiddleware(...middleware));


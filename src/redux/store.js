import { createStore,  applyMiddleware } from 'redux';
import  rootReducer  from './reducers/highwayReducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';


const middleware = [thunk];



export const store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(store);

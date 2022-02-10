import { combineReducers } from "redux";
import highwayReducer from "./highwayReducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


// persist the cart reducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['highways']
}

const rootReducer =  combineReducers({
  highways: highwayReducer
});

export default persistReducer(persistConfig,rootReducer);

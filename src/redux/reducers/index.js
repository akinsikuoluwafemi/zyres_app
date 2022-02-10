import { combineReducers } from "redux";
import highwayReducer from "./highwayReducer";


export default combineReducers({
  highways: highwayReducer
});
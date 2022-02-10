import { highwayTypes } from '../types';

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  highways: [],
  selectedHighway: null

}


const highwayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case highwayTypes.FETCH_HIGHWAYS_PENDING:
      return {
        ...state,
        isFetching: true
      }

    case highwayTypes.FETCH_HIGHWAYS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        highways: action.payload
      }

    case highwayTypes.FETCH_HIGHWAYS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case highwayTypes.SELECTED_HIGHWAY:
      return {
        ...state,
        selectedHighway: action.payload
      }

    default:
      return state;
  }


}


export default highwayReducer;
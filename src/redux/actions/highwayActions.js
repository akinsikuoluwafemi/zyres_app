import { highwayTypes } from '../types';
import axios from 'axios';



const fetchHighwaysPending = () => {
  return {
    type: highwayTypes.FETCH_HIGHWAYS_PENDING
  }
}

const fetchHighwaysSuccess = (highways) => {
  return {
    type: highwayTypes.FETCH_HIGHWAYS_SUCCESS,
    payload: highways
  }
}

const fetchHighwaysError = (error) => {
  return {
    type: highwayTypes.FETCH_HIGHWAYS_ERROR,
    payload: error
  }
}

export const fetchHighwayAsync = () => {
  return async (dispatch) => {
    dispatch(fetchHighwaysPending());
      try {

        const {data} = await axios.get(`https://verkehr.autobahn.de/o/autobahn/`)
        dispatch(fetchHighwaysSuccess(data));
      } catch (err) {
        dispatch(fetchHighwaysError(err));
      }
    }
}

export const selectAnHighway = (highway) => {
  return {
    type: highwayTypes.SELECTED_HIGHWAY,
    payload: highway
  }
}

export const addToFavorites = (highway) => {
  return {
    type: highwayTypes.ADD_TO_FAVORITES,
    payload: highway
  }
}

export const removeFromFavorites = (highway) => {
  return {
    type: highwayTypes.REMOVE_FROM_FAVORITES,
    payload: highway
  }
}

export const modifySelectedHighway = (highway) => {
  return {
    type: highwayTypes.MODIFY_SELECTED_HIGHWAY,
    payload: highway
  }
}


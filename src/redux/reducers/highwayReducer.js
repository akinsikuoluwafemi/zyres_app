import { highwayTypes } from '../types';

const INITIAL_STATE = {
  isFetching: false,
  error: null,
  highways: [],
  selectedHighway: {
    inFavorites: false,
    name: '',
    colorCode: '',
    comments: ''
  },
  // favorites: [{inFavorites: true, name: "A1"}]
  favorites: []


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
        selectedHighway: { ...state.selectedHighway, name: action.payload }
      }

    case highwayTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }

    case highwayTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(highway => highway.name !== action.payload.name)
      }

    case highwayTypes.MODIFY_SELECTED_HIGHWAY:
      return {
        ...state,
        selectedHighway: action.payload
      }

    default:
      return state;
  }


}


export default highwayReducer;
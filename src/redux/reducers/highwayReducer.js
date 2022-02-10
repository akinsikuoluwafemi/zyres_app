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
  favorites:  [],
  roadworks: {}


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
      let uniqueArr = [...new Set([...state.favorites, action.payload])];

      return {
        ...state,
        favorites: uniqueArr
      }

    case highwayTypes.REMOVE_FROM_FAVORITES:
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
      return {
        ...state,
        favorites: state.favorites.filter(highway => highway.name !== action.payload.name)
      }

    case highwayTypes.MODIFY_SELECTED_HIGHWAY:
      return {
        ...state,
        selectedHighway: action.payload
      }
    case highwayTypes.FETCH_ROADWORKS_PENDING:
      return {
        ...state,
        isFetching: true
      }

    case highwayTypes.FETCH_ROADWORKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        roadworks: action.payload
      }

    case highwayTypes.FETCH_ROADWORKS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }

    default:
      return state;
  }


}


export default highwayReducer;
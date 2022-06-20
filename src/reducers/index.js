import { ADD_FAVOURITE, ADD_MOVIES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT, REMOVE_FAVOURITE } from "../actions";
import {combineReducers} from 'redux';
let intialState = {
    list: [],
    favourites: [],
    // showFav:true
}

export  function movies(state = intialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }

        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [...state.list,action.movie]
                }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.favourite, ...state.favourites]
            }

        case REMOVE_FAVOURITE:
            const newState = state.favourites.filter((val) => {
                return val !== action.favourite;
            })
            return {
                ...state,
                favourites: newState
            }


        default:
            return state;
    }

}
const initialSearchState={
    result:{},
    showSearchResults: false
}
export function search(state=initialSearchState,action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults:false
            }

        default:
            return state;
    }

}



export const rootReducer= combineReducers({
    movies,
    search
})


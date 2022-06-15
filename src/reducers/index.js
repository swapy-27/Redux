import { ADD_FAVOURITE, ADD_MOVIES, REMOVE_FAVOURITE } from "../actions";
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
    result:{}
}
export function search(state=initialSearchState,action){
return state
}
// const initialRootState={
//     movies:intialState,
//     search:initialSearchState
// }
// export function rootReducer(state=initialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }


export const rootReducer= combineReducers({
    movies,
    search
})


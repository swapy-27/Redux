import { ADD_FAVOURITE, ADD_MOVIES, REMOVE_FAVOURITE } from "../actions";

let intialState = {
    movies: [],
    favourites: []
}

export default function movies(state = intialState, action) {
    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                movies: action.movies
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


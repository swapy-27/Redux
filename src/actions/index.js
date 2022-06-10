export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE ='ADD_FAVOURITE';
export const REMOVE_FAVOURITE ='REMOVE_FAVOURITE';
export function addMovies(movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}
export function addFavourites(favourite){
    return {
        type:ADD_FAVOURITE,
        favourite
    }
}
export function removeFavourite(favourite){
    return {
        type:REMOVE_FAVOURITE,
        favourite
    }
}
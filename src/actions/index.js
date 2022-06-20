export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE ='ADD_FAVOURITE';
export const REMOVE_FAVOURITE ='REMOVE_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';
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

export function addMovieToList(movie){
    return {
        type:ADD_MOVIE_TO_LIST,
        movie

    }
}

export function handleMovieSearch(movie_name){
    const url=`http://www.omdbapi.com/?t=${movie_name}&apikey=cff59bc0`
   return function(dispatch){
    fetch(url).then(
        response => response.json()
    ).then(
        //dispatch an action
        //{type:ADD_SEARCH_RESULT , movie}
        movie=>dispatch(addSearchResult(movie))
    ).catch(error=>console.log('Error',error))
   }

}


export function addSearchResult (movie){
    return{
        type:'ADD_SEARCH_RESULT',
        movie
    }
}
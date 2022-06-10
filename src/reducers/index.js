let intialState= {
    movies:[],
    favourites:[]
}

export default function movies(state=intialState,action){
    if(action.type=== 'ADD_MOVIES'){
        return {
            ...state,
            movies:action.movies
        }
    }
    return state;
}
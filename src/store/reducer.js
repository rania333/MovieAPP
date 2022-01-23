const Val = {
    favMovies : [],
};

export default function favReducer (state = Val, action){
    switch(action.type) {
        case 'ADD_TO_FAV':
            return {
                ...state,
                favMovies: [...state.favMovies, action.payload],
            };
        case 'REMOVE-FROM_FAV':
            return {
                favMovies: state.favMovies.filter(movie => movie.id !== action.payload.id)
            };
        default:
            return state;
    }

}



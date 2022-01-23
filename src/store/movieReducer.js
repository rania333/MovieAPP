export default function movieReducer(state=[], action) {
    switch(action.type) {
        case 'SET-MOVIE':
            return action.payload;
        default: 
            return state;
    }
}
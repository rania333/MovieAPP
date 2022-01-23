import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import favReducer from "./reducer";

const combineReducer = combineReducers({
    favReducer: favReducer,
    movieReducer: movieReducer
})

export default combineReducer;
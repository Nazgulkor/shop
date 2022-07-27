import { combineReducers } from "redux";
import clothesReducer from "./clothes";
import rangerReducer from './ranger';
import paginateReducer from "./paginate";
import basketReducer from "./basket";
const rootReducer = combineReducers({
    clothes : clothesReducer,
    ranger : rangerReducer,
    paginate : paginateReducer,
    basket : basketReducer
})

export default rootReducer;
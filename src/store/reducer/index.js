import {combineReducers} from "redux";
import campaignReducer from "./campaignReducer";

const rootReducer = combineReducers({
    campaignReducer: campaignReducer
});

export default rootReducer;
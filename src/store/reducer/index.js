import {combineReducers} from "redux";
import campaignReducer from "./campaignReducer";
import localizationReducer from "./localizationReducer";

const rootReducer = combineReducers({
    campaignReducer: campaignReducer,
    localizationReducer: localizationReducer
});

export default rootReducer;
import {CHANGE_LANGUAGE} from "../actionConstant";
import {data} from './../../i18n';

const initialState = {
    translation: data.en
};

const localizationReducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                translation: data[action.payload]
            }

        default:
            return newState;
    }
}

export default localizationReducer;
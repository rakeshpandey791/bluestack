import {GET_CAMPAIGN_LIST, UPDATE_CAMPAIGN_TYPE, SET_SELECTED_CAMPAIGN} from "../actionConstant";
import campaigns from '../campaign';

const getCampaignListData = (campaignReducerData) => {
    const retObj = {
        campaignList: campaignReducerData.campaignLSData
    }
    const todatDate = new Date();
    todatDate.setHours(0,0,0,0);
    switch (campaignReducerData.campaignType) {
        case "UPCOMING":
            retObj.campaignList = retObj.campaignList.filter( campaign => {
                const campaignDate = new Date(campaign.createdOn);
                campaignDate.setHours(0,0, 0, 0);
                return todatDate < campaignDate;
            });
            break;

        case "LIVE":
            retObj.campaignList = retObj.campaignList.filter( campaign => {
                const campaignDate = new Date(campaign.createdOn);
                campaignDate.setHours(0,0, 0, 0);
                return todatDate.toString() === campaignDate.toString();
            });
            break;

        case "PAST":
            retObj.campaignList = retObj.campaignList.filter( campaign => {
                const campaignDate = new Date(campaign.createdOn);
                campaignDate.setHours(0,0, 0, 0);
                return todatDate > campaignDate;
            });
            break;

    }
    return retObj;
}

export const getCampaignList = () => {
    return (dispatch, getState) => {
        if (!localStorage.getItem('campaignList')) {
            const dataToUpdateLocalStorage = [];
            for(let i=0; i<campaigns.data.length; i++) {
                const campaignObj = campaigns.data[i];
                dataToUpdateLocalStorage.push(campaignObj);
            }
            localStorage.setItem('campaignList', JSON.stringify(dataToUpdateLocalStorage));
        }
        const campaignReducerData = getState().campaignReducer;

        const campaignListObj = getCampaignListData(campaignReducerData);

        dispatch({type: GET_CAMPAIGN_LIST,
            payload: {campaignList: campaignListObj.campaignList}});
    }
}

export const updateCampaignType = (campaignType) => {
    return (dispatch, getState) => {
        dispatch({type: UPDATE_CAMPAIGN_TYPE, payload: campaignType});
        const campaignReducerData = getState().campaignReducer;

        const campaignListObj = getCampaignListData(campaignReducerData);

        dispatch({type: GET_CAMPAIGN_LIST,
            payload: {campaignList: campaignListObj.campaignList}});
    }
}

export const setSelectedCampaign = (campaignDetail) => {
    return (dispatch) => {
        dispatch({type: SET_SELECTED_CAMPAIGN, payload: campaignDetail});
    }
}




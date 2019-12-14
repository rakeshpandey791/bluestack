import React, {Component} from 'react';
import {connect} from "react-redux";
import './CampaignList.scss';
import {getCampaignList, updateCampaignType} from "../../store/action/campaignAction";
import CampaignDetail from "./CampaignDetail/CampaignDetail";
import CampaignPricing from "./CampaignPricing/CampaignPricing";

class CampaignList extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            id: ''
        };
    }
    componentDidMount() {
        this.props.getCampaignList();
    }

    changeTab = (event) => {
        if (event.target.dataset.type) {
            this.props.updateCampaignType(event.target.dataset.type);
        }
    }

    render() {
        return (
            <div className="campaign-container">
                <div></div>
                <div>
                    <div className="title">
                        <h1>Manage Campaigns</h1>
                    </div>
                    <div className="tab-container" onClick={this.changeTab}>
                        <div className={`tab-item ' ${this.props.campaignType ===  'UPCOMING' ? 'active' :''}`}
                             data-type="UPCOMING">
                            <a href className={this.props.campaignType ===  'UPCOMING' ? 'active' :''} data-type="UPCOMING">Upcoming Campaigns</a>
                        </div>
                        <div className={`tab-item ' ${this.props.campaignType ===  'LIVE' ? 'active' :''}`}
                             data-type="LIVE">
                            <a href className={this.props.campaignType ===  'LIVE' ? 'active' :''} data-type="LIVE">Live Campaigns</a>
                        </div>
                        <div className={`tab-item ' ${this.props.campaignType ===  'PAST' ? 'active' :''}`}
                             data-type="PAST">
                            <a href className={this.props.campaignType ===  'PAST' ? 'active' :''} data-type="PAST">Past Campaigns</a>
                        </div>
                    </div>
                    <div className="data-container">
                        <div className="list-caption">
                            <div>DATE</div>
                            <div>CAMPAIGN</div>
                            <div>VIEW</div>
                            <div>ACTIONS</div>
                        </div>
                        {
                            this.props.campaignList.map( (campaign, index) => (
                            <CampaignDetail campaignDetail = {campaign} key={index} />
                            ))
                        }
                        {
                            this.props.selectedCampaign ? (<CampaignPricing selectedCampaign={this.props.selectedCampaign}></CampaignPricing>) : ''
                        }
                    </div>
                </div>
                <div></div>
            </div>
        )
    }
}

const mapPropsToDispatch = (state) => {
    return {
        campaignList: state.campaignReducer.campaignList,
        campaignType: state.campaignReducer.campaignType,
        selectedCampaign: state.campaignReducer.selectedCampaign
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
        getCampaignList: () => dispatch(getCampaignList()),
        updateCampaignType: (campaignType) => dispatch(updateCampaignType(campaignType))
    }
}

export default connect(mapPropsToDispatch, mapActionToDispatch)(CampaignList);
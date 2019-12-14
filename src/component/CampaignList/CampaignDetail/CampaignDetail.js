import React, {Component} from 'react';
import {connect} from "react-redux";
import {setSelectedCampaign} from './../../../store/action/campaignAction';

import './CampaignDetail.scss';
import moment from "moment";

class CampaignDetail extends Component{

    render() {
        return (
            <div className="list-row">
                <div></div>
                <div className="list-data">
                    <div>
                        <p>{moment(this.props.campaignDetail.createdOn).format('MMM YYYY, DD')}</p>
                        <small>{moment(this.props.campaignDetail.createdOn).fromNow()}</small>
                    </div>
                    <div className="campaign-name">
                        <div><img src={window.location.origin +'/' + this.props.campaignDetail.image_url} alt="Campaign Image" /></div>
                        <div>
                            <p>{this.props.campaignDetail.name}</p>
                            <p><small>{this.props.campaignDetail.region}</small></p>
                        </div>


                    </div>
                    <div>
                        <a href="javascript: void(0)" onClick={() => this.props.setSelectedCampaign(this.props.campaignDetail)}>
                            <img src={window.location.origin + '/price.png'} className="img" />
                            <span>View Price </span>
                        </a>
                    </div>
                    <div>
                        <a href="javascript: void(0)">
                            <img src={window.location.origin + '/file.png'} className="img" />
                            <span>CSV</span>
                        </a>
                        <a href="javascript: void(0)">
                            <img src={window.location.origin + '/statistics-report.png'} className="img" />
                            <span>Report</span>
                        </a>
                        <a href="javascript: void(0)">
                            <img src={window.location.origin + '/calendar.png'} className="img" />
                            <span>Schedule Again</span>
                        </a>
                    </div>
                </div>
                <div></div>

            </div>
        );
    }
}
const mapActionToDispatch = (dispatch) => {
    return {
        setSelectedCampaign: (campaignDetail) => dispatch(setSelectedCampaign(campaignDetail))
    }
}

export default connect(null, mapActionToDispatch)(CampaignDetail);
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
                        <div><img src={process.env.PUBLIC_URL +'/' + this.props.campaignDetail.image_url} alt={this.props.campaignDetail.name} /></div>
                        <div>
                            <p>{this.props.campaignDetail.name}</p>
                            <p><small>{this.props.campaignDetail.region}</small></p>
                        </div>


                    </div>
                    <div>
                        <a href onClick={() => this.props.setSelectedCampaign(this.props.campaignDetail)}>
                            <img src={process.env.PUBLIC_URL + '/price.png'} className="img" alt={this.props.campaignDetail.name}/>
                            <span>View Price </span>
                        </a>
                    </div>
                    <div>
                        <a href>
                            <img src={process.env.PUBLIC_URL + '/file.png'} className="img" alt={this.props.campaignDetail.name} />
                            <span>CSV</span>
                        </a>
                        <a href>
                            <img src={process.env.PUBLIC_URL + '/statistics-report.png'} className="img" alt={this.props.campaignDetail.name} />
                            <span>Report</span>
                        </a>
                        <a href>
                            <img src={process.env.PUBLIC_URL + '/calendar.png'} className="img" alt={this.props.campaignDetail.name} />
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
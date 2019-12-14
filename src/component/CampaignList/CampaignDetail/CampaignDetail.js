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
                            <span>{this.props.translation.view_price} </span>
                        </a>
                    </div>
                    <div>
                        <a href>
                            <img src={process.env.PUBLIC_URL + '/file.png'} className="img" alt={this.props.campaignDetail.name} />
                            <span>{this.props.translation.CSV}</span>
                        </a>
                        <a href>
                            <img src={process.env.PUBLIC_URL + '/statistics-report.png'} className="img" alt={this.props.campaignDetail.name} />
                            <span>{this.props.translation.report}</span>
                        </a>
                        <a href>
                            <img src={process.env.PUBLIC_URL + '/calendar.png'} className="img" alt={this.props.campaignDetail.name} />
                            <span>{this.props.translation.schedule_again}</span>
                        </a>
                    </div>
                </div>
                <div></div>

            </div>
        );
    }
}

const mapPropsToDispatch = (state) => {
    return {
        translation: state.localizationReducer.translation
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
        setSelectedCampaign: (campaignDetail) => dispatch(setSelectedCampaign(campaignDetail))
    }
}

export default connect(mapPropsToDispatch, mapActionToDispatch)(CampaignDetail);
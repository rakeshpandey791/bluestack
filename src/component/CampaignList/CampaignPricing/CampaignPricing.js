import React, {Component} from 'react';
import {connect} from 'react-redux';
import './CampaignPricing.scss';
import {setSelectedCampaign} from './../../../store/action/campaignAction';

class CampaignPricing extends Component {

    render() {
        return (
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <div className="compain-heading">
                        <div><img src={window.location.origin + '/' +  this.props.selectedCampaign.image_url} alt="Campaign Img"/></div>
                        <div>
                            <p>{this.props.selectedCampaign.name}</p>
                            <small>{this.props.selectedCampaign.region}</small>
                        </div>
                    </div>
                    <h1>Pricing</h1>
                    {
                        this.props.selectedCampaign.price.map( (price, index) => (
                            <div className="pricing" key={index}>
                                <div>{price.label}</div>
                                <div>{price.value}</div>
                            </div>
                        ))
                    }
                    <div align="center">
                        <button type="button" className="btn" onClick={this.props.setSelectedCampaignToNull}>Close</button>
                    </div>
                </div>

            </div>
        );
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
        setSelectedCampaignToNull: () => dispatch(setSelectedCampaign(null))
    };
}

export default connect(null, mapActionToDispatch)(CampaignPricing);
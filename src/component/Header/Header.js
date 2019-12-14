import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Header.scss';
import {CHANGE_LANGUAGE} from "./../../store/actionConstant";

class Header extends Component {

    changeLanguage = (event) => {
        this.props.changeLanguage(event.target.value);
    }

    render() {
        return (
            <div className="header">
                <div></div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/new-logo-white.png'} className="logo" alt="header logo"/>
                </div>
                <div className="pt-5">
                    <select onChange={this.changeLanguage}>
                        <option value="en">English</option>
                        <option value="ger">German</option>
                    </select>
                </div>
                <div></div>
            </div>
        );
    }
}

const mapActionToDispatch = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch({type: CHANGE_LANGUAGE, payload: language})
    }
}

export default connect(null, mapActionToDispatch)(Header);
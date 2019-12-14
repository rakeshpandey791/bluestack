import React, {Component} from 'react';
import './Header.scss';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <div></div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/new-logo-white.png'} className="logo" alt="header logo"/>
                </div>
                <div></div>
            </div>
        );
    }
}

export default Header;
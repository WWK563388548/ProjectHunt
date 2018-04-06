import React from 'react';
import Popup from './Popup';

class LoginPopup extends React.Component {
    render() {
        return (
            <Popup {...this.props} style="login-popup">
                <img src="/img/the-doge.ico" />
                <h1>Login to Join the Community</h1>
                <p>This is a Community to share and geek out about the code and project</p>
                <button className="facebook-btn">Login with Facebook</button>
                <p>We'll never post to Facebook without your permission.</p>
            </Popup>
        );
    }
}

export default LoginPopup;
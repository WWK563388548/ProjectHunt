import React from 'react';
import Popup from './Popup';
import Firebase from 'firebase';

class LoginPopup extends React.Component {

    handleLogin = () => {
        let provider = new Firebase.auth.FacebookAuthProvider();
        provider.addScope('public_profile');

        Firebase.auth().signInWithPopup(provider).then(function(result) {
            let user = result.user;
            console.log('Login successfully!', user);
        }).catch(function(error) {
            console.log('Failed!', error);
        });
    };

    render() {
        return (
            <Popup {...this.props} style="login-popup">
                <img src="/img/the-doge.ico" />
                <h1>Login to Join the Community</h1>
                <p>This is a Community to share and geek out about the code and project</p>
                <button className="facebook-btn" onClick={this.handleLogin}>Login with Facebook</button>
                <p>We'll never post to Facebook without your permission.</p>
            </Popup>
        );
    }
}

export default LoginPopup;
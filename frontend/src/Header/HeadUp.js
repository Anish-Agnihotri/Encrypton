import React, { Component } from 'react';
import './HeadUp.css';
import Login from '../Login';
import Profile from '../Profile';

const LS_KEY = 'mm-login-demo:auth';

class HeadUp extends Component {

    componentWillMount() {
        // Access token is stored in localstorage
        const auth = JSON.parse(localStorage.getItem(LS_KEY));
        this.setState({
          auth
        });
      }
    
      handleLoggedIn = auth => {
        localStorage.setItem(LS_KEY, JSON.stringify(auth));
        this.setState({ auth });
      };
    
      handleLoggedOut = () => {
        localStorage.removeItem(LS_KEY);
        this.setState({ auth: undefined });
      };

    render() {
        const { auth } = this.state;
        return (
            <div className="header">
                <div className="logo">
                    <a href="/">
                        <img src="https://i.imgur.com/7TMRr31.png" />
                    </a>
                </div>
                <div className="links">
                    <ul>
                        <li>
                            <a href="/dashboard">DASHBOARD</a>
                        </li>
                        <li>
                            <a href="/explorer">EXPLORER</a>
                        </li>
                        <li>
                            <a href="/status">STATUS</a>
                        </li>
                        <li>
                            <a href="/documentation">DOCUMENTATION</a>
                        </li>
                    </ul>
                </div>
                <div className="auth">
                        {auth ? (
                    <Profile auth={auth} onLoggedOut={this.handleLoggedOut} />
                ) : (
                    <Login onLoggedIn={this.handleLoggedIn} />
                )}
                 <a className="help" href="/help"><i className="fas fa-question"></i>HELP</a>
                </div>
            </div>
        );
    }
}

export default HeadUp;
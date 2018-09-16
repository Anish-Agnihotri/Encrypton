import React, { Component } from 'react';
import './HeadUp.css';
import Login from '../Login';
import Profile from '../Profile';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to='/'>
                        <img src="https://i.imgur.com/qvn0Xu0.png" />
                    </NavLink>
                </div>
                <div className="links">
                    {auth ? (<ul>
                        <li>
                            <NavLink to='/encrypt' activeClassName="highlight">DASHBOARD</NavLink>
                        </li>
                        <li>
                            <NavLink to='/explorer' activeClassName="highlight">TOOLS</NavLink>
                        </li>
                    </ul>) : (<ul>

                    </ul>)}
                    
                </div>
                <div className="auth">
                        {auth ? (
                    <Profile auth={auth} onLoggedOut={this.handleLoggedOut} />
                ) : (
                    <Login onLoggedIn={this.handleLoggedIn} />
                )}
                </div>
            </div>
        );
    }
}

export default HeadUp;
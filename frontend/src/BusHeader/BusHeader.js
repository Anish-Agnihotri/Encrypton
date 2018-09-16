import React, { Component } from 'react';
import './BusHeader.css';
import { NavLink } from 'react-router-dom';

class BusHeader extends Component {
    render () {
        return (
            <div className="BusHeader">
                <div className="leftPush">
                
                </div>
                <div className="midPush">
                    <div className="links2">
                        <ul>
                            <li>
                                <NavLink to='/explorer' activeClassName="highlight2">EXPLORER</NavLink>
                            </li>
                            <li>
                                <NavLink to='/status' activeClassName="highlight2">STATUS</NavLink>
                            </li>
                            <li>
                                <NavLink to='/documentation' activeClassName="highlight2">DOCUMENTATION</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BusHeader;
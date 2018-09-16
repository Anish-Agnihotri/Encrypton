import React, { Component } from 'react';
import './SubHeader.css';
import { NavLink } from 'react-router-dom';

class SubHeader extends Component {
    render () {
        return (
            <div className="subHeader">
                <div className="leftPush">
                
                </div>
                <div className="midPush">
                    <div className="links2">
                        <ul>
                            <li>
                                <NavLink to='/encrypt' activeClassName="highlight2">ENCRYPT DOCUMENT</NavLink>
                            </li>
                            <li>
                                <NavLink to='/view' activeClassName="highlight2">VIEW DOCUMENT</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubHeader;
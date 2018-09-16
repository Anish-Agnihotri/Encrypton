import React, { Component } from 'react';
import './EncryptView.css';
import { NavLink } from 'react-router-dom';

class EncryptView extends Component {
    render () {
        return (
            <div className="struct">
                <iframe src='http://localhost:8000' width='100%' height='2000px' className="iFrameHidden"></iframe>
            </div>
        );
    }
}

export default EncryptView;
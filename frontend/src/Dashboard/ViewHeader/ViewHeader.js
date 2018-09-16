import React, { Component } from 'react';
import './ViewHeader.css';

class ViewHeader extends Component {
    render () {
        return (
            <div className="mainText">
                <h1>
                    View Document
                </h1>
                <p>
                    Looking to view an encrypted hash, or verify the algorithm behind our encryption and hashing procedures? Simply provide us with your hashed IPFS key and it's corresponding secret token password to see info.
                </p>
            </div>
        );
    }
}

export default ViewHeader;
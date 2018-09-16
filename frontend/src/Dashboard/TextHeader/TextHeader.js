import React, { Component } from 'react';
import './TextHeader.css';

class TextHeader extends Component {
    render () {
        return (
            <div className="mainText">
                <h1>
                    Encrypt Document
                </h1>
                <p>
                    Upload your documents to the Interplanetary File System backed by the state-of-the-art Ethereum blockchain, ensuring that your identity and credentials are safelocked on the worlds largest open-sourced public ledger.
                </p>
            </div>
        );
    }
}

export default TextHeader;
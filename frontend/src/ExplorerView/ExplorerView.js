import React, { Component } from 'react';
import './ExplorerView.css';

class ExplorerView extends Component {
    render () {
        return (
            <div className="centerSection">
                <h1>
                    Explorer
                </h1>
                <p>
                    Use the explorer below to take a look at existing documents on IPFS. Note, you must have the unencrypted hash for this tool to work, unless piping through verify.
                </p>
                <div className="card bg-light mb-3 mx-auto" id="checkHashNoEncrypt">
                    <div className="card-header">
                        Enter your IPFS hash.
                    </div>
                    <div className="card-body addToCard2">
                        <div className="form-group form-inline">
                            <input type="text" placeholder="Input your file hash." className="form-control" />
                            <button className="textSubmit set btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ExplorerView;
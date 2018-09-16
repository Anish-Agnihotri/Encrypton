import React, { Component } from 'react';
import './ViewView.css';

class ViewView extends Component {
    render() {
        return (
            <div className="marginPadding">
                <div className="card bg-light mb-3 mx-auto" id="checkHash">
                    <div className="card-header">
                        Enter your hash and decryption key.
                    </div>
                    <div className="card-body addToCard">
                        <div className="form-group form-inline">
                            <input type="text" placeholder="Input your file hash." className="form-control" />
                            <input type="password" placeholder="Input your decryption key." className="form-control" />
                            <button className="textSubmit set btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
                );
            }
        }
        
export default ViewView;
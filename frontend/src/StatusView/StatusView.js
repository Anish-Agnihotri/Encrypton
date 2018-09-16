import React, { Component } from 'react';
import './StatusView.css';
import axios from 'axios';
const url3 = 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=T2IH6VJHTEYT3VCZKE495BETGNQZC5235Zn';

class StatusView extends Component {
    /*constructor(props) {
        super(props)
        this.state = {
            parsedValue: '',
        }
    }

    setInterval( () => {
            try {
                const response = await axios.get(url3);
                const data = response.data;
                var parsed = parseInt(data.result, 16);
                this.setState({
                    parsedValue: parsed
                }, console.log("State updated."));
            } catch (error) {
                console.log(error);
            }
        }, 1500); */

    render () {
        return (
            <div className="centerSection">
                <h1>
                    Status
                </h1>
                <p>
                    See current status of the blockchain and IPFS as they update in live-time. Note, depending on information provided, our service may be delayed by up to five seconds.
                </p>
                <div className="leftAlign">
                    <div className="blockchainStatus">
                        <div className="visualGraph">
                            <p>Current block</p>
                            <div className="leftGraph">
                            <h5>Blockchain is currently at block <span className="highlight1"> 6342220</span>.</h5>
                            </div>
                            <div className="rightData">
                            <li></li>
                            </div>
                        </div>
                        <div className="visualGraph">
                            <p>Network load</p>
                            <div className="leftGraph">
                            <h5>Current network transaction price is <span className="highlight1Yellow"></span> 310 gwei.</h5>
                            </div>
                            <div className="rightData">
                            <li id="mild"></li>
                            </div>
                        </div>
                        <div className="visualGraph">
                            <p>Login/Signup request status</p>
                            <div className="leftGraph">
                            <h5>Login/Signup operations are <span className="highlight1">functional</span>.</h5>
                            </div>
                            <div className="rightData">
                            <li></li>
                            </div>
                        </div>
                        <div className="visualGraph" id="finalobj">
                            <p>Load balancer status</p>
                            <div className="leftGraph">
                            <h5>Server memory usage is currently <span className="highlight1Red" id="memoryUsed"></span> 72.8 MB.</h5>
                            </div>
                            <div className="rightData">
                            <li id="severe"></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export  default StatusView;
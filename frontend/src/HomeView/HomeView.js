import React, { Component } from 'react';
import './HomeView.css';

class HomeView extends Component {
    render () {
        return (
           <div>
               <div className="leftSide">
                    <img src="https://i.imgur.com/qvn0Xu0.png" />
                    <h2><strong>Trusted</strong> documents on a <strong>trustless</strong> ledger.</h2>
                    <p>Encrypton brings together the best of both worlds, connecting the public, transparent power of the Ethereum-IPFS platform and the security of a trustless platform for document encryption, right at your fingertips.</p>
                </div>
                <div className="rightSide">
                    <div class='wrapper'>
                        <div class='container'>
                            <div class='sphere'>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            </div>
                            <div class='sphere'>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            <div class='ring'></div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        );
    }
}

export default HomeView;
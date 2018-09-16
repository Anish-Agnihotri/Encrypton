import React, { Component } from 'react';
import './DocumentationView.css';

class DocumentationView extends Component {
    render() {
        return (
            <div className="centerSection">
                <h1>
                    Documentation
                </h1>
                <p>
                    The following is server documentation that can be used to not only deploy your own node (for development or IPFS interaction purposes), but to also better understand the hashing that occurs behind the scenes.
                </p>
                <div className="leftFloated">
                    <a href="#ipfsvalidation" class="highlighted">1. Implementing IPFS validation.</a>
                    <br />
                    <a href="#ipfssmartcontract" class="highlighted">2. Developing IPFS smart contract.</a>
                    <br />
                    <a href="#ipfsencryption" class="highlighted">3. Encrypting IPFS generated hash.</a>
                    <br />
                    <a href="#ipfshashviewer" class="highlighted">4. Building an IPFS hash proof viewer.</a>
                    <br />
                    <a href="#forking" class="highlighted">5. Forking repository and setup.</a>
                </div>
                <div class="documentDiv" id="ipfsvalidation">
                    <h3>1. Implementing IPFS validation.</h3>
                    <p>Implementing IPFS validation into the application is as simple as allowing uses to upload their own files and additing to them to the file system through the Interplanetary File System (IPFS) daemon. By using the Embark library specifically @2.6.9, we are able to sucessfully append files onto the Ethereum blockchain using the support of MetaMask.</p>
                    <p>This is in part made possible by the validation code that was first written to invoke MetaMask on the client side, and verify that the client was both running an appropriate version of the plugin, and that it was using the correct Ethereum network.</p>
                    <img src='https://i.imgur.com/LHShp71.png' />
                </div>
                <div class="documentDiv" id="ipfssmartcontract">
                    <h3>2. Developing IPFS smart contract.</h3>
                    <p>The second part of the application involved developing the IPFS smart contract. This smart contract essentially allowed us to upload our documents as buffers, give them a IPFS hash, and after signing, make them public to the rest of the network. It not only allowed us to interact with the complete blockchain, but gave us a way to begin adding files to the public blockchain (one which would later lead to us better implementing encryption within our own platform). Simply speaking, the contract works by executing an empty gas transaction storing the hash for the IPFS document within every block transacted.</p>
                    <img src='https://i.imgur.com/cyZTouq.png' />
                </div>
                <div class="documentDiv" id="ipfsencryption">
                    <h3>3. Encrypting IPFS generated hash.</h3>
                    <p>Once we had devised a simple contract that would allow us to publically truncate files to IPFS, we needed to find a way to store secure, restricted content. The simplest way that was presented to us involved directly encrypting and decrypting the IPFS hash itself using a private key specified by the client. By using the Crytpo-JS libraries, we were able to handle file upload, hash generation, encryption, decryption (throguh string conversion), and piping the reamining file to the client. In addition, by working this logic into a mandatory signing requirement function, we were able to force viewers to also sign their viewership of the confidential information before they were able to unlock documents (even with a privacy key), essentially adding a second layer of authentication on the network.</p>
                    <img src='https://i.imgur.com/UXn0Fir.png' />
                </div>
                <div class="documentDiv" id="ipfshashviewer">
                    <h3>4. Building an IPFS hash proof viewer.</h3>
                    <p>Another aspect of using IPFS comes into play when verifying that each encrypted hash can be decrypted using only its accompanying secret key. In order to prove this, a verify simple verify page was developed that simply assigns the two user input variables (hashKey and deEncryptionPassword) to two seperate vars. Then, these vars are yet again passed through the deCrypt function of the Cryto-JS client-side library in order to produce a link to the unencrypted hash of the IPFS file. If this link matches the original document that was uploaded, one can successfully verify that the encryption was correct.</p>
                    <img src='https://i.imgur.com/m46W0hD.png' />
                </div>
                <div class="documentDiv" id="forking">
                    <h3>5. Forking repository and setup.</h3>
                    <p>Finally, if you're interested in forking our repository and trying it yourself, setup is as easy as five steps. After you've forked the repo and ran the initial 'yarn install' and 'npm install' scripts, simply type 'cd back-end &amp;&amp; yarn start &amp;&amp; cd ../front-end &amp;&amp; yarn start &amp;&amp; cd dashboard &amp;&amp; ipfs daemon &amp;&amp; embark blockchain &amp;&amp; embark run' to run the complete platform.</p>
                    <p>Note, this automatically serves webservers on port 3000 and 8000, with a listening API on port 8001. Feel free to change these as deemed fit for your installation.</p>
                    <img src='https://i.imgur.com/GhPcbwP.png' />
                </div>
            </div>
        );
    }
}

export default DocumentationView;
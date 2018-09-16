import React from 'react';
import ReactDOM from 'react-dom';
import { config as dotEnvConfig } from 'dotenv';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';


ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ), document.getElementById('root'));

const url3 = 'https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=T2IH6VJHTEYT3VCZKE495BETGNQZC5235Zn';
function runGetBlock (){
  const getBlock = async url => {
    try {
      const response = await axios.get(url3);
      const data = response.data;
      var parsedValue = parseInt(data.result, 16);
      console.log(parsedValue);
    } catch (error) {
      console.log(error);
    }
  }
  getBlock(url3);
};
setInterval( runGetBlock, 5000 );

const url2 = 'https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=2IH6VJHTEYT3VCZKE495BETGNQZC5235Zn';
function runGasPrice (){
const getGasPrice = async url => {
  try {
    const response = await axios.get(url2);
    const data = response.data;
    var parsedValue2 = parseInt(data.result, 16)/10000000;
  } catch (error) {
    console.log(error);
  }
}
  getGasPrice(url2);
};
setInterval( runGasPrice, 5000 );



// Load ENV variables
dotEnvConfig({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'
});

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
*/
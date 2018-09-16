# Encrypton

Encrypton was designed and developed to be an easy solution to document credentialization and authentication on a public ledger. It offers a convenient way for individuals and organizations to verify users and share files over the IPFS (InterPlanetary File System) using the inherent trust built into hash storing, the Ethereum blockchain, and our AES-256 encryption.

## Inspiration
The idea for Encrypton stemmed from the conspicious lack of platforms to share private data in a secure and safe manner. With an ever developing world, it's become increasingly evident that documents on the cloud are the future. But, with platforms like Google Drive & Dropbox, it's difficult to trust large private corporations with such sensitive data. That's where Encrypton comes in with our easy to use platform for secure file storage (on IPFS) and transfer. 

## Compile
Starting the Encrypton platform is as simple as running a few commands in your terminal: 
1. Start the backend server by navigating to ```/backend```, installing the dependencies with ```npm install``` and then starting it up with ```npm start```.
2. Start the React frontend server by navigating to ```/frontend```, installing the dependencies with ```npm install``` and then starting it up with ```npm start```.
3. Start the encryption frontend and server by navigating to ```/frontend/dashboard```, and running these three commands: ```ipfs daemon```, ```embark blockchain```, and ```embark run```. Do note, ```embark@2.6.9``` installed globally and ```geth``` are dependencies. 
4. Finally, makesure you have the ```Metamask``` plugin and are authenticated on the ```Ropsten``` test network. 

## Fancy screesnhots of it working

## Next Steps

## Thank you for reading and stay tuned for future updates!

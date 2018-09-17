# Encrypton

Encrypton was designed and developed to be an easy solution to document credentialization and authentication on a public ledger. It offers a convenient way for individuals to encrypt and share files over IPFS (InterPlanetary File System) using the Ethereum and client-side AES-256 encryption.

> PS. Anish Agnihotri and Ryan Ouyang pair programmed the entire project on Anish's laptop, hence why Ryan does not have any commits.

## Inspiration
The idea for Encrypton stemmed from the conspicious lack of platforms to share private data in a secure and safe manner. With an ever developing world, it's become increasingly evident that documents on the cloud are the future. But, with platforms like Google Drive & Dropbox, it's difficult to trust large private corporations with such sensitive data. That's where Encrypton comes in with our easy to use platform for secure file storage (on IPFS) and transfer. 

## Compile
Starting the Encrypton platform is as simple as running a few commands in your terminal: 
1. Start the backend server by navigating to ```/backend```, installing the dependencies with ```npm install``` and then starting it up with ```npm start```.
2. Start the React frontend server by navigating to ```/frontend```, installing the dependencies with ```npm install``` and then starting it up with ```npm start```.
3. Start the encryption frontend and server by navigating to ```/frontend/dashboard```, and running these three commands: ```ipfs daemon```, ```embark blockchain```, and ```embark run```. Do note, ```embark@2.6.9``` installed globally and ```geth``` are dependencies. 
4. Finally, make sure you have the ```Metamask``` plugin and are authenticated on the ```Ropsten``` test network. 

## Fancy screesnhots of it working
![Landing Page](https://i.imgur.com/8S6YQe6.png)
Landing page. 
![Encrypt Documents](https://i.imgur.com/QPdksIE.png)
Encrypt Documents page. 
![View Encrypted Documents](https://i.imgur.com/hElndf7.png)
View encrypted documents page. 
![IPFS Explorer](https://i.imgur.com/bUx7sEJ.png)
IPFS unencrypted file explorer page.
![Network Statistics](https://i.imgur.com/BjfcczU.png)
Network statistics page. 
![Documentation Page](https://i.imgur.com/GC6E1fc.png)
Documentation page. 

## Next Steps
A user-first unified platform to host documents and identification that users can choose to easily share with government organizations and other companies for short periods of times. 

## Thank you for reading and stay tuned for future updates!

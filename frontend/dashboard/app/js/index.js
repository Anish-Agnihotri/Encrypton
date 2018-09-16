const ipfs_url_base = 'https://gateway.ipfs.io/ipfs/';
const sign_page_url = 'sign';

// Helper function to show only one div
var showOnly = function(show_id) {
  
  let section_ids = ['#main-content', '#metamask-login', '#metamask-install', '#metamask-network'];
  
  section_ids.map(section_id => {$(section_id).hide()});
  $(show_id).show();
}

// Helper function to get a variable from query string
var getQueryVariable = function(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
  }
  return(false);
}


// Check for Metamask and show/hide appropriate warnings.
window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if ((typeof web3 !== 'undefined') && (web3.givenProvider !== null)) {
    // Checking if user is logged into an account
    web3.eth.getAccounts(function(err, accounts){
        if (err != null) console.error("An error occurred: "+err);
        
        // User is not logged into Metamask
        else if (accounts.length == 0) {
          showOnly('#metamask-login');                        
          console.log("User is not logged in to MetaMask");
        }
      
        // User is logged in to Metamask
        else {
          web3.eth.net.getId((err, net_id) => {
            if (err != null) console.error("An error occurred: "+err);
            
            // User is on the correct network
            // Ropsten test network = 3, main net = 1
            else if (net_id == 3) {
              console.log("User is logged in and on correct network");
              showOnly('#main-content');           
            }
            
            // User is not on the right network
            else {
              console.log("User is logged in and on WRONG network");
              showOnly('#metamask-network');
            }
          })
      }
  });
    
  // User does not have Metamask / web3 provider  
  } else {
    showOnly('#metamask-install');
    console.log('No web3? You should consider trying MetaMask!');
  }
})



$(document).ready(function() {


  var ipfs = undefined;
  EmbarkJS.Storage.setProvider('ipfs',{server: 'ipfs.infura.io', port: '5001', protocol: 'https'})  
  
  //getUser();

  $("#learn-more").hide();
  
  $(".btn-learn-more").click(function() {
    $(".btn-learn-more").hide();
    $("#learn-more").show();
  });
  
  // Sign page
  if (getQueryVariable("id") != false && getQueryVariable("ipfs") != false) {
    let id = getQueryVariable("id");
    $("#signed").hide();

    
    // Get existing signatures
    $("#signatures button.get").click(function() {    
      let addresses = OpenSign.methods.getSignatures(id).call().then(function(signatures) { 
        signatures.forEach(function(sig) {
          console.log(sig) 
          
          /*
          function decrypt(buffer){
            var decipher = crypto.createDecipher(algorithm,password)
            var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
            return dec;
          }
          
          decryptedFile = decrypt(cryptedFile);*/

          

          $("#signatures button.get").hide();
          $("#signatures .card-body").append("<p>" + sig + "</p>");
        })
      });
        
    });
    
    var deEncryptionPassword = '';

    $("#get_password button.textSubmit").click(function() {
      deEncryptionPassword = $("#get_password input[type=password]").val();
      console.log(deEncryptionPassword);
    });


    let flag2 = false;
    var parsedDecrypted = '';

    function checkSigs() {
      //console.log(currentUser);
      console.log("current user:" + web3.eth.defaultAccount);
      let addresses = OpenSign.methods.getSignatures(id).call().then(function(signatures) { 
        signatures.forEach(function(sig) {
          console.log("signed:" + sig) 
          
          /*
          function decrypt(buffer){
            var decipher = crypto.createDecipher(algorithm,password)
            var dec = Buffer.concat([decipher.update(buffer) , decipher.final()]);
            return dec;
          }
          
          decryptedFile = decrypt(cryptedFile);*/

          if (web3.eth.defaultAccount === sig) {
            flag2 = true;
          }
        })
      });

      if (flag2) {
        $("span.file_url").html('<a href="' + ipfs_url_base + parsedDecrypted + '">View document</a>');
      } 
    }

    // Sign the document
    $("#sign button.set").click( function() {  

      /*const accounts = web3.eth.getAccounts();
      console.log(accounts[0]);*/

      OpenSign.methods.signDocument(id).send({from: web3.eth.defaultAccount});
      console.log(window.location.href);
      var encryptLink = window.location.href.substr(window.location.href.indexOf("&ipfs=") + 6);
      console.log("Encrypted hash = " + encryptLink)
      var decrypted = CryptoJS.AES.decrypt(encryptLink, deEncryptionPassword);
      console.log('decryptiong password used is = ' + deEncryptionPassword);
      parsedDecrypted = decrypted.toString(CryptoJS.enc.Utf8);
      console.log('type of decrypted.toString is =' + typeof(decrypted));
      console.log("FINAL PRP REPORT FINAL 2018 = " + parsedDecrypted);

      setInterval(checkSigs, 5000);

      $("#signed").show();
      
      if (flag2) {
        $("span.file_url").html('<a href="' + ipfs_url_base + parsedDecrypted + '">View document</a>');
      } 

    });
  }
  
  
  // "Create an Agreement" page
  else {
    $('#storage').hide()
    $('#blockchain').hide()
    $('#invite').hide()
    
   var encryptionPassword = '';

    // Step 0 - Encrypt File with PGP key.
    $("#encrypt button.textSubmit").click(function() {
      encryptionPassword = $("#encrypt input[type=password]").val();
      $("#storage").show()
    });
 /*
    // var algorithm = 'aes-256-ctr';
    // var password = encryptionKey;
    var reader = new FileReader();

    var encrypted;
    $('#file-input').on('change', function(e){
      console.log("Here!");
      var file = e.target.files[0];

      console.log(file);

      var flag = false;
      reader.onload = function(e) {
        encrypted = CryptoJS.AES.encrypt(e.target.result, encryptionPassword);
        console.log(encrypted);
        console.log('this bibba works');

      }

      reader.readAsDataURL(file);

      //reader.readAsDataURL()

    // Step 1 - upload file to IPFS
    $("#storage button.uploadFile").click(function() {
      var input = $("#storage input[type=file]");

      /*function encrypt(buffer){
        var cipher = crypto.createCipher(algorithm,password)
        var crypted = Buffer.concat([cipher.update(buffer),cipher.final()]);
        return crypted;
      }
      cryptedFile = encrypt(input);*/

      /*function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      };

      async function sleepTime() {
        console.log("sleeping");
        await sleep(2000);
        console.log("two seconds later");
        flag = true;
      }

      sleepTime();
      */
     $("#storage button.uploadFile").click(function() {
      var input = $("#storage input[type=file]");
        //buffer = new Buffer(encrypted.toString(), 'base64');
        EmbarkJS.Storage.uploadFile(input).then(function(hash) {
          ipfs = hash;
          $("#storage .card-body").append('<p><a href="' + ipfs_url_base + ipfs + '">Here is a link to your document</p>');
          $("#blockchain").show()
          //console.log('ipfs');
        })
        .catch(function(err) {
          if(err){
            $("#storage .card-body").append('<p>Sorry, it looks like there is a problem connecting to IPFS at the moment. Please try again later.</p>');
            console.log("IPFS uploadFile Error => " + err.message);
          }
        });
      });
  
    // Step 2 - sign document
    $("#blockchain button.set").click(function() {
      let ipfs_hex = web3.utils.asciiToHex(ipfs);
      let id = web3.utils.soliditySha3(ipfs_hex, Date.now());
      console.log("id=" + id);
      console.log("ipfs_hex=" + ipfs_hex);
      
    
      OpenSign.methods.addDocument(id, ipfs_hex).send({from: web3.eth.defaultAccount});
      console.log(encryptionPassword);
      console.log(ipfs);
      var encrypted = CryptoJS.AES.encrypt(ipfs, encryptionPassword);

      let sign_url = window.location.href + sign_page_url + "/?id=" + id + "&ipfs=" + encrypted;

      /*console.log('this is the type of ipfs = ' + typeof(ipfs));
      console.log(encrypted.toString());*/

      


      $("#invite").show();  
      $("#invite .card-body").append("<p>Keep this address and share it with others who you want to sign the document: </p>");
      $("#invite .card-body").append('<p><a href="' + sign_url + '">' + sign_url + "</p>");
    });
  }
  

});


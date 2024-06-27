const { Web3 } = require('web3');
const hdkey = require('ethereumjs-wallet/hdkey');
const bip39 = require('bip39');

const web3 = new Web3('https://bsc-testnet-rpc.publicnode.com');

const mnemonic = 'opinion tent rare predict sentence figure bird spare voyage feel horror exotic';
const seed = bip39.mnemonicToSeedSync(mnemonic);

const hdWallet = hdkey.fromMasterSeed(seed);

const path = "m/44'/60'/0'/0";

const numSubAccounts = 280;

const child_tmp = hdWallet.derivePath(path + '/' + 0);
const wallet_tmp = child_tmp.getWallet();
const privateKey = wallet_tmp.getPrivateKeyString();
const address_tmp = wallet_tmp.getAddressString();

const main = async()=>{
  let nonce = await web3.eth.getTransactionCount(address_tmp);
  console.log("nonce: "+nonce);

   for (let i = 0; i < numSubAccounts; i++) {
    const child = hdWallet.derivePath(path + '/' + i);
    const wallet = child.getWallet();
    const address = wallet.getAddressString();

    const tx = {
      from: address_tmp,
      to: address,
      value: web3.utils.toWei('0.001', 'ether'), 
      gas: 50000,
      gasPrice: web3.utils.toWei('5', 'gwei'), 
      nonce: nonce
    };
    nonce++;

    await web3.eth.accounts.signTransaction(tx, privateKey)
      .then(async(signedTx) => {
        await web3.eth.sendSignedTransaction(signedTx.rawTransaction)
          .on('receipt', console.log)
          .on('error', console.error);
      })
      .catch(console.error);

  }
}
main();

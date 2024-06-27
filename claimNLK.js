const { Web3 } = require('web3');
const web3 = new Web3('https://bsc-testnet-rpc.publicnode.com');

const hdkey = require('ethereumjs-wallet/hdkey');
const bip39 = require('bip39');

const mnemonic = 'opinion tent rare predict sentence figure bird spare voyage feel horror exotic';
const seed = bip39.mnemonicToSeedSync(mnemonic);

const hdWallet = hdkey.fromMasterSeed(seed);

const path = "m/44'/60'/0'/0";

const numSubAccounts = 275;

const toAddress = '0x3cC6FC1035465d5b238F04097dF272Fe9b60EB94';
const main = async()=>{
    for (let i = 0; i < numSubAccounts; i++) {
        
        const child = hdWallet.derivePath(path + '/' + i);
        const fromAddress = child.getWallet();
        const privateKey = fromAddress.getPrivateKeyString();
        const txCount = web3.eth.getTransactionCount(toAddress);
        let nonce = await web3.eth.getTransactionCount(fromAddress.getAddressString());

        const hexData1= '0xee42b5c7000000000000000000000000';
        const hexData2='000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013000000000000000000000000000000000000000000000000000000000000000';
        fromAddressString=fromAddress.getAddressString();
        fromAddressString=fromAddressString.slice(2);
        const hexData=hexData1+fromAddressString+hexData2;
        
        const tx = {
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toWei('0', 'ether'), 
        gas: 100000,
        gasPrice: web3.utils.toWei('5', 'gwei'), 
        data: hexData,
        nonce : nonce
        };

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




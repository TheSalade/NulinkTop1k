const { Web3 } = require('web3');
const web3 = new Web3('https://bsc-testnet-rpc.publicnode.com');

const hdkey = require('ethereumjs-wallet/hdkey');
const bip39 = require('bip39');

const mnemonic = 'YOUR SEED PHRASE';
const seed = bip39.mnemonicToSeedSync(mnemonic);

const hdWallet = hdkey.fromMasterSeed(seed);

const path = "m/44'/60'/0'/0";

const numSubAccounts = 275;
const toAddress = '0x06A0F0fa38AE42b7B3C8698e987862AfA58e90D9';

const receiver='YOUR WALLET ADDRESS';
const main = async()=>{
    for (let i = 0; i < numSubAccounts; i++) {
        
        const child = hdWallet.derivePath(path + '/' + i);
        const fromAddress = child.getWallet();
        const privateKey = fromAddress.getPrivateKeyString();
        const txCount = web3.eth.getTransactionCount(toAddress);
        let nonce = await web3.eth.getTransactionCount(fromAddress.getAddressString());

        console.log("address : "+fromAddress);

        const tx = {
            from: fromAddress,
            to: toAddress,
            value: web3.utils.toWei('0', 'ether'), 
            gas: 100000,
            gasPrice: web3.utils.toWei('5', 'gwei'), 
            data: '0xa9059cbb000000000000000000000000'+receiver+'0000000000000000000000000000000000000000000000008ac7230489e80000',
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




require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note right pulse gesture beach suspect genuine'; 
let testAccounts = [
"0xac958dcf575706ecb5e20a106e4f6259c9fab2a29f56f1b03a25ea7c1c8b8a41",
"0x14879eb063b3013ef9e1cc2badb13a2633588d225d9135da7140cbdd808b7be5",
"0x5575d1da0731e736cb6263b2ad212c5573da5a9165abaafbdbd153a165819588",
"0x34080171890c9abe736995d18b08f5aa6a7d4819620437a80b9d274ed11cdbb4",
"0xe57045b52424dcad6dcbdd5b54c0f7ae08ec0ac0f6cc92ec593cfa690cd2ef83",
"0xe83681f33c2ab60ec7739f3025487de9eaaf85423aab1dd9af66e72cfdc519df",
"0x43580c8b2e96befe8a2872478edfb9a24aa5a8aec1be0abe465d83be7808a81a",
"0x6659a2f5f4988652b887edb88973f78bab3f9981c6be229699e8cc35b77af037",
"0x23898bac9c8fd157afceddcba1d0c04d78564d2fb326a01b6770cf1614fe103e",
"0x5cf51a30e57105c06825243ee0c50363c79bb797471985cee737a05f2cc17841"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



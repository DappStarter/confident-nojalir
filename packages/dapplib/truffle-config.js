require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn punch hunt fantasy force split'; 
let testAccounts = [
"0x0ffd1145f0f829465af2f260dedcd7fd04e2fe817802cab7321eacc21fbd07be",
"0x7cdebf031294b7a59fefd346dcac1211ebc3d1124121156304dd320237fe02e0",
"0x1a1d953fc884a6f2ae66c95a2db14516cc6d21d4329d742fac8015dac19c0ea4",
"0x016865747a6a8aa772e21b9fdcac6c8cfe1c09f014ef9aa3430d68654de21cbd",
"0x880499fbfc536406bc5f330300c7d07791ce876de3af448515e6349787e4f2cd",
"0xe4a72c24dddf89ed22ddd33fd93a1b533e43e437e5d9288df513786c9feb1679",
"0x280c3f93a2860b24e2ee84ec227ae56d419ae09bc0570d8aead07097571dca67",
"0x0bf9061305f0e9c22a39d616fc44dfcb6869888e58088d5105f5923a3a50ddbb",
"0xd88ea8326763adc8bc42c68552222079bd262af430c49b0afc1366ec97ada755",
"0xb0a0a3303e61aaab4b2ad46f6e92b30686305708d5e29ec59388bea157f66a90"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
